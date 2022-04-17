let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  
let info = `
*Hola 👋🐲, unete a los grupos oficiales de la Calabera Maldita*
*╔─━━━━━━░★░━━━━━━─╗*
*➤ Grupos oficiales del Bot:*
*1.-* https://chat.whatsapp.com/GIq7aW0ouU199StPUV8etI

*2.-* https://chat.whatsapp.com/DjzarHeUstsC6QIRULYwi4

`.trim() 

conn.sendMessage(m.chat, info, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": '🔥 La Chica - Bot Calabera 🔥', "jpegThumbnail": fs.readFileSync(`./Menu2.png`)}}}})}

handler.command = /^(grupos|gruposofc|gruposofc)$/i
module.exports = handler
