//Codigo by ShadowBotV3
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
let who = m.sender
let pp = await(await fetch('https://i.imgur.com/oHrJTtq.jpg')).buffer()
let kai = await(await fetch('https://i.imgur.com/oHrJTtq.jpg')).buffer()
let text = `*https://github.com/rodriku/La-Calabera-Maldita*`.trim()
conn.reply(m.chat, text, m, { thumbnail: kai, contextInfo: {
mentionedJid: [who],
externalAdReply: {
title: 'REPOSITORIO DE LA CALABERA',
body: '🤖 Chica Bot 🤖',
thumbnail: pp
}}})}
handler.command = /^sc|script|repositorio|repobot|scbot$/i
module.exports = handler
