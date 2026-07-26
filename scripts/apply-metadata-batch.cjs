const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const METADATA_FILE = path.join(ROOT, "song-metadata.js");
const SONGLISTS_DIR = path.join(ROOT, "songlists");

const batch = [
  ["想自由", "林宥嘉", "2011", "流行", "中文"],
  ["你不知道的事", "王力宏", "2010", "流行", "中文"],
  ["说好的幸福呢", "周杰伦", "2008", "流行", "中文"],
  ["第三人称", "Hush!", "2015", "流行", "中文"],
  ["落叶归根", "王力宏", "2007", "流行", "中文"],
  ["他不懂", "张杰", "2013", "流行", "中文"],
  ["小镇姑娘", "陶喆", "1999", "R&B", "中文"],
  ["就是爱你", "陶喆", "2005", "R&B", "中文"],
  ["连名带姓", "张惠妹", "2017", "流行", "中文"],
  ["蒲公英的约定", "周杰伦", "2007", "流行", "中文"],
  ["爱很简单", "陶喆", "1997", "R&B", "中文"],
  ["改变自己", "王力宏", "2007", "流行", "中文"],
  ["花田错", "王力宏", "2005", "R&B", "中文"],
  ["刻在我心底的名字", "卢广仲", "2020", "流行", "中文"],
  ["明明就", "周杰伦", "2012", "流行", "中文"],
  ["三人游", "方大同", "2008", "R&B", "中文"],
  ["特别的人", "方大同", "2014", "R&B", "中文"],
  ["像我这样的人", "毛不易", "2017", "民谣", "中文"],
  ["消愁", "毛不易", "2017", "民谣", "中文"],
  ["一路向北", "周杰伦", "2005", "流行", "中文"],
  ["爱的就是你", "王力宏", "2001", "R&B", "中文"],
  ["不能说的秘密", "周杰伦", "2007", "流行", "中文"],
  ["不要说话", "陈奕迅", "2008", "流行", "中文"],
  ["等你下课", "周杰伦 / 杨瑞代", "2018", "流行", "中文"],
  ["给我一个理由忘记", "A-Lin", "2010", "流行", "中文"],
  ["可惜没如果", "林俊杰", "2014", "流行", "中文"],
  ["美人鱼", "林俊杰", "2004", "流行", "中文"],
  ["七里香", "周杰伦", "2004", "流行", "中文"],
  ["说好不哭", "周杰伦 / 阿信", "2019", "流行", "中文"],
  ["天真有邪", "林宥嘉", "2016", "流行", "中文"],
  ["雪落下的声音", "陆虎", "2018", "流行", "中文"],
  ["依然爱你", "王力宏", "2011", "流行", "中文"],
  ["愿与愁", "林俊杰", "2023", "流行", "中文"],
  ["阿飞的小蝴蝶", "萧敬腾", "2009", "流行", "中文"],
  ["爱笑的眼睛", "徐若瑄", "2005", "流行", "中文"],
  ["春风吹", "方大同", "2005", "R&B", "中文"],
  ["孤勇者", "陈奕迅", "2021", "流行", "中文"],
  ["海芋恋", "萧敬腾", "2008", "流行", "中文"],
  ["黑色毛衣", "周杰伦", "2005", "流行", "中文"],
  ["红尘客栈", "周杰伦", "2012", "中国风", "中文"],
  ["简单爱", "周杰伦", "2001", "流行", "中文"],
  ["兰亭序", "周杰伦", "2008", "中国风", "中文"],
  ["茉莉雨", "林俊杰", "2014", "流行", "中文"],
  ["那些你很冒险的梦", "林俊杰", "2011", "流行", "中文"],
  ["如果雨之后", "周兴哲", "2017", "流行", "中文"],
  ["搁浅", "周杰伦", "2004", "流行", "中文"],
  ["浪费", "林宥嘉", "2012", "流行", "中文"],
  ["慢冷", "梁静茹", "2019", "流行", "中文"],
  ["感官先生", "刘凤瑶", "2019", "流行", "中文"],
  ["讨厌红楼梦", "陶喆", "2013", "R&B", "中文"],
  ["枫", "周杰伦", "2005", "流行", "中文"],
  ["借口", "周杰伦", "2004", "流行", "中文"],
  ["晴天", "周杰伦", "2003", "流行", "中文"],
  ["雨爱", "杨丞琳", "2010", "流行", "中文"],
  ["花海", "周杰伦", "2008", "流行", "中文"],
  ["幻听", "许嵩", "2012", "流行", "中文"],
  ["江南", "林俊杰", "2004", "流行", "中文"],
  ["老街", "李荣浩", "2010", "流行", "中文"],
  ["如愿", "王菲", "2021", "流行", "中文"],
  ["十年", "陈奕迅", "2003", "流行", "中文"],
  ["我不配", "周杰伦", "2007", "流行", "中文"],
  ["我们的歌", "王力宏", "2007", "流行", "中文"],
  ["学不会", "林俊杰", "2011", "流行", "中文"],
  ["眼色", "林宥嘉", "2008", "流行", "中文"],
  ["园游会", "周杰伦", "2004", "流行", "中文"],
  ["爱爱爱", "方大同", "2006", "R&B", "中文"],
  ["暗号", "周杰伦", "2002", "流行", "中文"],
  ["背对背拥抱", "林俊杰", "2009", "流行", "中文"],
  ["丑八怪", "薛之谦", "2013", "流行", "中文"],
  ["春雨里洗过的太阳", "王力宏", "2008", "流行", "中文"],
  ["稻香", "周杰伦", "2008", "流行", "中文"],
  ["断了的弦", "周杰伦", "2003", "流行", "中文"],
  ["黑夜问白天", "林俊杰", "2017", "流行", "中文"],
  ["几分之几", "卢广仲", "2018", "流行", "中文"],
  ["交换余生", "林俊杰", "2020", "流行", "中文"],
  ["龙卷风", "周杰伦", "2000", "流行", "中文"],
  ["迷迭香", "周杰伦", "2006", "流行", "中文"],
  ["你不在", "王力宏", "2007", "流行", "中文"],
  ["你的背包", "陈奕迅", "2002", "流行", "中文"],
  ["陪你度过漫长岁月", "陈奕迅", "2015", "流行", "中文"],
  ["天黑黑", "孙燕姿", "2000", "流行", "中文"],
  ["天下", "张杰", "2008", "流行", "中文"],
  ["我们的爱", "F.I.R.", "2004", "流行", "中文"],
  ["我是如此相信", "周杰伦", "2019", "流行", "中文"],
  ["阳光宅男", "周杰伦", "2007", "流行", "中文"],
  ["这世界那么多人", "莫文蔚", "2021", "流行", "中文"],
  ["Love Yourself", "Justin Bieber", "2015", "流行", "英文"],
].map(([title, originalArtist, releaseYear, genre, language]) => ({
  singerId: "",
  title,
  originalArtist,
  releaseYear,
  genre,
  source: "manual curated high-frequency metadata",
  sourceUrl: "",
  confidence: "medium",
  matchedTitle: title,
  matchedArtist: originalArtist,
  musicBrainzId: "",
  checkedAt: "2026-07-26",
  language,
}));

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
    lines.push("| # | 歌名 | 原唱 | 年份 | 风格 | 语种 | 字数 | confidence |");
    lines.push("|---:|---|---|---|---|---|---:|---|");
    songs.forEach((song, index) => {
      lines.push(
        `| ${index + 1} | ${song.title} | ${song.originalArtist || ""} | ${song.releaseYear || ""} | ${song.genre || ""} | ${song.language || ""} | ${songLength(song.title, song.language)} | ${song.confidence || "pending"} |`
      );
    });
    lines.push("");
  }

  return lines.join("\n");
}

function writeMetadata(entries) {
  const existing = readWindowArray(METADATA_FILE, "nanyinSongMetadata");
  const byKey = new Map(existing.map((item) => [`${item.singerId || ""}::${normalizeTitle(item.title)}`, item]));
  for (const item of entries) {
    byKey.set(`${item.singerId || ""}::${normalizeTitle(item.title)}`, {
      ...(byKey.get(`${item.singerId || ""}::${normalizeTitle(item.title)}`) || {}),
      ...item,
    });
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
        song.genre = metadata.genre;
        song.confidence = metadata.confidence;
        song.source = metadata.source;
        song.checkedAt = metadata.checkedAt;
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

writeMetadata(batch);
const result = updateSonglists(batch);
console.log(JSON.stringify({ metadataEntries: batch.length, ...result }, null, 2));
