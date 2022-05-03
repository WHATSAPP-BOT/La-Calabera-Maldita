let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/ok.mp3'
conn.sendFile(m.chat, vn, 'ok.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /ok|OK|ya|Ya|ven|si|Si|siii|no|No|nooo|noo|Noo|Yes|ok|Ok bro|ok vale|Ok vale|gracias|Ok|si|graciass|Gracias bro|gracias bro|Ok|ok primo|gracias|Gracias|ok bro|ok/
handler.command = new RegExp
module.exports = handler
