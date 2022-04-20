let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/buenas_tardes.mp3'
conn.sendFile(m.chat, vn, 'buenas_tardes.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(buenas tardes|tardes|Buenas tardes amigo|buenas tardes sobrino)$/i

module.exports = handler
