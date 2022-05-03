let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/ok.mp3'
conn.sendFile(m.chat, vn, 'ok.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /ok|OK|ya|Ya|ven|si|Si|siii|no|No|nooo|noo|Noo|si primo|Si primo|si hijo|Si hijo|Yes|ok|Ok bro|ok primo|ok vale|Ok vale|gracias|Ok|si|gracias amigo|graciass|Gracias bro|gracias bro|Ok|gracias|Gracias|gracias amigo|Gracias amigo|ok bro|ok/
handler.command = new RegExp
module.exports = handler
