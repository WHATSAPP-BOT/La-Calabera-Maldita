let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
	let url = packmen[Math.floor(Math.random() * packmen.length)]
	await conn.sendMessage(m.chat, {
		contentText: 'Pack xxx By La Calabera',
		footerText: '©Informatic Security - Bot',
		buttons: [
			{ buttonId: '.pack3', buttonText: { displayText: 'SIGUIENTE' }, type: 1 }
		],
		headerType: 4,
		imageMessage: (await conn.prepareMessageMedia(await (await fetch(url)).buffer(), 'imageMessage', {})).imageMessage
	}, 'buttonsMessage', { quoted: m })
}
handler.command = /^(pack3)$/i
handler.tags = ['internet']
handler.help = ['pack']
module.exports = handler

global.packmen = [
  "https://imgur.com/iHc6sZ4.jpg",
"https://imgur.com/Q8Mmxw6.jpg",
"https://imgur.com/7mFDe4K.jpg",
"https://imgur.com/DRl91d8.jpg",
"https://imgur.com/7XM0WkE.jpg",
"https://imgur.com/ABSZBYs.jpg",
"https://imgur.com/tS4sgw1.jpg",
"https://imgur.com/dQu7k8k.jpg",
"https://imgur.com/QVeMm0s.jpg",
"https://imgur.com/lJfW0d2.jpg",
"https://imgur.com/ChmCKMV.jpg",
"https://imgur.com/s5r9BGS.jpg",
"https://imgur.com/PUzgeUI.jpg",
"https://imgur.com/c4WBAw9.jpg",
"https://imgur.com/QPjDq0z.jpg",
"https://imgur.com/KNtxayz.jpg",
"https://imgur.com/uf1jIxP.jpg",
"https://imgur.com/aixogRT.jpg",
"https://imgur.com/Ds1NVNt.jpg",
"https://imgur.com/yfDjEzr.jpg",
"https://imgur.com/Ndn91w4.jpg",
"https://imgur.com/e0M43I1.jpg",
"https://imgur.com/v1wHsgZ.jpg",
"https://imgur.com/HQkOapL.jpg",
"https://imgur.com/kNRXFMJ.jpg",
"https://imgur.com/jF10gpV.jpg",
"https://imgur.com/V1Rh6eb.jpg",
"https://imgur.com/nXmPFsd.jpg",
"https://imgur.com/TuLGggY.jpg",
"https://imgur.com/WQ3aQtZ.jpg",
"https://imgur.com/Cc3AJ1C.jpg",
"https://imgur.com/gMSN9vI.jpg"
]
