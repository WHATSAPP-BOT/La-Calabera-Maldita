let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/ok.mp3'
conn.sendFile(m.chat, vn, 'ok.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /ok|OK|ok mi amor|ya|Ya|yes|yes|Yess|si|Si|siii|Yes|ok vale|ven pa que comas|ven para que almuerzes|sube|ven pa que almuerzes|gracias|Ok|si|gracias amigo|graciass|Gracias bro|gracias bro|Ok|gracias sobrino|gracias amigo|gracias mano|ok bro|ok/
handler.command = new RegExp
module.exports = handler
