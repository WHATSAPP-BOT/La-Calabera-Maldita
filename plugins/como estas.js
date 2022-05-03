let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/como_estas.mp3'
conn.sendFile(m.chat, vn, 'como_estas.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /como estas|cómo estas|Cómo estas|Cómo Estas|Como estass|como stas|Como estas|Q tal|como estas|q tal|como stas/
handler.command = new RegExp
module.exports = handler
