let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/bien_contestando.mp3'
conn.sendFile(m.chat, vn, 'bien_contestando.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /bien|Bien|bienn|bien amigo|bien sobrino|vien|bien/
handler.command = new RegExp
module.exports = handler
