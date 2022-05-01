let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/bot.mp3'
conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /the calabera - bot|chica calabera - Bot|tsbb|TSBB|la Calabera Maldita - Bot|la chica bot|Chica bot|La Chica Bot _ Calabera|La Chica Bot|Shadow|Hola Bot|hola bot|Hola bot|hola bot|hola|hola amigo/
handler.command = new RegExp
module.exports = handler
