let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/bot.mp3'
conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(hola|ola|olaa|holi|ola|olaa|hola sobrino|hola hijo|hijo|mano|holaaa|sobrino|hola amigo|amigo|rodrigo|mano|Hola🤖|ola🤖)$/i

module.exports = handler
