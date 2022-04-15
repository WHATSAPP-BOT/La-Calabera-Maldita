let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  
let info = `
*Hola 👋🏻, unete a los grupos oficiales de la Calabera Maldita*

*➤ Grupos oficiales del Bot:*
*1.-* https://chat.whatsapp.com/JlomZPEgo3bLmzjGUYPfyJ

*9.-* https://chat.whatsapp.com/Ef89aIuOLeD3Fa2sYmKwp7

*10.-* https://chat.whatsapp.com/C2WYb1hiiijCI13QSUZLM9
`.trim() 

conn.sendMessage(m.chat, info, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": '🔥 La Chica - Bot Calabera 🔥', "jpegThumbnail": fs.readFileSync(`./Menu2.png`)}}}})}

handler.command = /^(grupos|gruposofc|gruposofc)$/i
module.exports = handler
