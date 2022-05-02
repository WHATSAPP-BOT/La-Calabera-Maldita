let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/ok.mp3'
conn.sendFile(m.chat, vn, 'ok.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /ok|OK|ok mi amor|ya|Ya|yes|yes|Yess|ven|Ven|si|Si|siii|no|No|nooo|noo|Noo|si primo|Si primo|si hijo|Si hijo|Yes|ok|Ok bro|ok primo|ok vale|Ok vale|ven pa que comas|ven para que comas|ven para que almuerzes|ven pa que almuerzes|gracias|Ok|si|gracias amigo|graciass|Gracias bro|gracias bro|Ok|gracias sobrino|gracias sobrina|Gracias sobrino|gracias amigo|Gracias amigo|Gracias mano|gracias mano|ok bro|ok/
handler.command = new RegExp
module.exports = handler
