let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/como_estas.mp3'
conn.sendFile(m.chat, vn, 'como_estas.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /como estas|Como estass|como stas|Como estas|como estas|q tal|como stas/
handler.command = new RegExp
module.exports = handler
