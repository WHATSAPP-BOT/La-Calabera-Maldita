let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/sc_hola.mp3'
conn.sendFile(m.chat, vn, 'sc_hola.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /^sc|Sc|sc|script|repositorio|sc$/i
handler.command = new RegExp
module.exports = handler
