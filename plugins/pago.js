let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/pago.mp3'
conn.sendFile(m.chat, vn, 'pago.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /yape|metodos de pago|metodos|yape|Yape|YAPE|metodo|metodos|en que te pago|Yape|En que te pago|tienes yape|Tienes yape|tienes bcp|en que te deposito|Tienes bcp|como te pago/
handler.command = new RegExp
module.exports = handler
