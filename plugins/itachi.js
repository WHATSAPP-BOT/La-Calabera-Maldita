let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/itachi?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*Incluso el más fuerte de los oponentes tiene siempre una debilidad*', 'LA CALABERA MALDITA - CHICA BOT', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(itachi)$/i

module.exports = handler
