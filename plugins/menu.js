/* Copyright (C) 2025 Codex.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
Codex - Ziyan
*/

const plugins = require("../lib/events");
const { Bixby, isPrivate, clockString } = require("../lib");
const { FancyRandom, getTimeByJid } = require("../lib/functions")
const { BOT_NAME, OWNER_NAME, WORK_TYPE, BOT_IMG } = require("../config");


Bixby(
    {
        pattern: "menu",
        fromMe: isPrivate,  
        desc: "Show All commands",
        dontAddCommandList: true,
        type:"user",
    },
    async (message, match) => {
        try {
            if (match) {
                for (let i of plugins.commands) {
                    if (
                        i.pattern instanceof RegExp &&
                        i.pattern.test(message.prefix + match)
                    ) {
                        const cmdNameMatch = i.pattern.toString().match(/\/(\w+)/);
                        const cmdName = cmdNameMatch ? cmdNameMatch[1] : "Unknown";
                        let mess = `\`\`\`Command: ${message.prefix}${cmdName}
Description: ${i.desc}\`\`\``;
                        return await message.client.sendMessage(message.jid, {text: mess});
                    }
                }
            } else {
                let { prefix } = message;
                const stars = ['☼︎','★','✦','✬','⁂','✢','✣','✥','✲','⌤','⇵','⟺','⍩','∞','⍙','⌭','⌮','〶','㊋'];
                const star = stars[Math.floor(Math.random()*stars.length)];
                let jid;
                if (message.isGroup) {
                    jid = message.key.participant;
                } else {
                    jid = message.jid;
                }
                const { date, time, timezone } = getTimeByJid(jid);
                let menu = `╭═══〘 ${BOT_NAME} 〙═══⊷❍
┃${star}╭──────────────
┃${star}│ time : ${time}
|${star} | date : ${date}
|${star} | timezone : ${timezone}
┃${star}│ owner : ${OWNER_NAME}
┃${star}│ user : ${message.pushName}
┃${star}│ mode : ${WORK_TYPE}
┃${star}│ server : null
┃${star}│ available ram: 10GB
┃${star}│ version: 2.0.1
┃${star}│
┃${star}│
┃${star}│  ▎▍▌▌▉▏▎▌▉▐▏▌▎
┃${star}│  ▎▍▌▌▉▏▎▌▉▐▏▌▎
┃${star}│  ${BOT_NAME}
┃${star}│ 
┃${star}╰───────────────
╰══════════════════⊷❍
╭════〘 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙀𝙍 〙════⊷❍
┃㊋╭─────────────────
┃㊋│ 
┃㊋│ 𝙁𝘼𝙉𝘾𝙔
┃㊋│ 𝙏𝙏𝙋
┃㊋│ 𝙎𝙏𝙄𝘾𝙆𝙀𝙍
┃㊋│ 𝙏𝘼𝙆𝙀
┃㊋│ 𝙋𝙃𝙊𝙏𝙊
┃㊋│ 𝙄𝙈𝙂
┃㊋╰─────────────────
╰══════════════════⊷❍

╭════〘 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍 〙════⊷❍
┃㊋╭─────────────────
┃㊋│ 
┃㊋│ 𝙈𝙋3
┃㊋│ 𝙈𝙋4
┃㊋│ 𝙁𝙀𝙏𝘾𝙃
┃㊋╰─────────────────
╰══════════════════⊷❍

╭════〘 𝙀𝙉𝘾𝙍𝙔𝙋𝙏𝙀𝙍 〙════⊷❍
┃㊋╭─────────────────
┃㊋│ 
┃㊋│ 𝙀𝘽𝙄𝙉𝘼𝙍𝙔
┃㊋│ 𝘿𝘽𝙄𝙉𝘼𝙍𝙔
┃㊋│ 𝙀𝘽𝘼𝙎𝙀64
┃㊋│ 𝘿𝘽𝘼𝙎𝙀64
┃㊋│ 𝙀𝘼𝙎𝘾𝙄𝙄
┃㊋│ 𝘿𝘼𝙎𝘾𝙄𝙄
┃㊋│ 𝙀𝙃𝙀𝙓
┃㊋│ 𝘿𝙃𝙀𝙓
┃㊋│ 𝙀𝙊𝘾𝙏𝘼𝙇
┃㊋│ 𝘿𝙊𝘾𝙏𝘼𝙇
┃㊋╰─────────────────
╰══════════════════⊷❍

╭════〘 𝙂𝘼𝙈𝙀 〙════⊷❍
┃㊋╭─────────────────
┃㊋│ 
┃㊋│ 𝙏𝙍𝙄𝙑𝙄𝘼
┃㊋╰─────────────────
╰══════════════════⊷❍

╭════〘 𝙂𝙍𝙊𝙐𝙋 〙════⊷❍
┃㊋╭─────────────────
┃㊋│ 
┃㊋│ 𝙁𝙄𝙇𝙏𝙀𝙍
┃㊋│ 𝙎𝙏𝙊𝙋
┃㊋│ 𝙒𝙀𝙇𝘾𝙊𝙈𝙀
┃㊋│ 𝙂𝙊𝙊𝘿𝘽𝙔𝙀
┃㊋│ 𝘼𝘿𝘿
┃㊋│ 𝙆𝙄𝘾𝙆
┃㊋│ 𝙁𝙐𝙇𝙇𝙂𝘾𝙋𝙋
┃㊋│ 𝙋𝙍𝙊𝙈𝙊𝙏𝙀
┃㊋│ 𝘿𝙀𝙈𝙊𝙏𝙀
┃㊋│ 𝙈𝙐𝙏𝙀
┃㊋│ 𝙐𝙉𝙈𝙐𝙏𝙀
┃㊋│ 𝙂𝙅𝙄𝘿
┃㊋│ 𝙏𝘼𝙂𝘼𝙇𝙇
┃㊋│ 𝙏𝘼𝙂
┃㊋│ 𝙂𝙄𝙉𝙁𝙊
┃㊋│ 𝙄𝙉𝙁𝙊
┃㊋╰─────────────────
╰══════════════════⊷❍

╭════〘 𝙃𝙀𝙍𝙊𝙆𝙐 〙════⊷❍
┃㊋╭─────────────────
┃㊋│ 
┃㊋│ 𝙍𝙀𝙎𝙏𝘼𝙍𝙏
┃㊋│ 𝙎𝙃𝙐𝙏𝘿𝙊𝙒𝙉
┃㊋│ 𝘿𝙔𝙉𝙊
┃㊋╰─────────────────
╰══════════════════⊷❍

╭════〘 𝙄𝙉𝙁𝙊 〙════⊷❍
┃㊋╭─────────────────
┃㊋│ 
┃㊋│ 𝘾𝙊𝙑𝙄𝘿
┃㊋╰─────────────────
╰═════════════════⊷❍

╭════〘 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉 〙════⊷❍
┃㊋╭─────────────────
┃㊋│ 
┃㊋│ 𝙋𝙄𝙉𝘾𝙊𝘿𝙀
┃㊋╰─────────────────
╰══════════════════⊷❍

╭════〘 𝙈𝙄𝙎𝘾 〙════⊷❍
┃㊋╭─────────────────
┃㊋│ 
┃㊋│ 𝙓4𝙈𝙋4
┃㊋│ 𝙎𝙏𝙊𝙋
┃㊋│ 𝙓𝙆𝘾𝘿
┃㊋│ 𝙅𝙊𝙆𝙀
┃㊋│ 𝙂𝙀𝙈𝙄𝙉𝙄
┃㊋│ 𝙃𝙊𝙇𝙄𝘿𝘼𝙔
┃㊋│ 𝙍𝙀𝙌𝙐𝙀𝙎𝙏
┃㊋│ 𝙊𝙉𝙒𝘼
┃㊋│ 𝙌𝙐𝙊𝙏𝙀𝘿
┃㊋│ 𝙍𝙀𝙌𝙐𝙀𝙎𝙏
┃㊋│ 𝙎𝙀𝙏𝙏𝙄𝙉𝙂𝙎
┃㊋│ 𝙎𝙏𝙄𝘾𝙆𝘽𝘼𝙉
┃㊋│ 𝙎𝙏𝙄𝘾𝙆𝙐𝙉𝘽𝘼𝙉
┃㊋│ 𝘽𝘼𝙉
┃㊋│ 𝙐𝙉𝘽𝘼𝙉
┃㊋│ 𝙂𝙀𝙏𝙌𝙍
┃㊋│ 𝙂𝙀𝙏
┃㊋│ 𝘿𝙊𝘾
┃㊋│ 𝙂𝙄𝙏
┃㊋│ 𝙒𝘼𝙍𝙉
┃㊋│ 𝙍𝙀𝙎𝙀𝙏𝙒𝘼𝙍𝙉
┃㊋╰─────────────────
╰══════════════════⊷❍

╭════〘 𝙎𝙀𝘼𝙍𝘾𝙃 〙════⊷❍
┃㊋╭─────────────────
┃㊋│ 
┃㊋│ 𝙉𝙋𝙈
┃㊋╰─────────────────
╰══════════════════⊷❍

╭════〘 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 〙════⊷❍
┃㊋╭─────────────────
┃㊋│ 
┃㊋│ 𝘼𝙏𝙏𝙋
┃㊋╰─────────────────
╰══════════════════⊷❍

╭════〘 𝙏𝙊𝙊𝙇 〙════⊷❍
┃㊋╭─────────────────
┃㊋│ 
┃㊋│ 𝙂𝙍𝙊𝙐𝙋𝙇𝙄𝙎𝙏
┃㊋│ 𝙎𝘾𝙍𝘼𝙋𝙅𝙄𝘿
┃㊋│ 𝙄𝙈𝘿𝘽
┃㊋│ 𝙏𝙂𝙎
┃㊋│ 𝙑𝙑
┃㊋│ 𝙌𝙍
┃㊋│ 𝘽𝙄𝙏𝙇𝙔
┃㊋│ 𝙐𝙎𝘼𝙂𝙀
┃㊋│ 𝙏𝙏𝙎
┃㊋╰─────────────────
╰══════════════════⊷❍

╭════〘 𝙏𝙊𝙊𝙇𝙎 〙════⊷❍
┃㊋╭─────────────────
┃㊋│ 
┃㊋│ 𝙇𝙔𝙍𝙄𝘾𝙎
┃㊋╰─────────────────
╰══════════════════⊷❍

╭════〘 𝙐𝙎𝙀𝙍 〙════⊷❍
┃㊋╭─────────────────
┃㊋│ 
┃㊋│ 𝙂𝘾𝙋𝙋
┃㊋│ 𝙇𝙐𝘿
┃㊋│ 𝙋𝙄𝙉𝙂
┃㊋│ 𝙐𝙋𝙏𝙄𝙈𝙀
┃㊋│ 𝙄𝙉𝙎𝙏𝘼𝙇𝙇
┃㊋│ 𝙋𝙇𝙐𝙂𝙄𝙉
┃㊋│ 𝙍𝙀𝙈𝙊𝙑𝙀
┃㊋│ 𝙍𝙀𝙎𝙐𝙇𝙏
┃㊋│ 𝘼𝙐𝙏𝙊𝙍𝙀𝘼𝘾𝙏
┃㊋│ 𝙋𝙋
┃㊋│ 𝙁𝙐𝙇𝙇𝙋𝙋
┃㊋│ 𝙎𝙀𝙏𝙉𝘼𝙈𝙀
┃㊋│ 𝘽𝙇𝙊𝘾𝙆
┃㊋│ 𝙐𝙉𝘽𝙇𝙊𝘾𝙆
┃㊋│ 𝙅𝙄𝘿
┃㊋│ 𝘿𝙇𝙏
┃㊋╰─────────────────
╰══════════════════⊷❍

╭════〘 𝙐𝙏𝙄𝙇 〙════⊷❍
┃㊋╭─────────────────
┃㊋│ 
┃㊋│ 𝙁𝙒𝘿
┃㊋╰─────────────────
╰══════════════════⊷❍

╭════〘 𝙓-𝙈𝙀𝘿𝙄𝘼 〙════⊷❍
┃㊋╭─────────────────
┃㊋│ 
┃㊋│ 𝙓4𝙈𝙋4
┃㊋╰─────────────────
╰══════════════════⊷❍

> 𝚸𝚯𝐖𝚵𝚪𝐃 𝚩𝐘 𝐅𝚫𝚰𝐒𝚫𝐋-𝚳𝐃
`;
                let cmnd = [];
                let cmd;
                let category = [];
                plugins.commands.map((command, num) => {
                    if (command.pattern) {
                        cmd = command.pattern
                            .toString()
                            .match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2];
                    }

                    if (!command.dontAddCommandList && cmd !== undefined) {
                        let type;
                        if (!command.type) {
                            type = "misc";
                        } else {
                            type = command.type.toLowerCase();
                        }

                        cmnd.push({ cmd, type: type });

                        if (!category.includes(type)) category.push(type);
                    }
                });
                cmnd.sort();
                category.sort().forEach((cmmd) => {
                    menu += ``;
                });

                menu += `\n`;
                let fin = menu.toUpperCase();
                const randomFont = FancyRandom();
                return await message.client.sendMessage(
                    message.jid,
                    {
                        image: { url: BOT_IMG },
                        caption: randomFont(fin)
                    },
                    { quoted: message }
                );
            }
        } catch (error) {
            console.error("[Error]:", error);
        }
    }
);


