let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/novia.mp3'
conn.sendFile(m.chat, vn, 'novia.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /tienes novia|Tienes novia|Tienes Novia|tienes enamorada|Tienes enamorada|estas soltero|tienes novia|Estas soltero|y tu enamorada/
handler.command = new RegExp
module.exports = handler
