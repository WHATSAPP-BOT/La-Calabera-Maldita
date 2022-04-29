let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/ok.mp3'
conn.sendFile(m.chat, vn, 'ok.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /ok|OK|ok mi amor|ok vale|gracias|si|graciass|Gracias bro|gracias bro|gracias sobrino|gracias mano|ok bro|ok/
handler.command = new RegExp
module.exports = handler