Bixby(
    {
        pattern: "alive",
        fromMe: isPrivate,  
        desc: "Show All commands",
        dontAddCommandList: true,
        type:"user",
    },
    async (message, match) => {
        try {
            if (match) {
                for (let i of plugins.commands) {
                    if (
                        i.pattern instanceof RegExp &&
                        i.pattern.test(message.prefix + match)
                    ) {
                        const cmdNameMatch = i.pattern.toString().match(/\/(\w+)/);
                        const cmdName = cmdNameMatch ? cmdNameMatch[1] : "Unknown";
                        let mess = `\`\`\`Command: ${message.prefix}${cmdName}
Description: ${i.desc}\`\`\``;
                        return await message.client.sendMessage(message.jid, {text: mess});
                    }
                }
            } else {
                let { prefix } = message;
                const stars = ['☼︎','★','✦','✬','⁂','✢','✣','✥','✲','⌤','⇵','⟺','⍩','∞','⍙','⌭','⌮','〶','㊋'];
                const star = stars[Math.floor(Math.random()*stars.length)];
                let jid;
                if (message.isGroup) {
                    jid = message.key.participant;
                } else {
                    jid = message.jid;
                }
                const { date, time, timezone } = getTimeByJid(jid);
                let menu = `╭═══〘 𝐅𝚫𝚰𝐒𝚫𝐋-𝚳𝐃 〙═══⊷❍
┃${star}╭──────────────
┃${star}│ time : ${time}
|${star} | date : ${date}
|${star} | timezone : ${timezone}
┃${star}│ owner : ${OWNER_NAME}
┃${star}│ user : ${message.pushName}
┃${star}│ mode : ${WORK_TYPE}
┃${star}│ server : null
┃${star}│ available ram: 10GB
┃${star}│ version: 2.0.1
┃${star}│
┃${star}│
┃${star}│  ▎▍▌▌▉▏▎▌▉▐▏▌▎
┃${star}│  ▎▍▌▌▉▏▎▌▉▐▏▌▎
┃${star}│  𝐅𝚫𝚰𝐒𝚫𝐋-𝚳𝐃
┃${star}│ 
┃${star}╰───────────────
╰══════════════════⊷❍
╭────────────────────────────────╮
┃ I am in Your heart Bot 𝐅𝚫𝚰𝐒𝚫𝐋-𝚳𝐃
╰────────────────────────────────╯
> 𝚸𝚯𝐖𝚵𝚪𝐃 𝚩𝐘 𝐅𝚫𝚰𝐒𝚫𝐋-𝚳𝐃
`;
                let cmnd = [];
                let cmd;
                let category = [];
                plugins.commands.map((command, num) => {
                    if (command.pattern) {
                        cmd = command.pattern
                            .toString()
                            .match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2];
                    }

                    if (!command.dontAddCommandList && cmd !== undefined) {
                        let type;
                        if (!command.type) {
                            type = "misc";
                        } else {
                            type = command.type.toLowerCase();
                        }

                        cmnd.push({ cmd, type: type });

                        if (!category.includes(type)) category.push(type);
                    }
                });
                cmnd.sort();
                category.sort().forEach((cmmd) => {
                    menu += ``;
                });

                menu += `\n`;
                let fin = menu.toUpperCase();
                const randomFont = FancyRandom();
                return await message.client.sendMessage(
                    message.jid,
                    {
                        image: { url: BOT_IMG },
                        caption: randomFont(fin)
                    },
                    { quoted: message }
                );
            }
        } catch (error) {
            console.error("[Error]:", error);
        }
    }
);

Bixby(
    {
        pattern: "list",
        fromMe: true,
        desc: "Show All Commands",
        type: "user",
        dontAddCommandList: true,
    },
    async (message, match, { prefix }) => {
        try {
            let menu = `╭────────────────╮
   
╰────────────────╯𝐅𝚫𝚰𝐒𝚫𝐋-𝚳𝐃
╭────────────────
`;
            let cmnd = [];
            let cmd;
            let desc;
            plugins.commands.map((command) => {
                if (command.pattern) {
                    cmd = command.pattern.toString().split(/\W+/)[1];
                }
                desc = command.desc || false;

                if (!command.dontAddCommandList && cmd !== undefined) {
                    cmnd.push({ cmd, desc });
                }
            });
            cmnd.sort();
            cmnd.forEach(({ cmd, desc }, num) => {
                menu += `│ \`\`\`${cmd}\`\`\`\n`;
            });
            menu += `╰────────────────n�`;
            let fin = menu.toUpperCase();
            const randomFont = FancyRandom();
            return await message.client.sendMessage(message.jid, { text: randomFont(fin) });
        } catch (error) {
            console.error("[Error]:", error);
        }
    }
);
