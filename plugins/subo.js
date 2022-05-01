let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/subo.mp3'
conn.sendFile(m.chat, vn, 'subo.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /sube hijo|sube a comer hijo|sube hijoo|Sube|sube a comer /
handler.command = new RegExp
module.exports = handler
