//Codigo by ShadowBotV3
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
let who = m.sender
let pp = await(await fetch('https://i.imgur.com/pmt6mIZ.jpg')).buffer()
let kai = await(await fetch('https://i.imgur.com/pmt6mIZ.jpg')).buffer()
let text = `*Repositorio private de la Chica Bot*`.trim()
conn.reply(m.chat, text, m, { thumbnail: kai, contextInfo: {
mentionedJid: [who],
externalAdReply: {
title: 'REPOSITORIO DE LA CHICA CALABERA',
body: '🤖 CALABERA MALDITA 🤖',
thumbnail: pp
}}})}
handler.command = /^sc|script|repositorio|repobot|scbot$/i
module.exports = handler
