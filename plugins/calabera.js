let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/calabera_hola.mp3'
conn.sendFile(m.chat, vn, 'calabera_hola.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(calabera|hola calabera|Calabera)$/i

module.exports = handler
