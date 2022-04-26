let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/un_favor.mp3'
conn.sendFile(m.chat, vn, 'un_favor.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /un favor|x favor|un favorr|hazme un favor|un gran favor|Un favor|un favorr/
handler.command = new RegExp
module.exports = handler
