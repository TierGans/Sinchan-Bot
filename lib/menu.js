const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))


/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/ArugaZ

Instagram: https://instagram.com/ini.arga/

Best regards, ArugaZ.`
}

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️
         *[Wellcome to SinchanBot]*
Berikut adalah beberapa fitur yang ada pada SinchanBot!✨

Creator:
. *${prefix}sticker*
. *${prefix}stickergif*
. *${prefix}stickergiphy*
. *${prefix}meme*
. *${prefix}quotemaker*
. *${prefix}nulis*

Islam:
. *${prefix}infosurah*
. *${prefix}surah*
. *${prefix}tafsir*
. *${prefix}ALaudio*
. *${prefix}jsolat*

Premium: [Belum Tersedia] 
. *${prefix}pornhub*
. *${prefix}simsimi*

Download:
. *${prefix}instagram*
. *${prefix}ytmp3*
. *${prefix}ytmp4*

Search Any:
. *${prefix}images*
. *${prefix}sreddit*
. *${prefix}resep*
. *${prefix}nekopoi*
. *${prefix}stalkig*
. *${prefix}wiki*
. *${prefix}cuaca*
. *${prefix}chord*
. *${prefix}ss*
. *${prefix}play*

Random Teks:
. *${prefix}fakta*
. *${prefix}pantun*
. *${prefix}katabijak*
. *${prefix}quote*

Random Images:
. *${prefix}anime*
. *${prefix}kpop*
. *${prefix}memes*

Lain-lain:
. *${prefix}tts*
. *${prefix}translate*
. *${prefix}resi*
. *${prefix}ceklokasi*
. *${prefix}shortlink*

Tentang Bot:
. *${prefix}tnc*
. *${prefix}donasi*
. *${prefix}ownerbot*
. *${prefix}join*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

Owner Bot:
. *${prefix}ban* - banned
. *${prefix}bc* - promosi
. *${prefix}leaveall* - keluar semua grup
. *${prefix}clearall* - hapus semua chat

Grup Update Bot Sinchan:
>https://chat.whatsapp.com/Igh2CFotKTQCnUpbaO7zvL

Hope you have a great day!✨`
}

exports.textAdmin = () => {
    return `
⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
. *${prefix}kickall*
-owner adalah pembuat grup.

⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

. *${prefix}add*
. *${prefix}kick* @tag
. *${prefix}promote* @tag
. *${prefix}demote* @tag
. *${prefix}tagall*
. *${prefix}del*
`
}

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

OVO/DANA/GoPay/Pulsa : 082134580805
Saweria              : https://saweria.co/SinchanBot

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih.`
}
