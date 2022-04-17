//Codigo by ShadowBotV3
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
let who = m.sender
let pp = await(await fetch('https://i.imgur.com/pmt6mIZ.jpg')).buffer()
let kai = await(await fetch('https://i.imgur.com/pmt6mIZ.jpg')).buffer()
let text = `*
▬▬▬..◙..▬▬▬
   ▂▄▄▄▓▄▄▂
◢◤█▀▀████▄▄▄▄     ◢◤
█▄ █ー  ███▀▀▀▀▀▀▀╬
◥█████◤
══╩══╩══
*`.trim()
let text = `*█▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃█*`.trim()
let text = `*Repositorio Private of the Calabera Maldita*`.trim()
conn.reply(m.chat, text, m, { thumbnail: kai, contextInfo: {
mentionedJid: [who],
externalAdReply: {
title: '𝚁𝙴𝙿𝙾𝚂𝙸𝚃𝙾𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃',
body: 'LA CHICA BOT - CALABERA MALDITA',
thumbnail: pp
}}})}
handler.command = /^sc|script|sc|repositorio|repobot|scbot$/i
module.exports = handler
