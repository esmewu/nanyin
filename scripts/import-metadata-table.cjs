const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const METADATA_FILE = path.join(ROOT, "song-metadata.js");
const SONGLISTS_DIR = path.join(ROOT, "songlists");

const inputFile = process.argv[2];
if (!inputFile) {
  console.error("Usage: node scripts/import-metadata-table.cjs <metadata-table.txt>");
  process.exit(1);
}

const GENRES = [
  "R&B",
  "中国风",
  "流行摇滚",
  "另类摇滚",
  "电子流行",
  "另类流行",
  "儿童流行",
  "闽南语流行",
  "民族流行",
  "乡村流行",
  "新浪潮",
  "嘻哈",
  "放克",
  "摇滚",
  "民谣",
  "流行",
  "爵士",
  "说唱",
  "古风",
  "民歌",
  "Blues",
];

function normalizeGenre(genre) {
  const value = String(genre || "").trim();
  return (
    {
      "R&B / Soul": "R&B",
      Soul: "R&B",
      粤语: "流行",
      国风: "中国风",
      "爵士 / Blues": "爵士",
      流行摇滚: "摇滚",
      另类摇滚: "摇滚",
      电子流行: "流行",
      另类流行: "流行",
      儿童流行: "流行",
      闽南语流行: "流行",
      民族流行: "流行",
      乡村流行: "流行",
      新浪潮: "流行",
      嘻哈: "说唱",
      放克: "R&B",
    }[value] || value
  );
}

function readWindowArray(file, globalName) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(file, "utf8"), ctx, { filename: file });
  return ctx.window[globalName] || [];
}

function normalizeTitle(title) {
  return String(title || "")
    .normalize("NFKC")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[（(].*?[）)]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLocaleLowerCase("en-US")
    .replace(/\s*&\s*/g, "&")
    .replace(/\s*\/\s*/g, "/")
    .replace(/[.!?。！？、，,，：:；;]+$/g, "")
    .replace(/\s+/g, "");
}

function songLength(title, language) {
  if (language === "英文") return String(title).replace(/\s+/g, "").length;
  return [...String(title).replace(/[^\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}A-Za-z0-9]/gu, "")].length;
}

function sectionLabel(section) {
  return {
    chinese: "中文歌曲",
    cantonese: "粤语歌曲",
    minnan: "闽南语歌曲",
    japanese: "日文歌曲",
    english: "英文歌曲",
    other: "其他语种歌曲",
  }[section] || section;
}

function updateSummary(doc) {
  const songs = doc.songs || {};
  const allSongs = Object.values(songs).flat();
  doc.summary = {
    ...(doc.summary || {}),
    chinese: songs.chinese?.length || 0,
    cantonese: songs.cantonese?.length || 0,
    minnan: songs.minnan?.length || 0,
    japanese: songs.japanese?.length || 0,
    english: songs.english?.length || 0,
    other: songs.other?.length || 0,
    total: allSongs.length,
    originalArtistCompleted: allSongs.filter((song) => song.originalArtist).length,
    releaseYearCompleted: allSongs.filter((song) => song.releaseYear).length,
    genreCompleted: allSongs.filter((song) => song.genre).length,
    pending: allSongs.filter((song) => !song.originalArtist || !song.releaseYear || !song.genre).length,
  };
}

function makeSonglistMarkdown(doc) {
  updateSummary(doc);
  const lines = [];
  lines.push(`# ${doc.singer} 歌单`);
  lines.push("");
  lines.push(`整理规则：${doc.rules || "中文区、日文区和英文区分开；同名歌曲已去重；每区均按字数从少到多排列。英文歌名统一使用 Title Case。年份、风格和原唱后续补入。"}`);
  lines.push("");
  const labels = [
    ["chinese", "中文区"],
    ["cantonese", "粤语区"],
    ["minnan", "闽南语区"],
    ["japanese", "日文区"],
    ["english", "英文区"],
    ["other", "其他语种区"],
  ];
  for (const [key, label] of labels) {
    if (doc.summary[key]) lines.push(`- ${label}：${doc.summary[key]} 首`);
  }
  lines.push(`- 合计：${doc.summary.total} 首`);
  lines.push(`- 原唱字段：已补 ${doc.summary.originalArtistCompleted} / ${doc.summary.total}`);
  lines.push(`- 发行年份字段：已补 ${doc.summary.releaseYearCompleted} / ${doc.summary.total}`);
  lines.push(`- 风格字段：已补 ${doc.summary.genreCompleted} / ${doc.summary.total}`);
  lines.push(`- 仍需人工确认：${doc.summary.pending} 首`);
  lines.push("");
  lines.push("说明：本文件根据用户提供的纯文本歌单整理生成；当前主要录入歌名。");
  lines.push("");

  for (const [section, songs] of Object.entries(doc.songs || {})) {
    if (!songs.length) continue;
    lines.push(`## ${sectionLabel(section)}`);
    lines.push("");
    lines.push("| # | 歌名 | 原唱 | 年份 | 风格 | 语种 | 字数 | confidence | 备注 |");
    lines.push("|---:|---|---|---|---|---|---:|---|---|");
    songs.forEach((song, index) => {
      lines.push(
        `| ${index + 1} | ${song.title} | ${song.originalArtist || ""} | ${song.releaseYear || ""} | ${song.genre || ""} | ${song.language || ""} | ${songLength(song.title, song.language)} | ${song.confidence || "pending"} | ${song.confirmationNote || ""} |`
      );
    });
    lines.push("");
  }

  return lines.join("\n");
}

