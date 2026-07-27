const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "songlists");
const SINGER_FILE = path.join(ROOT, "v1-singers.js");
const METADATA_FILE = path.join(ROOT, "song-metadata.js");

const NOTE_WORDS = [
  "推荐",
  "看状态",
  "谨慎",
  "双倍",
  "LIVE",
  "版",
  "串烧",
  "feat",
  "Feat",
  "ft.",
  "VPS",
];

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

function displayTitle(titles) {
  const counts = new Map();
  for (const title of titles) counts.set(title, (counts.get(title) || 0) + 1);
  return [...counts.entries()].sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    return a[0].localeCompare(b[0], "zh-Hans-CN-u-co-pinyin", {
      numeric: true,
      sensitivity: "base",
    });
  })[0][0];
}

function inferLanguage(languages) {
  const order = ["中文", "英文", "日文", "粤语", "闽南语"];
  const counts = new Map();
  for (const lang of languages.filter(Boolean)) {
    counts.set(lang, (counts.get(lang) || 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    return order.indexOf(a[0]) - order.indexOf(b[0]);
  })[0]?.[0] || "待补";
}

function normalizeGenre(genre) {
  return (
    {
      "R&B / Soul": "R&B",
      Soul: "R&B",
      粤语: "流行",
      国风: "中国风",
      "爵士 / Blues": "爵士",
      放克: "R&B",
      乡村流行: "流行",
    }[genre] || genre
  );
}

function isLikelyNote(value) {
  if (!value) return false;
  return NOTE_WORDS.some((word) => String(value).includes(word));
}

function uniqueSorted(values) {
  return [...new Set(values.filter(Boolean))].sort((a, b) =>
    String(a).localeCompare(String(b), "zh-Hans-CN-u-co-pinyin", {
      numeric: true,
      sensitivity: "base",
    })
  );
}

function bestMetadata(entries) {
  const sorted = entries
    .filter(Boolean)
    .slice()
    .sort((a, b) => {
      const score = (m) =>
        Number(Boolean(m.originalArtist)) * 4 +
        Number(Boolean(m.releaseYear)) * 2 +
        Number(Boolean(m.genre));
      return score(b) - score(a);
    });
  const metadata = sorted[0] || {};
  return {
    ...metadata,
    genre: normalizeGenre(metadata.genre),
  };
}

function makeMarkdown(index) {
  const lines = [];
  lines.push("# 全站歌曲索引");
  lines.push("");
  lines.push(`生成时间：${index.generatedAt}`);
  lines.push("");
  lines.push("## 汇总");
  lines.push("");
  lines.push(`- 唯一歌曲：${index.summary.uniqueSongs} 首`);
  lines.push(`- 歌手曲库记录：${index.summary.singerSongRecords} 条`);
  lines.push(`- 已有完整 metadata：${index.summary.completeMetadata} 首`);
  lines.push(`- 待补 metadata：${index.summary.pendingMetadata} 首`);
  lines.push(`- 可能重名/需确认：${index.summary.ambiguousSongs} 首`);
  lines.push("");
  lines.push("## 歌曲索引");
  lines.push("");
  lines.push("| # | 歌名 | 语种 | 歌手数 | 歌手 | 原唱 | 年份 | 风格 | 待补项 | 备注 | 需确认 |");
  lines.push("|---:|---|---|---:|---|---|---|---|---|---|---|");
  index.songs.forEach((song, i) => {
    lines.push(
      `| ${i + 1} | ${song.title} | ${song.language} | ${song.singerCount} | ${song.singers
        .map((s) => s.name)
        .join("、")} | ${song.metadata.originalArtist || ""} | ${song.metadata.releaseYear || ""} | ${
        song.metadata.genre || ""
      } | ${song.needsMetadata.join("、")} | ${song.metadata.confirmationNote || ""} | ${
        song.ambiguous ? song.ambiguityReasons.join("；") : ""
      } |`
    );
  });
  lines.push("");
  return lines.join("\n");
}

function makePendingMarkdown(index) {
  const pending = index.songs.filter((song) => song.needsMetadata.length || song.ambiguous);
  const lines = [];
  lines.push("# 待补 metadata 索引");
  lines.push("");
  lines.push(`生成时间：${index.generatedAt}`);
  lines.push("");
  lines.push("| # | 歌名 | 语种 | 待补项 | 候选原唱/备注 | 会唱歌手 | 备注 | 需确认 |");
  lines.push("|---:|---|---|---|---|---|---|---|");
  pending.forEach((song, i) => {
    lines.push(
      `| ${i + 1} | ${song.title} | ${song.language} | ${song.needsMetadata.join("、")} | ${song.candidateOriginalArtists.join(
        "、"
      )} | ${song.singers.map((s) => s.name).join("、")} | ${song.metadata.confirmationNote || ""} | ${
        song.ambiguous ? song.ambiguityReasons.join("；") : ""
      } |`
    );
  });
  lines.push("");
  return lines.join("\n");
}

function main() {
  const singers = readWindowArray(SINGER_FILE, "importedSingers");
  const metadataEntries = fs.existsSync(METADATA_FILE)
    ? readWindowArray(METADATA_FILE, "nanyinSongMetadata")
    : [];

  const metadataByKey = new Map();
  for (const metadata of metadataEntries) {
    const key = normalizeTitle(metadata.title);
    if (!key) continue;
    if (!metadataByKey.has(key)) metadataByKey.set(key, []);
    metadataByKey.get(key).push(metadata);
  }

  const groups = new Map();
  let singerSongRecords = 0;

  for (const singer of singers) {
    for (const row of singer.songs || []) {
      const [title, , language, source, note] = row;
      const key = normalizeTitle(title);
      if (!key) continue;
      singerSongRecords += 1;
      if (!groups.has(key)) {
        groups.set(key, {
          key,
          titles: [],
          languages: [],
          singers: [],
          notes: [],
          candidateOriginalArtists: [],
          sources: [],
        });
      }
      const group = groups.get(key);
      group.titles.push(title);
      group.languages.push(language);
      group.sources.push(source);
      group.singers.push({
        id: singer.id,
        name: singer.name,
        title,
        language,
        note: note || "",
      });
      if (note) {
        group.notes.push(note);
        if (!isLikelyNote(note)) group.candidateOriginalArtists.push(note);
      }
    }
  }

  const songs = [...groups.values()].map((group) => {
    const metadataMatches = metadataByKey.get(group.key) || [];
    const metadata = bestMetadata(metadataMatches);
    const matchedArtists = uniqueSorted(metadataMatches.map((m) => m.originalArtist));
    const aliases = uniqueSorted(group.titles).filter((title) => title !== displayTitle(group.titles));
    const needsMetadata = [];
    if (!metadata.originalArtist) needsMetadata.push("原唱");
    if (!metadata.releaseYear) needsMetadata.push("年份");
    if (!metadata.genre) needsMetadata.push("风格");

    const ambiguityReasons = [];
    if (matchedArtists.length > 1) ambiguityReasons.push(`已有多个原唱：${matchedArtists.join("、")}`);
    if (/^[\u3400-\u9fff]{1,2}$/.test(displayTitle(group.titles))) {
      ambiguityReasons.push("短中文歌名，可能重名");
    }
    if (aliases.length) ambiguityReasons.push(`别名：${aliases.join("、")}`);

    return {
      key: group.key,
      title: displayTitle(group.titles),
      language: inferLanguage(group.languages),
      aliases,
      singerCount: new Set(group.singers.map((s) => s.id)).size,
      singers: group.singers.sort((a, b) =>
        a.name.localeCompare(b.name, "zh-Hans-CN-u-co-pinyin", {
          numeric: true,
          sensitivity: "base",
        })
      ),
      metadata: {
        originalArtist: metadata.originalArtist || "",
        releaseYear: metadata.releaseYear || "",
        genre: metadata.genre || "",
        confidence: metadata.confidence || "",
        source: metadata.source || "",
        sourceUrl: metadata.sourceUrl || "",
        checkedAt: metadata.checkedAt || "",
        confirmationNote: metadata.confirmationNote || "",
      },
      candidateOriginalArtists: uniqueSorted(group.candidateOriginalArtists),
      singerSpecificNotes: uniqueSorted(group.notes.filter(isLikelyNote)),
      needsMetadata,
      ambiguous: ambiguityReasons.length > 0,
      ambiguityReasons,
    };
  });

  songs.sort((a, b) => {
    if (a.needsMetadata.length !== b.needsMetadata.length) {
      return b.needsMetadata.length - a.needsMetadata.length;
    }
    if (b.singerCount !== a.singerCount) return b.singerCount - a.singerCount;
    return a.title.localeCompare(b.title, "zh-Hans-CN-u-co-pinyin", {
      numeric: true,
      sensitivity: "base",
    });
  });

  const index = {
    generatedAt: new Date().toISOString(),
    summary: {
      uniqueSongs: songs.length,
      singerSongRecords,
      completeMetadata: songs.filter((s) => !s.needsMetadata.length).length,
      pendingMetadata: songs.filter((s) => s.needsMetadata.length).length,
      ambiguousSongs: songs.filter((s) => s.ambiguous).length,
    },
    songs,
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, "全站歌曲索引.json"), JSON.stringify(index, null, 2) + "\n");
  fs.writeFileSync(path.join(OUT_DIR, "全站歌曲索引.md"), makeMarkdown(index));
  fs.writeFileSync(path.join(OUT_DIR, "待补metadata索引.md"), makePendingMarkdown(index));

  console.log(JSON.stringify(index.summary, null, 2));
}

main();
