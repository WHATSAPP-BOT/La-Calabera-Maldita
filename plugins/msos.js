let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-alc.herokuapp.com/api/chicas/muslos?&apikey=ConfuMods`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*By Calabera and ConfuMods*\n*https://api-alc.herokuapp.com/api/chicas/muslos?&apikey=ConfuMods*', 'La calabera Maldita - Bot', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(muslitos)$/i

module.exports = handler
