let fetch = require('node-fetch')
let handler  = async (m, { conn, usedPrefix, command }) => {
heum = await fetch(`https://api-alc.herokuapp.com/api/nsfw/foot?apikey=ConfuMods`)
json = await heum.buffer()
conn.sendButtonImg(m.chat, json, '*Disfrutalo!!*', 'La calabera Maldita - Bot', 'SIGUIENTE', `${usedPrefix + command}`, m, false)}
handler.command = /^(pies)$/i
module.exports = handler
