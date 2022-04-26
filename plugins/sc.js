//Codigo by calabera
//funcional
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
let who = m.sender
//codigo funcional poner en caso de que no funcione el otro
//let pp = await(await fetch('https://i.imgur.com/oHrJTtq.jpg')).buffer()
//let kai = await(await fetch('https://i.imgur.com/oHrJTtq.jpg')).buffer()
//prueba
//let pp = './media/carro_calabera.jpg'
//My codigo editado
let pp = await(await fetch('https://i.imgur.com/pmt6mIZ.jpg')).buffer()
let kai = await(await fetch('https://i.imgur.com/pmt6mIZ.jpg')).buffer()

//funcional
//let text = `*https://github.com/rodriku/La-Calabera-Maldita*`.trim()
//My codigo editado
let text = `*Repositorio privado de la calabera*`.trim()
conn.reply(m.chat, text, m, { thumbnail: kai, contextInfo: {
mentionedJid: [who],
externalAdReply: {
title: 'REPOSITORIO DE LA CALABERA',
body: '🤖 Chica Bot 🤖',
thumbnail: pp
}}})}
//SACAR EN CASO NO FUNCIONE
/////SACAR CODIGO EN CASO NO FUNCIONE
let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/sc_hola.mp3'
conn.sendFile(m.chat, vn, 'sc_hola.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
//CODIGO FUNCIONAAL
handler.command = /^sc|script|repositorio|repobot|scbot$/i
module.exports = handler