let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Himno_Militar.mp3'
conn.sendFile(m.chat, vn, 'Himno_Militar.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /himno|himno militar|guerra|los comandos|ejercito|Ejercito|marina de guerra|vraen|Himno|Vraen|marina|militar/
handler.command = new RegExp
module.exports = handler
