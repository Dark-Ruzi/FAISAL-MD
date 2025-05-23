const { Bixby, isPrivate } = require("../lib");
Bixby(
  {
    pattern: "request",
    fromMe: isPrivate,
    desc: "request something to dev",
    type: "misc",
  },
  async (message, match) => {
    if (!match) {
        await message.reply("Please provide your request message. Example: request Please add a new feature.");
        return;
    }
    const developerNumber = '94752677804';
    const requestMessage = `*Request from ${message.jid}*\n\n${match}`;
    await message.client.sendMessage(developerNumber + "@s.whatsapp.net", { text: requestMessage }, { quoted: message });
    await message.reply("Your request has been sent to the bot developer. Thank you!");
});
