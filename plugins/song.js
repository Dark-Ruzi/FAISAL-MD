const ytdl = require("ytdl-core");
const ytsearch = require("yt-search");
const { Bixby, getBuffer } = require("../lib");

Bixby(
  {
    pattern: "song",
    fromMe: true,
    desc: "YouTube ගීතයක් බාගත කරන්න (audio)",
    type: "downloader",
  },
  async (message, match) => {
    if (!match) {
      return await message.reply("📥 කරුණාකර ගීත නමක් හෝ YouTube URL එකක් ලබාදෙන්න");
    }

    try {
      let video;

      if (ytdl.validateURL(match)) {
        video = { url: match };
      } else {
        const search = await ytsearch(match);
        if (!search.videos.length) {
          return await message.reply("⚠️ ගීතය හමු නොවීය.");
        }
        video = search.videos[0];
      }

      const info = await ytdl.getInfo(video.url);
      const format = ytdl.filterFormats(info.formats, "audioonly")[0];

      if (!format) {
        return await message.reply("⚠️ audio format එක හමු නොවීය.");
      }

      const buffer = await getBuffer(format.url);
      await message.sendMessage(
        buffer,
        { mimetype: "audio/mp4", filename: `${info.videoDetails.title}.mp3` },
        "audio"
      );
    } catch (e) {
      console.error(e);
      await message.reply("⚠️ එකක් වැරදී ඇත. නැවත උත්සහ කරන්න.");
    }
  }
);
