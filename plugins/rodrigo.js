let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/bot.mp3'
conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /rodrigo|Rodrigo|rodri|Rodri|rodrigoo|Rodrigooo/
handler.command = new RegExp
module.exports = handler
