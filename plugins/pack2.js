let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
	let url = packgirl[Math.floor(Math.random() * packgirl.length)]
	await conn.sendMessage(m.chat, {
		contentText: 'Pack xxx By La Calabera',
		footerText: '©Informatic Security - Bot',
		buttons: [
			{ buttonId: '.pack2', buttonText: { displayText: 'SIGUIENTE' }, type: 1 }
		],
		headerType: 4,
		imageMessage: (await conn.prepareMessageMedia(await (await fetch(url)).buffer(), 'imageMessage', {})).imageMessage
	}, 'buttonsMessage', { quoted: m })
}
handler.command = /^(pack2)$/i
handler.tags = ['internet']
handler.help = ['pack']
module.exports = handler

global.packgirl = [
  "https://imgur.com/wjvjj0J.jpg",
  "https://imgur.com/7VMDI3q.jpg",
  "https://imgur.com/MjJGoNj.jpg",
  "https://imgur.com/54xLIpP.jpg",
  "https://imgur.com/HJXM9Tw.jpg",
  "https://imgur.com/KJ2IrtN.jpg",
  "https://imgur.com/IIgCKuN.jpg",
  "https://imgur.com/FmSmrge.jpg",
  "https://imgur.com/JkErFFm.jpg",
  "https://imgur.com/FH0tv41.jpg",
  "https://imgur.com/8fAeR4e.jpg",
  "https://imgur.com/2GvlGmP.jpg",
  "https://imgur.com/ApFzKX7.jpg",
  "https://imgur.com/mcI4nSu.jpg",
  "https://imgur.com/A0t8hKv.jpg",
  "https://imgur.com/uqlHzq3.jpg",
  "https://imgur.com/exCEAt7.jpg",
  "https://imgur.com/zBc3p3C.jpg",
  "https://imgur.com/Av6Rigg.jpg",
  "https://imgur.com/vli8uZP.jpg",
  "https://imgur.com/Femgp8h.jpg",
  "https://imgur.com/8bnKfOi.jpg",
  "https://i.imgur.com/mwLJaxU.jpg",
  "https://i.imgur.com/9ptmlPl.jpg",
  "https://i.imgur.com/38tVliz.jpg",
  "https://i.imgur.com/2NqCKE3.jpg",
  "https://i.imgur.com/pveviMG.jpg",
  "https://i.imgur.com/d71dnkv.jpg",
  "https://i.imgur.com/cr7Ypj1.jpg",
  "https://i.imgur.com/jAxzCj4.jpg",
  "https://i.imgur.com/xokuFLf.jpg",
  "https://i.imgur.com/Hi4zLaf.jpg",
  "https://i.imgur.com/OlaQtwW.jpg",
  "https://i.imgur.com/Dm4GLuF.jpg",
  "https://i.imgur.com/k6Y2E9b.jpg",
  "https://i.imgur.com/1rk7jdu.jpg",
  "https://i.imgur.com/TFmEVPc.jpg",
  "https://i.imgur.com/0XefLlJ.jpg",
  "https://i.imgur.com/bwa9LYZ.jpg",
  "https://i.imgur.com/WgrpTmg.jpg",
  "https://i.imgur.com/Z5f5YAw.jpg",
  "https://i.imgur.com/xEuBtPO.jpg",
  "https://i.imgur.com/NA0fHxn.jpg",
  "https://i.imgur.com/InueCKQ.jpg",
  "https://i.imgur.com/3syOcHe.jpg",
  "https://i.imgur.com/N1dgels.jpg",
  "https://i.imgur.com/IxKAJaV.jpg",
  "https://i.imgur.com/8VrxL1d.jpg",
  "https://i.imgur.com/8B4Y0bG.jpg",
  "https://i.imgur.com/wgkGOjF.jpg",
  "https://i.imgur.com/765Wi6q.jpg",
  "https://i.imgur.com/5joeWnm.jpg",
  "https://i.imgur.com/71fjmmM.jpg",
  "https://i.imgur.com/cAuKeyZ.jpg",
  "https://i.imgur.com/SDZ2Hs5.jpg",
  "https://i.imgur.com/skkEyqI.jpg",
  "https://i.imgur.com/6dXFsBW.jpg",
  "https://i.imgur.com/6CeG9ZX.jpg"
  ]