function parseMetadataTable(text) {
  const rows = [];
  const genreRe = GENRES.map((genre) => genre.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");

  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.replace(/[“”]/g, '"').replace(/[‘’]/g, "'");
    const trim = line.trim();
    if (!trim || trim === "英文" || trim.startsWith("```")) continue;

    if (trim.startsWith("|")) {
      const parts = trim
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((part) => part.trim());
      let title;
      let originalArtist;
      let releaseYear;
      let genre;
      let confirmationNote = "";
      if (/^\d+$/.test(parts[0])) {
        [, title, originalArtist, releaseYear, genre, confirmationNote = ""] = parts;
      } else {
        [title, originalArtist, releaseYear, genre, confirmationNote = ""] = parts;
      }
      if (/^\d{4}$/.test(releaseYear || "") && genre) {
        rows.push({
          singerId: "",
          title,
          originalArtist,
          releaseYear,
          genre: normalizeGenre(genre),
          source: "user-provided 1-1000 metadata table",
          sourceUrl: "",
          confidence: "medium",
          matchedTitle: title,
          matchedArtist: originalArtist,
          musicBrainzId: "",
          checkedAt: "2026-07-26",
          confirmationNote: (confirmationNote || "").trim(),
        });
      }
      continue;
    }

    const match = line.match(new RegExp(`^\\s*(\\d{1,4})\\s+(.+?)\\s{2,}(.+?)\\s+(\\d{4})\\s+(${genreRe})\\s*(.*)$`));
    if (match) {
      rows.push({
        singerId: "",
        title: match[2].trim(),
        originalArtist: match[3].trim(),
        releaseYear: match[4],
        genre: normalizeGenre(match[5]),
        source: "user-provided 1-1000 metadata table",
        sourceUrl: "",
        confidence: "medium",
        matchedTitle: match[2].trim(),
        matchedArtist: match[3].trim(),
        musicBrainzId: "",
        checkedAt: "2026-07-26",
        confirmationNote: (match[6] || "").trim(),
      });
      continue;
    }

    const previous = rows[rows.length - 1];
    if (
      previous &&
      /^[A-Za-z][A-Za-z\s'&.-]+$/.test(trim) &&
      /^[A-Za-z]/.test(previous.title)
    ) {
      previous.title = `${previous.title} ${trim}`.replace(/\s+/g, " ");
      previous.matchedTitle = previous.title;
    }
  }

  return rows;
}

function writeMetadata(entries) {
  const existing = readWindowArray(METADATA_FILE, "nanyinSongMetadata");
  const byKey = new Map(existing.map((item) => [`${item.singerId || ""}::${normalizeTitle(item.title)}`, item]));
  for (const item of entries) {
    const key = `${item.singerId || ""}::${normalizeTitle(item.title)}`;
    const current = byKey.get(key) || {};
    const next = {
      ...current,
      ...item,
      genre: normalizeGenre(item.genre),
    };
    if (!item.confirmationNote && current.confirmationNote) {
      next.confirmationNote = current.confirmationNote;
    }
    byKey.set(key, next);
  }
  fs.writeFileSync(METADATA_FILE, `window.nanyinSongMetadata = ${JSON.stringify([...byKey.values()], null, 2)};\n`);
}

function updateSonglists(entries) {
  const byTitle = new Map(entries.map((item) => [normalizeTitle(item.title), item]));
  let touchedFiles = 0;
  let touchedSongs = 0;

  for (const file of fs.readdirSync(SONGLISTS_DIR).filter((name) => name.endsWith("_南音_歌单.json"))) {
    const jsonPath = path.join(SONGLISTS_DIR, file);
    const doc = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    let touched = false;
    for (const songs of Object.values(doc.songs || {}).filter(Array.isArray)) {
      for (const song of songs) {
        const metadata = byTitle.get(normalizeTitle(song.title));
        if (!metadata) continue;
        song.originalArtist = metadata.originalArtist;
        song.releaseYear = metadata.releaseYear;
        song.genre = normalizeGenre(metadata.genre);
        song.confidence = metadata.confidence;
        song.source = metadata.source;
        song.checkedAt = metadata.checkedAt;
        if (metadata.confirmationNote) song.confirmationNote = metadata.confirmationNote;
        touched = true;
        touchedSongs += 1;
      }
    }
    if (touched) {
      updateSummary(doc);
      fs.writeFileSync(jsonPath, JSON.stringify(doc, null, 2) + "\n");
      fs.writeFileSync(jsonPath.replace(/\.json$/, ".md"), makeSonglistMarkdown(doc));
      touchedFiles += 1;
    }
  }

  return { touchedFiles, touchedSongs };
}

const rows = parseMetadataTable(fs.readFileSync(inputFile, "utf8"));
writeMetadata(rows);
const result = updateSonglists(rows);
console.log(JSON.stringify({ metadataEntries: rows.length, ...result }, null, 2));
