const { Bixby, isPrivate } = require("../lib");
const {
    translate
  } = require('@vitalets/google-translate-api');
  const defaultLang = 'en'
  
  Bixby({
       pattern: "trt",
       fromMe: isPrivate,  
       desc: "Google Translate",
       dontAddCommandList: true,
       type: "tool",
  
    },
    async (message, match, m) => {
      try{

        
        let args = match.split(" ");
let lang = args[0];
let text = args.slice(1).join(" ");
if (lang.length !== 2) {
  lang = defaultLang;
  text = args.join(" ");
}
if (!text && m.quoted && m.quoted.text) {
  text = m.quoted.text;
}
let result = await translate(text, {
  to: lang,
  autoCorrect: true
}).catch(() => null);
message.sendMessage(result.text);


    } catch (error) {
      console.error("[Error]:", error);
    }
    })
//////////𝚸𝚯𝐖𝚵𝚪𝐃 𝚩𝐘 𝐅𝚫𝚰𝐒𝚫𝐋-𝚳𝐃
