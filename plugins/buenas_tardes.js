let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/buenas_tardes.mp3'
conn.sendFile(m.chat, vn, 'buenas_tardes.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /buenos dias|Buenos dias|buenos días|Buenos días/
handler.command = new RegExp
module.exports = handler
