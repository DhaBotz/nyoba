process.on("uncaughtException", console.error);
require("./setting");
const {
  WA_DEFAULT_EPHEMERAL,
  getAggregateVotesInPollMessage,
  generateWAMessageContent,
  generateWAMessage,
  downloadContentFromMessage,
  areJidsSameUser,
  getContentType,
} = global.baileys;
const {
  generateWAMessageFromContent,
  proto,
  prepareWAMessageMedia,
} = require("@whiskeysockets/baileys");
const fs = require("fs");
const cron = require("node-cron");
const util = require("util");
const chalk = require("chalk");
const os = require("os");
const speed = require("performance-now");
const axios = require("axios");
const fsx = require("fs-extra");
const dns = require("dns");
const FormData = require("form-data");
const gtts = require("node-gtts");
const ytdl = require("ytdl-core");
const cheerio = require("cheerio");
const ms = require("ms");
const crypto = require("crypto");
const https = require("https");
const tkApi = require("@tobyg74/tiktok-api-dl");
const { URL_REGEX } = require("@whiskeysockets/baileys");
const { fileTypeFromBuffer } = require("file-type");
const PhoneNumber = require("awesome-phonenumber");
const { Pixiv } = require("@ibaraki-douji/pixivts");
const pixiv = new Pixiv();
const bingi = require("bing-scraper");
const phd = require("@justalk/pornhub-api");
const xfar = require("xfarr-api");
const dylux = require("api-dylux");
const nou = require("node-os-utils");
const dhn = require("dhn-api");
const g4f = require("g4f");
const path = require("path");
const { pipeline } = require("stream");
const { promisify } = require("util");
const jimp = require("jimp");
const kotz = require("kotz-api");
const zsExtract = require("zs-extract");
const acrcloud = require("acrcloud");
const { ocrSpace } = require("ocr-space-api-wrapper");
const mann = require("d-scrape");
const content = JSON.stringify(m.message);
const isQuotedViewonce = m.quoted
  ? content.includes("viewOnceMessage")
    ? true
    : false
  : true;
const { youtubedl, youtubedl2 } = require("@bochilteam/scraper-sosmed");
const { Configuration, OpenAIApi } = require("openai");
const ffmpeg = require("fluent-ffmpeg");
const moment = require("moment-timezone");
const { JSDOM } = require("jsdom");
const maker = require("mumaker");
const yts = require("yt-search");
const jsobfus = require("javascript-obfuscator");
const { exec, spawn, execSync } = require("child_process");
const { addExif } = require("./lib/exif");
const {
  smsg,
  tanggal,
  getTime,
  isUrl,
  sleep,
  clockString,
  runtime,
  fetchJson,
  getBuffer,
  jsonformat,
  format,
  formatp,
  parseMention,
  getRandom,
  getGroupAdmins,
  generateProfilePicture,
  toRupiah,
  shorturl,
  enumGetKey,
  sort,
  pickRandom,
  toNumber,
  randomNumber,
} = require("./lib/myfunc");
const { TelegraPH } = require("./lib/TelegraPH");
const { search, ytmp3, ytmp4 } = require("./lib/searchyt");
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"));
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"));
const { ssweb, tiktok, remini, findSongs } = require("./lib/scraper");
const { color, bgcolor } = require("./lib/color");
const { uptotelegra } = require("./lib/upload");
const {
  getRegisteredRandomId,
  addRegisteredUser,
  createSerial,
  checkRegisteredUser,
} = require("./lib/register.js");
//=================================================//
module.exports = RezzHost = async (RezzHost, m, chatUpdate, store) => {
  try {
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
          ? m.message.imageMessage.caption
          : m.mtype == "videoMessage"
            ? m.message.videoMessage.caption
            : m.mtype == "extendedTextMessage"
              ? m.message.extendedTextMessage.text
              : m.mtype == "buttonsResponseMessage"
                ? m.message.buttonsResponseMessage.selectedButtonId
                : m.mtype == "listResponseMessage"
                  ? m.message.listResponseMessage.singleSelectReply
                      .selectedRowId
                  : m.mtype == "templateButtonReplyMessage"
                    ? m.message.templateButtonReplyMessage.selectedId
                    : m.mtype == "interactiveResponseMessage"
                      ? appenTextMessage(
                          JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson)
                            .id,
                          chatUpdate,
                        )
                      : m.mtype == "templateButtonReplyMessage"
                        ? appenTextMessage(m.msg.selectedId, chatUpdate)
                        : m.mtype === "messageContextInfo"
                          ? m.message.buttonsResponseMessage
                              ?.selectedButtonId ||
                            m.message.listResponseMessage?.singleSelectReply
                              .selectedRowId ||
                            m.text
                          : "";

    //WM By Rulzz, Titenono lek ko hapus le😹
    async function appenTextMessage(text, chatUpdate) {
      let messages = await generateWAMessage(
        m.chat,
        { text: text, mentions: m.mentionedJid },
        {
          userJid: RezzHost.user.id,
          quoted: m.quoted && m.quoted.fakeObj,
        },
      );
      messages.key.fromMe = areJidsSameUser(m.sender, RezzHost.user.id);
      messages.key.id = m.key.id;
      messages.pushName = m.pushName;
      if (m.isGroup) messages.participant = m.sender;
      let msg = {
        ...chatUpdate,
        messages: [proto.WebMessageInfo.fromObject(messages)],
        type: "append",
      };
      RezzHost.ev.emit("messages.upsert", msg);
    }
    var budy = typeof m.text == "string" ? m.text : "";
    const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(
      body,
    )
      ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi)
      : ".";
    //=================================================//
    const Styles = (text, style = 1) => {
      var xStr = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
      var yStr = {
        1: "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890",
      };
      var replacer = [];
      xStr.map((v, i) =>
        replacer.push({
          original: v,
          convert: yStr[style].split("")[i],
        }),
      );
      var str = text.toLowerCase().split("");
      var output = [];
      str.map((v) => {
        const find = replacer.find((x) => x.original == v);
        find ? output.push(find.convert) : output.push(v);
      });
      return output.join("");
    };
    const pushname = m.pushName || "No Name";
    const isCmd = body.startsWith(prefix);
    const command = isCmd
      ? body.slice(prefix.length).trim().split(" ").shift().toLowerCase()
      : ""; //Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
    const args = body.trim().split(/ +/).slice(1);
    const botNumber = await RezzHost.decodeJid(RezzHost.user.id);
    const isRegistered = checkRegisteredUser(m.sender);
    const isCreator = [botNumber, ...global.owner]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(m.sender);
    const text = (q = args.join(" "));
    const { type, quotedMsg, mentioned, now, fromMe } = m;
    const quoted = m.quoted ? m.quoted : m;
    const mime = (quoted.msg || quoted).mimetype || "";
    const isMedia = /image|video|sticker|audio/.test(mime);
    const from = mek.key.remoteJid;
    const groupMetadata = m.isGroup
      ? await RezzHost.groupMetadata(from).catch((e) => {})
      : "";
    const sender = m.isGroup
      ? m.key.participant
        ? m.key.participant
        : m.participant
      : m.key.remoteJid;
    const groupName = m.isGroup ? groupMetadata.subject : "";
    const participants = m.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : "";
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const AntiLink = m.isGroup ? ntilink.includes(from) : false;
    const jangan = m.isGroup ? ntilink.includes(m.chat) : false;
    const welcm = m.isGroup ? wlcm.includes(from) : false;
    const chat = m.isGroup ? [m.chat] : false;
    const qmsg = quoted.msg || quoted;
    const content = JSON.stringify(m.message);
    const numberQuery =
      text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net";
    const mentionByTag =
      m.mtype == "extendedTextMessage" &&
      m.message.extendedTextMessage.contextInfo != null
        ? m.message.extendedTextMessage.contextInfo.mentionedJid
        : [];
    //const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
    const mentionByReply =
      type == "extendedTextMessage" &&
      m.message.extendedTextMessage.contextInfo != null
        ? m.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    const froms = m.quoted
      ? m.quoted.sender
      : text
        ? text.replace(/[^0-9]/g, "")
          ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
          : false
        : false;
    const qtod = m.quoted ? "true" : "false";
    //================== [ TIME ] ==================//
    const hariini = moment.tz("Asia/Makassar").format("dddd, DD MMMM YYYY");
    const time = moment(Date.now())
      .tz("Asia/Jakarta")
      .locale("id")
      .format("HH:mm:ss z");
    const tanggal2 = moment.tz("Asia/Jakarta").format("DD/MM/YY");
    const wita = moment.tz("Asia/Makassar").format("HH : mm : ss");

    const time2 = moment().tz("Asia/Makassar").format("HH:mm:ss");
    if (time2 < "23:59:00") {
      var ucapanWaktu = "Selamat Malam 🏙️";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Selamat Petang 🌆";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Selamat Sore 🌇";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Selamat Siang 🌤️";
    }
    if (time2 < "10:00:00") {
      var ucapanWaktu = "Selamat Pagi 🌄";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Selamat Subuh 🌆";
    }
    if (time2 < "03:00:00") {
      var ucapanWaktu = "Selamat Tengah Malam 🌃";
    }
    //=================================================//
    // function

    //SKREP
    const { bard } = require("./lib/bard");

    //================== [ RESPON ALL GAME ] ==================//

    const kalgans = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(m.chat
          ? {
              remoteJid: `status@broadcast`,
            }
          : {}),
      },
      message: {
        locationMessage: {
          name: `${botname}`,
          jpegThumbnail: "",
        },
      },
    };

    const reply2 = (teks) => {
      RezzHost.sendMessage(
        m.chat,
        {
          document: fs.readFileSync("./package.json"),
          fileName: "WaysMc In Here",
          mimetype: "application/msword",
          jpegThumbnail: fs.readFileSync("./media/asep.jpg"),
          caption: `\n${teks}`,
        },
        { quoted: kalgans, ephemeralExpiration: 86400 },
      );
    };

    async function reply(teks) {
      const nedd = {
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterName: global.botname,
            newsletterJid: global.idcennel,
          },
          externalAdReply: {
            showAdAttribution: true,
            title: `${botname}`,
            body: foter1,
            previewType: "VIDEO",
            thumbnailUrl: thumbnail,
            sourceUrl: hariini,
          },
        },
        text: teks,
      };
      return RezzHost.sendMessage(m.chat, nedd, {
        quoted: kalgans,
      });
    }

    try {
      let id = m.chat;
      let timeout = 180000;
      let hadiah = randomNumber(10000, 20000);
      let users = global.db.data.users[m.sender];
      let budy = typeof m.body == "string" ? m.body : false;
      RezzHost.bomb = RezzHost.bomb ? RezzHost.bomb : {};

      if (RezzHost.bomb[id] && !isNaN(body) && !isCmd) {
        let json = RezzHost.bomb[id][1].find((v) => v.position == body);
        if (!json) return;
        if (json.emot == "💥") {
          json.state = true;
          let bomb = RezzHost.bomb[id][1];
          let teks = `*DUARRRRRR 💥*\n\n`;
          teks +=
            bomb
              .slice(0, 3)
              .map((v) => (v.state ? v.emot : v.number))
              .join("") + "\n";
          teks +=
            bomb
              .slice(3, 6)
              .map((v) => (v.state ? v.emot : v.number))
              .join("") + "\n";
          teks +=
            bomb
              .slice(6)
              .map((v) => (v.state ? v.emot : v.number))
              .join("") + "\n\n";
          teks += `@${m.sender.split("@")[0]} membuka kotak yang berisi *Bom* Game di hentikan!`;
          RezzHost.sendMessage(
            m.chat,
            {
              text: teks,
              contextInfo: {
                mentionedJid: [m.sender],
                externalAdReply: {
                  thumbnailUrl:
                    "https://telegra.ph/file/490ab1eea92232fc06e68.jpg",
                  title: " 🎮  𝗚 𝗔 𝗠 𝗘 - 𝗧 𝗘 𝗕 𝗔 𝗞 - 𝗕 𝗢 𝗢 𝗠  🎮",
                  body: null,
                  renderLargerThumbnail: true,
                  sourceUrl: null,
                  mediaType: 1,
                },
              },
            },
            { quoted: kalgans },
          ).then(() => {
            clearTimeout(RezzHost.bomb[id][2]);
            delete RezzHost.bomb[id];
          });
        } else if (json.state) {
          return RezzHost.sendText(
            m.chat,
            `Kotak ${json.number} sudah di buka silahkan pilih kotak yang lain!`,
            m,
          );
        } else {
          json.state = true;
          let changes = RezzHost.bomb[id][1];
          let open = changes.filter((v) => v.state && v.emot != "💥").length;

          if (open >= 8) {
            let teks = `*🎮 GAME TEBAK BOM 🎮*\n\nKirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`;
            teks +=
              changes
                .slice(0, 3)
                .map((v) => (v.state ? v.emot : v.number))
                .join("") + "\n";
            teks +=
              changes
                .slice(3, 6)
                .map((v) => (v.state ? v.emot : v.number))
                .join("") + "\n";
            teks +=
              changes
                .slice(6)
                .map((v) => (v.state ? v.emot : v.number))
                .join("") + "\n\n";
            teks += `*Permainan selesai!* kotak berisi bom tidak terbuka\n*+ $${toRupiah(hadiah)} balance* ke @${m.sender.split("@")[0]}`;

            RezzHost.sendMessage(
              m.chat,
              { text: teks, contextInfo: { mentionedJid: [m.sender] } },
              { quoted: kalgans },
            ).then(() => {
              db.data.users[m.sender].balance += hadiah;
              clearTimeout(RezzHost.bomb[id][2]);
              delete RezzHost.bomb[id];
            });
          } else {
            let teks = `*🎮 GAME TEBAK BOM 🎮*\n\nKirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`;
            teks +=
              changes
                .slice(0, 3)
                .map((v) => (v.state ? v.emot : v.number))
                .join("") + "\n";
            teks +=
              changes
                .slice(3, 6)
                .map((v) => (v.state ? v.emot : v.number))
                .join("") + "\n";
            teks +=
              changes
                .slice(6)
                .map((v) => (v.state ? v.emot : v.number))
                .join("") + "\n\n";
            teks += `Waktu : *${timeout / 1000 / 60} menit*\n`;
            teks += `Kotak berisi bom tidak terbuka\n*+ $${toRupiah(hadiah)} balance* ke @${m.sender.split("@")[0]}`;

            RezzHost.sendMessage(
              m.chat,
              { text: teks, contextInfo: { mentionedJid: [m.sender] } },
              { quoted: kalgans },
            ).then(() => {
              db.data.users[m.sender].balance += hadiah;
            });
          }
        }
      }
    } catch (e) {
      return RezzHost.sendText(m.chat, e.toString(), m);
    }

    if (from in family100) {
      let { soal, jawaban, hadiah, waktu } = family100[from];
      for (let i of jawaban) {
        if (body.toLowerCase().includes(i)) {
          let anu = jawaban.indexOf(i);
          jawaban.splice(anu, 1);
          await reply(
            `*GAME FAMILY 100*\n\nJawaban kamu benar!\nJawaban: ${i}\nHadiah: $${hadiah}\n\n${jawaban.length < 1 ? "Selamat semua jawaban sudah tertebak!\ningin bermain lagi? kirim " + prefix + "family100" : "Jawaban yang belum tertebak: " + jawaban.length}`,
          );
          db.data.users[m.sender].balance += hadiah;
        }
      }
      if (jawaban.length < 1) {
        clearTimeout(waktu);
        delete family100[from];
      }
    }

    try {
      let roof = Object.values(suit).find(
        (v) => v.status && [v.penantang, v.ditantang].includes(m.sender),
      );
      if (roof) {
        let win = "";
        let tie = false;
        if (m.sender == roof.ditantang && m.isGroup && roof.status == "WAIT") {
          if (body.toLowerCase() === "y") {
            roof.status = "PLAY";
            roof.asal = m.chat;
            clearTimeout(roof.waktu);
            uselimit();
            await RezzHost.sendMessage(
              m.chat,
              {
                text: "Suit telah dikirimkan ke chat\nSilahkan pilih suit di chat masing²",
                contextInfo: { mentionedJid: [roof.ditantang, roof.penantang] },
              },
              { quoted: m },
            );
            if (!roof.pilih1)
              await RezzHost.sendText(
                roof.penantang,
                `*Silahkan pilih dibawah ini :*\n✂ Gunting\n📄 Kertas\n🗿 Batu\n\nContoh jika kamu ingin memilih gunting ketik *Gunting*`,
                m,
              );
            if (!roof.pilih2)
              await RezzHost.sendText(
                roof.ditantang,
                `*Silahkan pilih dibawah ini :*\n✂ Gunting\n📄 Kertas\n🗿 Batu\n\nContoh jika kamu ingin memilih gunting ketik *Gunting*`,
                m,
              );
            roof.waktu_milih = setTimeout(async () => {
              if (!roof.pilih && !roof.pilih2)
                await RezzHost.sendMessage(m.chat, {
                  text: `Kedua pemain tidak niat main!\nGame suit dibatalkan`,
                });
              else if (!roof.pilih || !roof.pilih2) {
                win = !roof.pilih ? roof.ditantang : roof.penantang;
                await RezzHost.sendMessage(
                  m.chat,
                  {
                    text: `@${(roof.pilih ? roof.ditantang : roof.penantang).split("@")[0]} tidak memilih suit\nGame suit dibatalkan`,
                    contextInfo: {
                      mentionedJid: [roof.ditantang, roof.penantang],
                    },
                  },
                  { quoted: kalgans },
                );
              }
              delete suit[roof.id];
              return !0;
            }, roof.timeout);
          } else if (body.toLowerCase() === "n") {
            await RezzHost.sendMessage(
              m.chat,
              {
                text: `@${roof.ditantang.split("@")[0]} menolak suit, suit dibatalkan`,
                contextInfo: { mentionedJid: [roof.ditantang] },
              },
              { quoted: m },
            );
            delete suit[roof.id];
            return !0;
          }
        }
        let jwb = m.sender == roof.penantang;
        let jwb2 = m.sender == roof.ditantang;
        let g = /gunting/i;
        let b = /batu/i;
        let k = /kertas/i;
        let reg = /^(gunting|batu|kertas)/i;
        if (jwb && reg.test(budy) && !roof.pilih && !m.isGroup) {
          roof.pilih = reg.exec(budy.toLowerCase())[0];
          roof.text = budy;
          await RezzHost.sendMessage(
            m.chat,
            {
              text: `Kamu telah memilih *${budy}* ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ""}`,
            },
            { quoted: m },
          );
          if (!roof.pilih2)
            await RezzHost.sendMessage(roof.ditantang, {
              text: "Lawan sudah memilih\nSekarang giliran kamu",
            });
        }
        if (jwb2 && reg.test(budy) && !roof.pilih2 && !m.isGroup) {
          roof.pilih2 = reg.exec(budy.toLowerCase())[0];
          roof.text2 = budy;
          await RezzHost.sendMessage(
            m.chat,
            {
              text: `Kamu telah memilih *${budy}* ${!roof.pilih ? "\n\nMenunggu lawan memilih" : ""}`,
            },
            { quoted: m },
          );
          if (!roof.pilih)
            await RezzHost.sendMessage(roof.penantang, {
              text: "Lawan sudah memilih\nSekarang giliran kamu",
            });
        }
        let stage = roof.pilih;
        let stage2 = roof.pilih2;
        if (roof.pilih && roof.pilih2) {
          clearTimeout(roof.waktu_milih);
          if (b.test(stage) && g.test(stage2)) win = roof.penantang;
          else if (b.test(stage) && k.test(stage2)) win = roof.ditantang;
          else if (g.test(stage) && k.test(stage2)) win = roof.penantang;
          else if (g.test(stage) && b.test(stage2)) win = roof.ditantang;
          else if (k.test(stage) && b.test(stage2)) win = roof.penantang;
          else if (k.test(stage) && g.test(stage2)) win = roof.ditantang;
          else if (stage == stage2) tie = true;
          let teks = `*🎮 GAME SUIT 🎮*\n\n${tie ? "*HASIL SERI*\n\n" : ""}@${roof.penantang.split("@")[0]} (${roof.text}) ${tie ? "" : roof.penantang == win ? " Menang" : " Kalah"}\n@${roof.ditantang.split("@")[0]} (${roof.text2}) ${tie ? "" : roof.ditantang == win ? " Menang" : " Kalah"}${tie ? "" : "\n\nHadiah : *$" + roof.hadiah + "* balance"}`;
          await RezzHost.sendMessage(
            roof.asal,
            {
              text: teks,
              contextInfo: { mentionedJid: [roof.ditantang, roof.penantang] },
            },
            { quoted: roof.chat },
          );
          if (roof.penantang == win) {
            global.db.data.users[roof.penantang].balance += roof.hadiah;
          } else if (roof.ditantang == win) {
            global.db.data.users[roof.ditantang].balance += roof.hadiah;
          }
          delete suit[roof.id];
        }
      }
    } catch (e) {
      return reply(e);
    }

    const isTicTacToe = (from, _dir) => {
      let status = false;
      Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === from) {
          status = true;
        }
      });
      return status;
    };
    const getPosTic = (from, _dir) => {
      let position = null;
      Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === from) {
          position = i;
        }
      });
      if (position !== null) {
        return position;
      }
    };
    const KeisiSemua = (tic) => {
      let status = true;
      for (let i of tic) {
        if (i !== "❌" && i !== "⭕") {
          status = false;
        }
      }
      return status;
    };
    const cekIsi = (nomor, tic) => {
      let status = false;
      if (tic[nomor] === "❌" || tic[nomor] === "⭕") {
        status = true;
      }
      return status;
    };
    const cekTicTac = (tic) => {
      let status = false;
      if (
        (tic[0] === "❌" && tic[1] === "❌" && tic[2] === "❌") ||
        (tic[0] === "⭕" && tic[1] === "⭕" && tic[2] === "⭕")
      ) {
        status = true;
      } else if (
        (tic[3] === "❌" && tic[4] === "❌" && tic[5] === "❌") ||
        (tic[3] === "⭕" && tic[4] === "⭕" && tic[5] === "⭕")
      ) {
        status = true;
      } else if (
        (tic[6] === "❌" && tic[7] === "❌" && tic[8] === "❌") ||
        (tic[6] === "⭕" && tic[7] === "⭕" && tic[8] === "⭕")
      ) {
        status = true;
      } else if (
        (tic[0] === "❌" && tic[3] === "❌" && tic[6] === "❌") ||
        (tic[0] === "⭕" && tic[3] === "⭕" && tic[6] === "⭕")
      ) {
        status = true;
      } else if (
        (tic[1] === "❌" && tic[4] === "❌" && tic[7] === "❌") ||
        (tic[1] === "⭕" && tic[4] === "⭕" && tic[7] === "⭕")
      ) {
        status = true;
      } else if (
        (tic[2] === "❌" && tic[5] === "❌" && tic[8] === "❌") ||
        (tic[2] === "⭕" && tic[5] === "⭕" && tic[8] === "⭕")
      ) {
        status = true;
      } else if (
        (tic[0] === "❌" && tic[4] === "❌" && tic[8] === "❌") ||
        (tic[0] === "⭕" && tic[4] === "⭕" && tic[8] === "⭕")
      ) {
        status = true;
      } else if (
        (tic[2] === "❌" && tic[4] === "❌" && tic[6] === "❌") ||
        (tic[2] === "⭕" && tic[4] === "⭕" && tic[6] === "⭕")
      ) {
        status = true;
      }
      return status;
    };
    if (isTicTacToe(from, tictactoe)) {
      try {
        // TicTacToe
        if (isTicTacToe(from, tictactoe)) {
          let nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9];
          let posi = tictactoe[from];
          let anu = posi.TicTacToe;
          if (posi.status === null) {
            if (sender === posi.ditantang) {
              if (body.toLowerCase() === "y") {
                the = `@${posi.ditantang.split("@")[0]} menerima tantangan

@${posi.penantang.split("@")[0]} = ❌
@${posi.ditantang.split("@")[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split("@")[0]}`;
                RezzHost.sendText(from, the, m);

                tictactoe[from].status = true;
              } else if (body.toLowerCase() === "n") {
                db.data.users[m.sender].balance -= 100;
                the1 = `@${posi.ditantang.split("@")[0]} menolak, game dibatalkan\nDan Player dikenakan sanksi -100 balance karna menolak ajakan pemain`;
                RezzHost.sendText(from, the1, m);
                delete tictactoe[from];
              }
            }
          } else if (posi.status === true) {
            if (sender === posi.penantang) {
              for (let i of nomor) {
                if (Number(body) === i) {
                  if (cekIsi(Number(body) - 1, anu))
                    return m.reply(`Nomor tersebut sudah terisi`);
                  tictactoe[from].TicTacToe[Number(body) - 1] = "❌";
                  if (cekTicTac(tictactoe[from].TicTacToe)) {
                    the2 = `@${posi.penantang.split("@")[0]} Menang

@${posi.penantang.split("@")[0]} = ❌
@${posi.ditantang.split("@")[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`;
                    RezzHost.sendText(from, the2, m);
                    global.db.data.users[posi.penantang].balance += posi.hadiah;
                    global.db.data.users[posi.ditantang].balance -= posi.hadiah;
                    delete tictactoe[from];
                  } else if (KeisiSemua(anu)) {
                    the3 = `*HASIL SERI*

@${posi.penantang.split("@")[0]} = ❌
@${posi.ditantang.split("@")[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`;
                    RezzHost.sendText(from, the3, m);

                    delete tictactoe[from];
                  } else {
                    the4 = `@${posi.penantang.split("@")[0]} telah mengisi

@${posi.penantang.split("@")[0]} = ❌
@${posi.ditantang.split("@")[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.ditantang.split("@")[0]}`;
                    RezzHost.sendText(from, the4, m);

                    tictactoe[from].status = false;
                  }
                }
              }
            }
          } else if (posi.status === false) {
            if (sender === posi.ditantang) {
              for (let i of nomor) {
                if (Number(body) === i) {
                  if (cekIsi(Number(body) - 1, anu))
                    return m.reply(`Nomor tersebut sudah terisi`);
                  tictactoe[from].TicTacToe[Number(body) - 1] = "⭕";
                  if (cekTicTac(anu)) {
                    the5 = `@${posi.ditantang.split("@")[0]} Menang

@${posi.penantang.split("@")[0]} = ❌
@${posi.ditantang.split("@")[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`;
                    RezzHost.sendText(from, the5, m);
                    global.db.data.users[posi.ditantang].balance += posi.hadiah;
                    global.db.data.users[posi.penantang].balance -= posi.hadiah;
                    delete tictactoe[from];
                  } else if (KeisiSemua(anu)) {
                    the6 = `Hasil Seri

@${posi.penantang.split("@")[0]} = ❌
@${posi.ditantang.split("@")[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`;
                    RezzHost.sendText(from, the6, m);

                    delete tictactoe[from];
                  } else {
                    the7 = `@${posi.ditantang.split("@")[0]} telah mengisi

@${posi.penantang.split("@")[0]} = ❌
@${posi.ditantang.split("@")[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split("@")[0]}`;
                    RezzHost.sendText(from, the7, m);

                    tictactoe[from].status = true;
                  }
                }
              }
            }
          }
        }
      } catch (err) {
        console.log(chalk.redBright("[ ERROR TICTACTOE ]"), err);
      }
    }
    //BATAS RESPON GAME

    RezzHost.autoshalat = RezzHost.autoshalat ? RezzHost.autoshalat : {};
    let who =
      m.mentionedJid && m.mentionedJid[0]
        ? m.mentionedJid[0]
        : m.fromMe
          ? RezzHost.user.id
          : m.sender;
    let id = m.chat;
    if (id in RezzHost.autoshalat) {
      return false;
    }
    let jadwalSholat = {
      shubuh: "04:29",
      terbit: "05:44",
      dhuha: "06:02",
      dzuhur: "12:02",
      ashar: "14:49",
      magrib: "17:52",
      isya: "19:01",
    };
    const datek = new Date(
      new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
      }),
    );
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
      if (timeNow === waktu) {
        let caption = `Hai kak ${pushname},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah JawaBarat dan sekitarnya._`;
        RezzHost.autoshalat[id] = [
          reply(caption),
          setTimeout(async () => {
            delete RezzHost.autoshalat[m.chat];
          }, 57000),
        ];
      }
    }

    const downloadMp3 = async (Link) => {
      try {
        await ytdl.getInfo(Link);
        let mp3File = getRandom(".mp3");
        console.log(color("Download Audio With ytdl-core"));
        ytdl(Link, { filter: "audioonly" })
          .pipe(fs.createWriteStream(mp3File))
          .on("finish", async () => {
            await RezzHost.sendMessage(
              from,
              { audio: fs.readFileSync(mp3File), mimetype: "audio/mp4" },
              { quoted: kalgans },
            );
            fs.unlinkSync(mp3File);
          });
      } catch (err) {
        reply(`${err}`);
      }
    };

    const downloadMp4 = async (Link) => {
      try {
        await ytdl.getInfo(Link);
        let mp4File = getRandom(".mp4");
        console.log(color("Download Video With ytdl-core"));
        let nana = ytdl(Link)
          .pipe(fs.createWriteStream(mp4File))
          .on("finish", async () => {
            await RezzHost.sendMessage(
              from,
              { video: fs.readFileSync(mp4File), gifPlayback: false },
              { quoted: kalgans },
            );
            fs.unlinkSync(`./${mp4File}`);
          });
      } catch (err) {
        reply(`${err}`);
      }
    };

    jarakkota = (dari, ke) => {
      return new Promise(async (resolve, reject) => {
        var html = (
          await axios(
            `https://www.google.com/search?q=${encodeURIComponent("jarak " + dari + " ke " + ke)}&hl=id`,
          )
        ).data;
        var $ = cheerio.load(html),
          obj = {};
        var img = html.split("var s='")?.[1]?.split("'")?.[0];
        obj.img = /^data:.*?\/.*?;base64,/i.test(img)
          ? Buffer.from(img.split`,`[1], "base64")
          : "";
        obj.desc = $("div.BNeawe.deIvCb.AP7Wnd").text()?.trim();
        resolve(obj);
      });
    };

    if (AntiLink) {
      if (body.match(/(chat.whatsapp.com\/)/gi)) {
        if (!isBotAdmins)
          return reply(
            `${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`,
          );
        let gclink =
          `https://chat.whatsapp.com/` +
          (await RezzHost.groupInviteCode(m.chat));
        let isLinkThisGc = new RegExp(gclink, "i");
        let isgclink = isLinkThisGc.test(m.text);
        if (isgclink)
          return RezzHost.sendMessage(m.chat, {
            text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`,
          });
        if (isAdmins)
          return RezzHost.sendMessage(m.chat, {
            text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`,
          });
        if (isCreator)
          return RezzHost.sendMessage(m.chat, {
            text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun`,
          });
        await RezzHost.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: mek.key.id,
            participant: mek.key.participant,
          },
        });
        RezzHost.groupParticipantsUpdate(m.chat, [m.sender], "remove");
        RezzHost.sendMessage(
          from,
          {
            text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`,
            contextInfo: { mentionedJid: [sender] },
          },
          { quoted: m },
        );
      }
    }

    //BATAS
    if (global.onlypc) {
      if (command & !m.isGroup) {
        return reply(
          `WAYSGANZ - MD dalam mode private, gunakan di private chat!`,
        );
      }
    }
    //=================================================//
    if (!RezzHost.public) {
      if (!m.key.fromMe) return;
    }
    let rn = ["recording"];
    let jd = rn[Math.floor(Math.random() * rn.length)];
    if (m.message) {
      RezzHost.sendPresenceUpdate("available", m.chat);
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32m WaysMc \x1b[1;37m]",
        time,
        chalk.green(budy || m.mtype),
        "Dari",
        chalk.blue(pushname),
        "Di",
        chalk.yellow(groupName ? groupName : "Private Chat"),
        "args :",
        chalk.white(args.length),
      );
    }
    //=================================================//
    // Respon Cmd with media
    if (
      isMedia &&
      m.msg.fileSha256 &&
      m.msg.fileSha256.toString("base64") in global.db.data.sticker
    ) {
      let hash = global.db.data.sticker[m.msg.fileSha256.toString("base64")];
      let { text, mentionedJid } = hash;
      let messages = await generateWAMessage(
        from,
        { text: text, mentions: mentionedJid },
        {
          userJid: RezzHost.user.id,
          quoted: m.quoted && m.quoted.fakeObj,
        },
      );
      messages.key.fromMe = areJidsSameUser(m.sender, RezzHost.user.id);
      messages.key.id = m.key.id;
      messages.pushName = m.pushName;
      if (m.isGroup) messages.participant = m.sender;
      let msg = {
        ...chatUpdate,
        messages: [proto.WebMessageInfo.fromObject(messages)],
        type: "append",
      };
      RezzHost.ev.emit("messages.upsert", msg);
    }
    //=================================================//
    if (budy.startsWith("!")) {
      try {
        return reply(JSON.stringify(eval(`${args.join(" ")}`), null, "\t"));
      } catch (e) {
        reply(e);
      }
    }
    async function sendGeekzMessage(chatId, message, options = {}) {
      let generate = await generateWAMessage(chatId, message, options);
      let type2 = getContentType(generate.message);
      if ("contextInfo" in options)
        generate.message[type2].contextInfo = options?.contextInfo;
      if ("contextInfo" in message)
        generate.message[type2].contextInfo = message?.contextInfo;
      return await RezzHost.relayMessage(chatId, generate.message, {
        messageId: generate.key.id,
      });
    }

    try {
      ppuser = await RezzHost.profilePictureUrl(m.sender, "image");
    } catch (err) {
      ppuser =
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
    }
    ppnyauser = await getBuffer(ppuser);
    try {
      let isNumber = (x) => typeof x === "number" && !isNaN(x);
      let limitUser = isCreator ? 1000 : limitawal;
      let balanceUser = isCreator ? 10000 : balanceawal;
      let user = global.db.data.users[m.sender];
      if (typeof user !== "object") global.db.data.users[m.sender] = {};
      if (user) {
        if (!isNumber(user.balance)) user.balance = balanceUser;
        if (!isNumber(user.limit)) user.limit = limitUser;
        if (!("premium" in user)) user.premium = false;
        if (!isNumber(user.afkTime)) user.afkTime = -1;
        if (!("afkReason" in user)) user.afkReason = "";
        if (!("claim" in user)) user.premium = 1;
      } else
        global.db.data.users[m.sender] = {
          name: pushname,
          limit: limitUser,
          balance: balanceUser,
          premium: false,
          afkTime: -1,
          afkReason: "",
          limit: limitUser,
          claim: 1,
        };
    } catch (err) {
      console.log(err);
    }

    let isNumber = (x) => typeof x === "number" && !isNaN(x);
    let setting = global.db.data.settings[botNumber];
    if (typeof setting !== "object") global.db.data.settings[botNumber] = {};
    if (setting) {
      if (!isNumber(setting.status)) setting.status = 0;
      if (autobio) {
        let _uptime = process.uptime() * 1000;
        let uptime = clockString(_uptime);
        await RezzHost.updateProfileStatus(
          `I am ${botname} | Aktif Selama ${uptime} ⏳ | Mode : ${RezzHost.public ? "Public-Mode" : "Self-Mode"}`,
        ).catch((_) => _);
      }
      if (autoread) {
        RezzHost.readMessages([m.key]);
      }
    } else
      global.db.data.settings[botNumber] = {
        status: 0,
        autobio: false,
        autoread: false,
      };

    if (!("hadiah" in db.data.settings)) db.data.settings.hadiah = [];
    if (!("hadiahkadaluwarsa" in db.data.settings))
      db.data.settings.hadiahkadaluwarsa = [];
    if (!("claimprem" in db.data.settings)) db.data.settings.claimprem = [];
    if (!("claimpremkadaluwarsa" in db.data.settings))
      db.data.settings.claimpremkadaluwarsa = [];

    if (m?.isGroup && chat) {
      if (!("welcome" in chat)) chat.welcome = true;
      if (!("sWelcome" in chat)) chat.sWelcome = "";
      if (!isNumber(chat.cleartime)) chat.clearTime = 0;
    } else if (m?.isGroup)
      global.db.data.chats[m.chat] = {
        sWelcome: "",
        welcome: true,
        clearTime: 0,
      };

    let chats = global.db.data.chats[m.chat];
    if (typeof chats !== "object") global.db.data.chats[m.chat] = {};
    if (chats) {
      if (!("mute" in chats)) chats.mute = false;
      if (!("RezzHost" in chats)) chats.RezzHost = false;
    } else
      global.db.data.chats[m.chat] = {
        mute: false,
        RezzHost: false,
      };

    if (db.data.chats[m.chat].RezzHost) {
      let name = await RezzHost.getName(m.sender);
      let prompt = `Mulai sekarang nama kamu adalah WaysGanz:v, kamu mempunyai sifat yang ramah, lucu, dan suka membantu orang lain, kamu selalu menjawab semua pertanyaan yang di berikan menggunakan bahasa indonesia dan selalu menggunakan kata panggilan aku dan kamu!, kamu adalah ai buatan dari ${ownername} yang di buat hanya untuk menjawab semua pertanyaan dengan ramah, dan lawan bicaramu sekarang adalah ${name}, dan kamu merespon pertanyaan di awali dengan kata sapaan sepeti halo di tambahkan dengan ${name}. dan ingat jangan bicara menggunakan kata formal anggap ${name} adalah teman mu.`;
      let RezzHostxdzz = await fetchJson(
        `https://itzpire.site/ai/gpt-logic?q=${budy.toLowerCase()}&logic=${prompt}&realtime=true`,
      );
      RezzHost.sendMessage(m.chat, {
        text: `*[ W A Y S G A N Z - A I ]*\n\n${RezzHost.data.response}`,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
            title: botname,
            body: "",
            thumbnailUrl: `${thumbnail}`,
            sourceUrl: hariini,
            mediaType: 1,
            renderLargerThumbnail: true,
          },
        },
      });
    }

    //================== [ ALL FUNCTION ] ==================//
    let limitnya = db.data.users[m?.sender].limit;
    let balancenya = db.data.users[m?.sender].balance;
    const isPremium =
      db.data.users[m?.sender].premium == true
        ? true
        : m?.sender == owner
          ? true
          : false;

    async function uselimit() {
      if (isCreator) return;
      db.data.users[m?.sender].limit -= 1;
    }

    async function igdl2(url) {
      let res = await axios("https://indown.io/");
      let _$ = cheerio.load(res.data);
      let referer = _$("input[name=referer]").val();
      let locale = _$("input[name=locale]").val();
      let _token = _$("input[name=_token]").val();
      let { data } = await axios.post(
        "https://indown.io/download",
        new URLSearchParams({
          link: url,
          referer,
          locale,
          _token,
        }),
        {
          headers: {
            cookie: res.headers["set-cookie"].join("; "),
          },
        },
      );
      let $ = cheerio.load(data);
      let result = [];
      let __$ = cheerio.load($("#result").html());
      __$("video").each(function () {
        let $$ = $(this);
        result.push({
          type: "video",
          thumbnail: $$.attr("poster"),
          url: $$.find("source").attr("src"),
        });
      });
      __$("img").each(function () {
        let $$ = $(this);
        result.push({
          type: "image",
          url: $$.attr("src"),
        });
      });

      return result;
    }

    Array.prototype.rendem = function rendem() {
      return this[Math.floor(Math.random() * this.length)];
    };

    function capital(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function formatter(value) {
      return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    function calculatePPN(value) {
      return value * 0.1;
    }

    function removeItem(array, item) {
      return array.filter(
        (elem) => !(elem.jid === item.jid && elem.state === item.state),
      );
    }

    cron.schedule(
      "00 00 * * *",
      () => {
        let user = Object.keys(global.db.data.users);
        for (let jid of user) {
          global.db.data.users[jid].claim = 1;
          if (
            global.db.data.users[jid].balance < 10000 &&
            global.db.data.users[jid].limit < 1
          ) {
            global.db.data.users[jid].limit = limitawal;
            global.db.data.users[jid].balance = balanceawal;
          }
        }
      },
      {
        scheduled: true,
        timezone: "Asia/Makassar",
      },
    );

    const totalFitur = () => {
      var mytext = fs.readFileSync("./RainMc.js").toString();
      var numUpper = (mytext.match(/case '/g) || []).length;
      return numUpper;
    };

    let mentionUser = [
      ...new Set([
        ...(m.mentionedJid || []),
        ...(m.quoted ? [m.quoted.sender] : []),
      ]),
    ];
    for (let jid of mentionUser) {
      let user = global.db.data.users[jid];
      if (!user) continue;
      let afkTime = user.afkTime;
      if (!afkTime || afkTime < 0) continue;
      let reason = user.afkReason || "";
      reply(
        `Jangan tag dia!
Dia sedang AFK ${reason ? "dengan alasan " + reason : "tanpa alasan"}
Selama ${clockString(new Date() - afkTime)}
`.trim(),
      );
    }
    if (global.db.data.users[m.sender].afkTime > -1) {
      let user = global.db.data.users[m.sender];
      reply(
        `
Telah Kembali Dari Afk ${user.afkReason ? " Selama " + user.afkReason : ""}
Selama ${clockString(new Date() - user.afkTime)}
`.trim(),
      );
      user.afkTime = -1;
      user.afkReason = "";
    }

    async function dellCase(filePath, caseNameToRemove) {
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          console.error("Terjadi kesalahan:", err);
          return;
        }

        const regex = new RegExp(
          `case\\s+'${caseNameToRemove}':[\\s\\S]*?break`,
          "g",
        );
        const modifiedData = data.replace(regex, "");

        fs.writeFile(filePath, modifiedData, "utf8", (err) => {
          if (err) {
            console.error("Terjadi kesalahan saat menulis file:", err);
            return;
          }

          console.log(
            `Teks dari case '${caseNameToRemove}' telah dihapus dari file.`,
          );
        });
      });
    }

    const more = String.fromCharCode(8206);
    const readmore = more.repeat(4001);
    //=================================================//
    switch (command) {
      case "menu":
        {
          await RezzHost.sendMessage(m.chat, {
            react: { text: "🕛", key: m.key },
          });
          await RezzHost.sendMessage(m.chat, {
            react: { text: "🕛", key: m.key },
          });
          await RezzHost.sendMessage(m.chat, {
            react: { text: "🕒", key: m.key },
          });
          await RezzHost.sendMessage(m.chat, {
            react: { text: "🕒", key: m.key },
          });
          await RezzHost.sendMessage(m.chat, {
            react: { text: "🕕", key: m.key },
          });
          await RezzHost.sendMessage(m.chat, {
            react: { text: "🕕", key: m.key },
          });
          await RezzHost.sendMessage(m.chat, {
            react: { text: "🕘", key: m.key },
          });
          await RezzHost.sendMessage(m.chat, {
            react: { text: "🕘", key: m.key },
          });
          await RezzHost.sendMessage(m.chat, {
            react: { text: "✅️", key: m.key },
          });
          wek = `| *𝖡𝖮𝖳 𝖭𝖠𝖬𝖤* : ${global.botname}
| *𝖮𝖶𝖭𝖤𝖱𝖭𝖠𝖬𝖤* : ${global.ownername}
| *𝖱𝖴𝖭𝖳𝖨𝖬𝖤* : ${runtime(process.uptime())}
| *𝖫𝖨𝖡𝖱𝖠𝖱𝖸* : @whiskeysockets/baileys
| *𝖡𝖮𝖳 𝖵𝖤𝖱𝖲𝖨𝖮𝖭* : ${versionbot}
| *𝖳𝖮𝖳𝖠𝖫 𝖴𝖲𝖤𝖱* : ${Object.keys(db.data.users).length} Users`;

          let sections = [
            {
              title: "𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨",
              highlight_label: ``,
              rows: [
                {
                  title: ">!< 𝗔𝗟𝗟 𝗠𝗘𝗡𝗨",
                  description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖲𝖾𝗆𝗎𝖺 𝖬𝖾𝗇𝗎`,
                  id: ".allmenu",
                },
                {
                  title: ">!< 𝗠𝗘𝗡𝗨 𝗢𝗪𝗡𝗘𝗥",
                  description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖬𝖾𝗇𝗎 𝖮𝗐𝗇𝖾𝗋`,
                  id: ".ownermenu",
                },
                {
                  title: ">!< 𝗠𝗘𝗡𝗨 𝗠𝗔𝗜𝗡",
                  description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖬𝖾𝗇𝗎 𝖬𝖺𝗂𝗇`,
                  id: ".mainmenu",
                },
                {
                  title: ">!< 𝗠𝗘𝗡𝗨 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗",
                  description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖬𝖾𝗇𝗎 𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽`,
                  id: ".searchmenu",
                },
                {
                  title: ">!< 𝗠𝗘𝗡𝗨 𝗚𝗥𝗢𝗨𝗣",
                  description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖬𝖾𝗇𝗎 𝖦𝗋𝗈𝗎𝗉`,
                  id: ".groupmenu",
                },
                {
                  title: ">!< 𝗠𝗘𝗡𝗨 𝗦𝗧𝗢𝗥𝗘",
                  description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖬𝖾𝗇𝗎 𝖲𝗍𝗈𝗋𝖾`,
                  id: ".storemenu",
                },
                {
                  title: ">!< 𝗠𝗘𝗡𝗨 𝗚𝗔𝗠𝗘",
                  description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖬𝖾𝗇𝗎 𝖦𝖺𝗆𝖾`,
                  id: ".gamemenu",
                },
                {
                  title: ">!< 𝗠𝗘𝗡𝗨 𝗣𝗜𝗡𝗧𝗘𝗥𝗘𝗦𝗧",
                  description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖬𝖾𝗇𝗎 𝖯𝗂𝗇𝗍𝖾𝗋𝖾𝗌𝗍`,
                  id: ".pinmenu",
                },
                {
                  title: ">!< 𝗠𝗘𝗡𝗨 𝗣𝗨𝗦𝗛𝗞𝗢𝗡𝗧𝗔𝗞",
                  description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖬𝖾𝗇𝗎 𝖯𝗎𝗌𝗁𝗄𝗈𝗇𝗍𝖺𝗄`,
                  id: ".pushmenu",
                },
              ],
            },
          ];

          let listMessage = {
            title: "𝖫𝖨𝖲𝖳 𝖬𝖤𝖭𝖴",
            sections,
          };

          let msg = generateWAMessageFromContent(
            m.chat,
            {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                  },
                  interactiveMessage: proto.Message.InteractiveMessage.create({
                    contextInfo: {
                      mentionedJid: [m.sender],
                      isForwarded: true,
                      forwardedNewsletterMessageInfo: {
                        newsletterJid: idchannel,
                        newsletterName: author,
                        serverMessageId: -1,
                      },
                      businessMessageForwardInfo: {
                        businessOwnerJid: RezzHost.decodeJid(RezzHost.user.id),
                      },
                    },
                    body: proto.Message.InteractiveMessage.Body.create({
                      text: wek,
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                      text: Styles("simple whatsapp bot"),
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                      title: `👋 ʜɪ ᴋᴀᴋ${m.sender.split("@")[0]}\n`,
                      subtitle: author,
                      hasMediaAttachment: true,
                      ...(await prepareWAMessageMedia(
                        { image: { url: `${thumbnail}` } },
                        { upload: RezzHost.waUploadToServer },
                      )),
                    }),
                    nativeFlowMessage:
                      proto.Message.InteractiveMessage.NativeFlowMessage.create(
                        {
                          buttons: [
                            {
                              name: "single_select",
                              buttonParamsJson: JSON.stringify(listMessage),
                            },
                            {
                              name: "cta_url",
                              buttonParamsJson: `{"display_text":"𝖢𝖱𝖤𝖠𝖳𝖮𝖱","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`,
                            },
                          ],
                        },
                      ),
                  }),
                },
              },
            },
            {},
          );

          await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
          });
        }
        break;

      case "store":
        {
          wek = `
| *𝖡𝖮𝖳 𝖭𝖠𝖬𝖤* : ${global.botname}
| *𝖮𝖶𝖭𝖤𝖱𝖭𝖠𝖬𝖤* : ${global.ownername}
| *𝖱𝖴𝖭𝖳𝖨𝖬𝖤* : ${runtime(process.uptime())}
| *𝖫𝖨𝖡𝖱𝖠𝖱𝖸* : @whiskeysockets/baileys
| *𝖡𝖮𝖳 𝖵𝖤𝖱𝖲𝖨𝖮𝖭* : ${versionbot}
| *𝖳𝖮𝖳𝖠𝖫 𝖴𝖲𝖤𝖱* : ${Object.keys(db.data.users).length} Users
    
*SELAMAT DATANG DI STORE MENU SILAHKAN PILIH APA YANG MAU ANDA BELI*`;

          let secti = [
            {
              title: "𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨 𝗦𝗧𝗢𝗥𝗘",
              rows: [
                {
                  title: ">!< DIAMOND FREE FIRE",
                  description: ``,
                  id: ".dmff",
                },
                {
                  title: ">!< DIAMOND MOBILE LEGENDS",
                  description: ``,
                  id: ".dmml",
                },
                {
                  title: ">!< HOMOR OF KINGS",
                  description: ``,
                  id: ".mainmenu",
                },
                {
                  title: ">!< UC PUBG",
                  description: ``,
                  id: ".searchmenu",
                },
                {
                  title: ">!< CALL OF DUTY",
                  description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖬𝖾𝗇𝗎 𝖦𝗋𝗈𝗎𝗉`,
                  id: ".groupmenu",
                },
                {
                  title: ">!< FIFA MOBILE",
                  description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖬𝖾𝗇𝗎 𝖲𝗍𝗈𝗋𝖾`,
                  id: ".storemenu",
                },
                {
                  title: ">!< SUPER SUS",
                  description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖬𝖾𝗇𝗎 𝖦𝖺𝗆𝖾`,
                  id: ".gamemenu",
                },
                {
                  title: ">!< CANDY SAUSAGE MAN",
                  description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖬𝖾𝗇𝗎 𝖯𝗂𝗇𝗍𝖾𝗋𝖾𝗌𝗍`,
                  id: ".pinmenu",
                },
                {
                  title: ">!< GARENA UNDOWN",
                  description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖬𝖾𝗇𝗎 𝖯𝗎𝗌𝗁𝗄𝗈𝗇𝗍𝖺𝗄`,
                  id: ".pushmenu",
                },
              ],
            },
          ];

          let listMessage = {
            title: "𝖫𝖨𝖲𝖳 STORE",
            secti,
          };

          let msg = generateWAMessageFromContent(
            m.chat,
            {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                  },
                  interactiveMessage: proto.Message.InteractiveMessage.create({
                    contextInfo: {
                      mentionedJid: [m.sender],
                      isForwarded: true,
                      forwardedNewsletterMessageInfo: {
                        newsletterJid: idchannel,
                        newsletterName: author,
                        serverMessageId: -1,
                      },
                      businessMessageForwardInfo: {
                        businessOwnerJid: RezzHost.decodeJid(RezzHost.user.id),
                      },
                    },
                    body: proto.Message.InteractiveMessage.Body.create({
                      text: wek,
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                      text: Styles("simple whatsapp bot"),
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                      title: `👋 ʜɪ ᴋᴀᴋ${m.sender.split("@")[0]}\n`,
                      subtitle: author,
                      hasMediaAttachment: true,
                      ...(await prepareWAMessageMedia(
                        { image: { url: `${thumbnail}` } },
                        { upload: RezzHost.waUploadToServer },
                      )),
                    }),
                    nativeFlowMessage:
                      proto.Message.InteractiveMessage.NativeFlowMessage.create(
                        {
                          buttons: [
                            {
                              name: "single_select",
                              buttonParamsJson: JSON.stringify(listMessage),
                            },
                            {
                              name: "cta_url",
                              buttonParamsJson: `{"display_text":"𝖢𝖱𝖤𝖠𝖳𝖮𝖱","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`,
                            },
                          ],
                        },
                      ),
                  }),
                },
              },
            },
            {},
          );

          await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
          });
        }
        break;

      case "allmenu":
        {
          if (!isRegistered) return reply(mess.regis);
          var old = performance.now();
          var neww = performance.now();
          var speed = neww - old;
          let tekg = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}

*𝖡𝖮𝖳 𝖭𝖠𝖬𝖤 :* ${botname}
*𝖭𝖠𝖬𝖤 𝖮𝖶𝖭𝖤𝖱 :* ${ownername}
*𝖫𝖨𝖡𝖱𝖠𝖱𝖸 :* @whiskeysockets/baileys
*𝖳𝖠𝖭𝖦𝖦𝖠𝖫:* ${tanggal2}
*𝖳𝖮𝖳𝖠𝖫 𝖥𝖨𝖳𝖴𝖱:* ${totalFitur()}
*𝖱𝖴𝖭𝖳𝖨𝖬𝖤 :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split("@")[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? "Premium" : "Free"}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴘᴀʏᴍᴇɴᴛ
  › ${prefix}sᴇᴛʙᴏᴛɴᴀᴍᴇ
  › ${prefix}ᴀᴅᴅᴘʀᴇᴍ
  › ${prefix}ᴅᴇʟᴘʀᴇᴍ
  › ${prefix}ʟɪsᴛᴘʀᴇᴍ
  › ${prefix}ʙᴜᴀᴛᴄʟᴀɪᴍᴘʀᴇᴍ
  › ${prefix}ᴀᴅᴅʙᴀʟᴀɴᴄᴇ
  › ${prefix}ᴀᴅᴅʟɪᴍɪᴛ
  › ${prefix}ʙᴜᴀᴛʜᴀᴅɪᴀʜ
  › ${prefix}ʟɪsᴛᴄʟᴀɪᴍᴘʀᴇᴍ
  › ${prefix}ʟɪsᴛʜᴀᴅɪᴀʜ
  › ${prefix}ᴘᴜʙʟɪᴄ
  › ${prefix}sᴇʟғ
  › ${prefix}ɢᴇᴛᴄᴀsᴇ
  › ${prefix}ᴀᴅᴅᴄᴀsᴇ
  › ${prefix}ᴅᴇʟᴄᴀsᴇ
  › ${prefix}ʟɪsᴛʀᴇɢɪs
  › ${prefix}ɢᴇᴛʙɪᴏ
  › ${prefix}sᴇᴛᴘᴘʙᴏᴛ
  › ${prefix}sᴇᴛᴘᴘᴘᴀɴᴊᴀɴɢ
  › ${prefix}ᴅᴇʟᴘᴘʙᴏᴛ
  › ${prefix}ɢᴇᴛɴᴀᴍᴇ
  › ${prefix}sᴅᴏᴍᴀɪɴ
  › ${prefix}sᴘᴀɴᴇʟ
  › ${prefix}ʙɪᴏᴄʜᴀɴɢᴇ
  › ${prefix}ᴍʏɪᴘ
  › ${prefix}ʀᴇsᴛᴀʀᴛ
  › ${prefix}ᴅᴇʟ
  › ${prefix}ᴊᴘᴍᴘʀᴏᴍᴏꜱɪ

乂 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴄʟᴀɪᴍᴘʀᴇᴍ
  › ${prefix}ʙᴜʏᴘʀᴇᴍ
  › ${prefix}ᴀғᴋ
  › ${prefix}ᴛᴏᴘɢʟᴏʙᴀʟ
  › ${prefix}ʙᴜʏʟɪᴍɪᴛ
  › ${prefix}ᴄʟᴀɪᴍ
  › ${prefix}ʀᴇᴅᴇᴇᴍᴄᴏᴅᴇ
  › ${prefix}ǫᴄ
  › ${prefix}ǫᴄ2
  › ${prefix}ʀᴇᴍɪɴɪ
  › ${prefix}ᴍᴇ
  › ${prefix}ᴛᴏᴛᴀʟғɪᴛᴜʀ
  › ${prefix}ᴛᴏᴜʀʟ
  › ${prefix}sᴛɪᴄᴋᴇʀ
  › ${prefix}ᴘɪɴ
  › ${prefix}ᴄᴇᴋɪᴘ
  › ${prefix}ssᴡᴇʙ
  › ${prefix}ᴛᴏɪᴍɢ
  › ${prefix}ᴊᴀʀᴀᴋ 
  › ${prefix}ᴄᴇʀᴘᴇɴ
  
乂 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴛɪᴋᴛᴏᴋ
  › ${prefix}ʏᴛᴍᴘ4
  › ${prefix}ʏᴛᴍᴘ3
  › ${prefix}ᴍᴇᴅɪᴀғɪʀᴇ
  › ${prefix}ɪɴsᴛᴀɢʀᴀᴍ 
  › ${prefix}ɢɪᴛᴄʟᴏɴᴇ

乂 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ɢᴏᴏɢʟᴇ
  › ${prefix}ʏᴛs
  › ${prefix}ᴘʟᴀʏ
  › ${prefix}ᴛᴛsᴇᴀʀᴄʜ

乂 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴀᴅᴅ 
  › ${prefix}ᴡᴇʟᴄᴏᴍᴇ
  › ${prefix}sᴇᴛɴᴀᴍᴇ
  › ${prefix}ʟɪɴᴋɢᴄ
  › ${prefix}ᴛᴀɢᴀʟʟ
  › ${prefix}ʜɪᴅᴇᴛᴀɢ
  › ${prefix}ᴘʀᴏᴍᴏᴛᴇ
  › ${prefix}ᴅᴇᴍᴏᴛᴇ
  › ${prefix}ᴋɪᴄᴋ 
  › ${prefix}ᴄʟᴏsᴇᴛɪᴍᴇ
  › ${prefix}ᴏᴘᴇɴᴛɪᴍᴇ
  › ${prefix}ᴀɴᴛɪʟɪɴᴋ
  › ${prefix}ᴇᴅɪᴛᴅᴇsᴋ
  › ${prefix}sᴇɴᴅʟɪɴᴋɢᴄ
  › ${prefix}ʀᴇsᴇᴛʟɪɴᴋɢᴄ
  › ${prefix}ᴛᴏᴛᴀɢ

乂 𝗔𝗜 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴡᴀʏꜱɢᴀɴᴢʜᴏsᴛ
  › ${prefix}ᴡᴀʏꜱɢᴀɴᴢʜᴏsᴛᴄʜᴀᴛ
  › ${prefix}ʙᴀʀᴅ

乂 𝗣𝗔𝗡𝗘𝗟 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴀᴅᴅᴜsʀ
  › ${prefix}ᴀᴅᴅsʀᴠ
  › ${prefix}ʀᴀᴍʟɪsᴛ
  › ${prefix}ᴅᴇʟsʀᴠ
  › ${prefix}ᴅᴇʟᴜsʀ
  › ${prefix}ʟɪsᴛᴘᴀɴᴇʟ
  › ${prefix}ᴀᴅᴅᴘᴀɴᴇʟ
  › ${prefix}ʟɪsᴛᴀᴅᴍɪɴ
  › ${prefix}ᴀᴅᴅᴀᴅᴍɪɴ
  › ${prefix}ʟɪsᴛsʀᴠ
  › ${prefix}ʟɪsᴛᴜsʀ
  › ${prefix}ᴅᴇʟᴘᴀɴᴇʟ

乂 𝗦𝗧𝗢𝗥𝗘 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴅᴏɴᴇ
  › ${prefix}ʙᴀᴛᴀʟ
  › ${prefix}ᴛᴜɴᴅᴀ
  › ${prefix}ʀᴇǫᴘᴀɴᴇʟ
 › ${prefix}ᴘᴀʏᴍᴇɴᴛ

乂 𝗣𝗨𝗦𝗛 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ʙᴄɢᴄ
  › ${prefix}ᴊᴘᴍ
  › ${prefix}ᴊᴘᴍᴛᴇsᴛɪ
  › ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋ
  › ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋ1
  › ${prefix}ʟɪsᴛɢᴄ
  › ${prefix}sᴛᴀʀᴛᴊᴘᴍ
  › ${prefix}sᴇᴛᴛᴇᴋsᴊᴘᴍ

乂 𝗗𝗢𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴀᴅᴅɢᴄ
  › ${prefix}ᴅᴇʟɢᴄ
  › ${prefix}sᴜʙᴅᴏᴍᴀɪɴ

乂 𝗚𝗔𝗠𝗘 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴛᴇʙᴀᴋʙᴏᴍʙ
  › ${prefix}ᴄᴀsɪɴᴏ
  › ${prefix}sʟᴏᴛ
  › ${prefix}ᴛɪᴄᴛᴀᴄᴛᴏᴇ
  › ${prefix}ᴅᴇʟᴛᴛᴛ
  › ${prefix}sᴜɪᴛ

𝖥𝖨𝖳𝖴𝖱 𝖤𝖱𝖱𝖮𝖱?
ʟᴀᴘᴏʀ ᴋᴇ ᴏᴡɴᴇʀ
 › ${prefix}ᴏᴡɴᴇʀ
`;
          RezzHost.sendMessage(
            m.chat,
            {
              text: tekg,
              contextInfo: {
                isForwarded: true,
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                  newsletterName: foter2,
                  newsletterJid: idchannel,
                },
                externalAdReply: {
                  title: foter2,
                  body: foter1,
                  thumbnailUrl: thumbnail,
                  sourceUrl: "",
                  mediaType: 1,
                  renderLargerThumbnail: false,
                },
              },
            },
            { quoted: kalgans },
          );
        }
        break;
      case "ownermenu":
        {
          if (!isRegistered) return reply(mess.regis);
          var old = performance.now();
          var neww = performance.now();
          var speed = neww - old;
          let teks = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}

*𝖡𝖮𝖳 𝖭𝖠𝖬𝖤 :* ${botname}
*𝖭𝖠𝖬𝖤 𝖮𝖶𝖭𝖤𝖱 :* ${ownername}
*𝖫𝖨𝖡𝖱𝖠𝖱𝖸 :* @whiskeysockets/baileys
*𝖳𝖠𝖭𝖦𝖦𝖠𝖫:* ${tanggal2}
*𝖳𝖮𝖳𝖠𝖫 𝖥𝖨𝖳𝖴𝖱:* ${totalFitur()}
*𝖱𝖴𝖭𝖳𝖨𝖬𝖤 :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split("@")[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? "Premium" : "Free"}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴘᴀʏᴍᴇɴᴛ
  b.� ${prefix}sᴇᴛʙᴏᴛɴᴀᴍᴇ
  › ${prefix}ᴀᴅᴅᴘʀᴇᴍ
  › ${prefix}ᴅᴇʟᴘʀᴇᴍ
  › ${prefix}ʟɪsᴛᴘʀᴇᴍ
  › ${prefix}ʙᴜᴀᴛᴄʟᴀɪᴍᴘʀᴇᴍ
  › ${prefix}ᴀᴅᴅʙᴀʟᴀɴᴄᴇ
  › ${prefix}ᴀᴅᴅʟɪᴍɪᴛ
  › ${prefix}ʙᴜᴀᴛʜᴀᴅɪᴀʜ
  › ${prefix}ʟɪsᴛᴄʟᴀɪᴍᴘʀᴇᴍ
  › ${prefix}ʟɪsᴛʜᴀᴅɪᴀʜ
  › ${prefix}ᴘᴜʙʟɪᴄ
  › ${prefix}sᴇʟғ
  › ${prefix}ɢᴇᴛᴄᴀsᴇ
  › ${prefix}ᴀᴅᴅᴄᴀsᴇ
  › ${prefix}ᴅᴇʟᴄᴀsᴇ
  › ${prefix}ʟɪsᴛʀᴇɢɪs
  › ${prefix}ɢᴇᴛʙɪᴏ
  › ${prefix}sᴇᴛᴘᴘʙᴏᴛ
  › ${prefix}sᴇᴛᴘᴘᴘᴀɴᴊᴀɴɢ
  › ${prefix}ᴅᴇʟᴘᴘʙᴏᴛ
  › ${prefix}ɢᴇᴛɴᴀᴍᴇ
  › ${prefix}sᴅᴏᴍᴀɪɴ
  › ${prefix}sᴘᴀɴᴇʟ
  › ${prefix}ʙɪᴏᴄʜᴀɴɢᴇ
  › ${prefix}ᴍʏɪᴘ
  › ${prefix}ʀᴇsᴛᴀʀᴛ
  › ${prefix}ᴅᴇʟ
  
  ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 ${ownername}

`;
          RezzHost.sendMessage(
            m.chat,
            {
              text: teks,
              contextInfo: {
                isForwarded: true,
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                  newsletterName: foter2,
                  newsletterJid: idchannel,
                },
                externalAdReply: {
                  title: foter2,
                  body: foter1,
                  thumbnailUrl: thumbnail,
                  sourceUrl: "",
                  mediaType: 1,
                  renderLargerThumbnail: false,
                },
              },
            },
            { quoted: m },
          );
        }
        break;
      case "mainmenu":
        {
          if (!isRegistered) return reply(mess.regis);
          var old = performance.now();
          var neww = performance.now();
          var speed = neww - old;
          let tekf = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}

*𝖡𝖮𝖳 𝖭𝖠𝖬𝖤 :* ${botname}
*𝖭𝖠𝖬𝖤 𝖮𝖶𝖭𝖤𝖱 :* ${ownername}
*𝖫𝖨𝖡𝖱𝖠𝖱𝖸 :* @whiskeysockets/baileys
*𝖳𝖠𝖭𝖦𝖦𝖠𝖫:* ${tanggal2}
*𝖳𝖮𝖳𝖠𝖫 𝖥𝖨𝖳𝖴𝖱:* ${totalFitur()}
*𝖱𝖴𝖭𝖳𝖨𝖬𝖤 :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split("@")[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? "Premium" : "Free"}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴄʟᴀɪᴍᴘʀᴇᴍ
  › ${prefix}ʙᴜʏᴘʀᴇᴍ
  › ${prefix}ᴀғᴋ
  › ${prefix}ᴛᴏᴘɢʟᴏʙᴀʟ
  › ${prefix}ʙᴜʏʟɪᴍɪᴛ
  › ${prefix}ᴄʟᴀɪᴍ
  › ${prefix}ʀᴇᴅᴇᴇᴍᴄᴏᴅᴇ
  › ${prefix}ǫᴄ
  › ${prefix}ǫᴄ2
  › ${prefix}ʀᴇᴍɪɴɪ
  › ${prefix}ᴍᴇ
  › ${prefix}ᴛᴏᴛᴀʟғɪᴛᴜʀ
  › ${prefix}ᴛᴏᴜʀʟ
  › ${prefix}sᴛɪᴄᴋᴇʀ
  › ${prefix}ᴘɪɴ
  › ${prefix}ᴄᴇᴋɪᴘ
  › ${prefix}ssᴡᴇʙ
  › ${prefix}ᴛᴏɪᴍɢ
  › ${prefix}ᴊᴀʀᴀᴋ 
  › ${prefix}ᴄᴇʀᴘᴇɴ

  ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 ${ownername}
`;
          RezzHost.sendMessage(
            m.chat,
            {
              text: tekf,
              contextInfo: {
                isForwarded: true,
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                  newsletterName: foter2,
                  newsletterJid: idchannel,
                },
                externalAdReply: {
                  title: foter2,
                  body: foter1,
                  thumbnailUrl: thumbnail,
                  sourceUrl: "",
                  mediaType: 1,
                  renderLargerThumbnail: false,
                },
              },
            },
            { quoted: m },
          );
        }
        break;
      case "downloadmenu":
        {
          if (!isRegistered) return reply(mess.regis);
          var old = performance.now();
          var neww = performance.now();
          var speed = neww - old;
          let tekg = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}
*𝖡𝖮𝖳 𝖭𝖠𝖬𝖤 :* ${botname}
*𝖭𝖠𝖬𝖤 𝖮𝖶𝖭𝖤𝖱 :* ${ownername}
*𝖫𝖨𝖡𝖱𝖠𝖱𝖸 :* @whiskeysockets/baileys
*𝖳𝖠𝖭𝖦𝖦𝖠𝖫:* ${tanggal2}
*𝖳𝖮𝖳𝖠𝖫 𝖥𝖨𝖳𝖴𝖱:* ${totalFitur()}
*𝖱𝖴𝖭𝖳𝖨𝖬𝖤 :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split("@")[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? "Premium" : "Free"}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴛɪᴋᴛᴏᴋ
  › ${prefix}ʏᴛᴍᴘ4
  › ${prefix}ʏᴛᴍᴘ3
  › ${prefix}ᴍᴇᴅɪᴀғɪʀᴇ
  › ${prefix}ɪɴsᴛᴀɢʀᴀᴍ 
  › ${prefix}ɢɪᴛᴄʟᴏɴᴇ
  
  ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 ${ownername}
`;
          RezzHost.sendMessage(
            m.chat,
            {
              text: tekg,
              contextInfo: {
                isForwarded: true,
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                  newsletterName: foter2,
                  newsletterJid: idchannel,
                },
                externalAdReply: {
                  title: foter2,
                  body: foter1,
                  thumbnailUrl: thumbnail,
                  sourceUrl: "",
                  mediaType: 1,
                  renderLargerThumbnail: false,
                },
              },
            },
            { quoted: m },
          );
        }
        break;
      case "searchmenu":
        {
          if (!isRegistered) return reply(mess.regis);
          var old = performance.now();
          var neww = performance.now();
          var speed = neww - old;
          let tekgh = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}
*𝖡𝖮𝖳 𝖭𝖠𝖬𝖤 :* ${botname}
*𝖭𝖠𝖬𝖤 𝖮𝖶𝖭𝖤𝖱 :* ${ownername}
*𝖫𝖨𝖡𝖱𝖠𝖱𝖸 :* @whiskeysockets/baileys
*𝖳𝖠𝖭𝖦𝖦𝖠𝖫:* ${tanggal2}
*𝖳𝖮𝖳𝖠𝖫 𝖥𝖨𝖳𝖴𝖱:* ${totalFitur()}
*𝖱𝖴𝖭𝖳𝖨𝖬𝖤 :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split("@")[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? "Premium" : "Free"}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ɢᴏᴏɢʟᴇ
  › ${prefix}ʏᴛs
  › ${prefix}ᴘʟᴀʏ
  › ${prefix}ᴛᴛsᴇᴀʀᴄʜ

  ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 ${ownername}
`;
          RezzHost.sendMessage(
            m.chat,
            {
              text: tekgh,
              contextInfo: {
                isForwarded: true,
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                  newsletterName: foter2,
                  newsletterJid: idchannel,
                },
                externalAdReply: {
                  title: foter2,
                  body: foter1,
                  thumbnailUrl: thumbnail,
                  sourceUrl: "",
                  mediaType: 1,
                  renderLargerThumbnail: false,
                },
              },
            },
            { quoted: m },
          );
        }
        break;
      case "groupmenu":
        {
          if (!isRegistered) return reply(mess.regis);
          var old = performance.now();
          var neww = performance.now();
          var speed = neww - old;
          let tekg = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}
*𝖡𝖮𝖳 𝖭𝖠𝖬𝖤 :* ${botname}
*𝖭𝖠𝖬𝖤 𝖮𝖶𝖭𝖤𝖱 :* ${ownername}
*𝖫𝖨𝖡𝖱𝖠𝖱𝖸 :* @whiskeysockets/baileys
*𝖳𝖠𝖭𝖦𝖦𝖠𝖫:* ${tanggal2}
*𝖳𝖮𝖳𝖠𝖫 𝖥𝖨𝖳𝖴𝖱:* ${totalFitur()}
*𝖱𝖴𝖭𝖳𝖨𝖬𝖤 :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split("@")[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? "Premium" : "Free"}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴀᴅᴅ 
  › ${prefix}ᴡᴇʟᴄᴏᴍᴇ
  › ${prefix}sᴇᴛɴᴀᴍᴇ
  › ${prefix}ʟɪɴᴋɢᴄ
  › ${prefix}ᴛᴀɢᴀʟʟ
  › ${prefix}ʜɪᴅᴇᴛᴀɢ
  › ${prefix}ᴘʀᴏᴍᴏᴛᴇ
  › ${prefix}ᴅᴇᴍᴏᴛᴇ
  › ${prefix}ᴋɪᴄᴋ 
  › ${prefix}ᴄʟᴏsᴇᴛɪᴍᴇ
  › ${prefix}ᴏᴘᴇɴᴛɪᴍᴇ
  › ${prefix}ᴀɴᴛɪʟɪɴᴋ
  › ${prefix}ᴇᴅɪᴛᴅᴇsᴋ
  › ${prefix}sᴇɴᴅʟɪɴᴋɢᴄ
  › ${prefix}ʀᴇsᴇᴛʟɪɴᴋɢᴄ
  › ${prefix}ᴛᴏᴛᴀɢ

  ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 ${ownername}
`;
          RezzHost.sendMessage(
            m.chat,
            {
              text: tekg,
              contextInfo: {
                isForwarded: true,
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                  newsletterName: foter2,
                  newsletterJid: idchannel,
                },
                externalAdReply: {
                  title: foter2,
                  body: foter1,
                  thumbnailUrl: thumbnail,
                  sourceUrl: "",
                  mediaType: 1,
                  renderLargerThumbnail: false,
                },
              },
            },
            { quoted: m },
          );
        }
        break;
      case "aimenu":
        {
          if (!isRegistered) return reply(mess.regis);
          var old = performance.now();
          var neww = performance.now();
          var speed = neww - old;
          let tekg = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}
*𝖡𝖮𝖳 𝖭𝖠𝖬𝖤 :* ${botname}
*𝖭𝖠𝖬𝖤 𝖮𝖶𝖭𝖤𝖱 :* ${ownername}
*𝖫𝖨𝖡𝖱𝖠𝖱𝖸 :* @whiskeysockets/baileys
*𝖳𝖠𝖭𝖦𝖦𝖠𝖫:* ${tanggal2}
*𝖳𝖮𝖳𝖠𝖫 𝖥𝖨𝖳𝖴𝖱:* ${totalFitur()}
*𝖱𝖴𝖭𝖳𝖨𝖬𝖤 :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split("@")[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? "Premium" : "Free"}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 𝗔𝗜 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴡᴀʏꜱɢᴀɴᴢ ʜᴏꜱᴛ
  › ${prefix}ᴡᴀʏꜱɢᴀɴᴢ ᴄʜᴀᴛ
  › ${prefix}ʙᴀʀᴅ

  ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 ${ownername}
`;
          RezzHost.sendMessage(
            m.chat,
            {
              text: tekg,
              contextInfo: {
                isForwarded: true,
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                  newsletterName: foter2,
                  newsletterJid: idchannel,
                },
                externalAdReply: {
                  title: foter2,
                  body: foter1,
                  thumbnailUrl: thumbnail,
                  sourceUrl: "",
                  mediaType: 1,
                  renderLargerThumbnail: false,
                },
              },
            },
            { quoted: m },
          );
        }
        break;
      case "panelmenu":
        {
          if (!isRegistered) return reply(mess.regis);
          var old = performance.now();
          var neww = performance.now();
          var speed = neww - old;
          let tekg = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}
*𝖡𝖮𝖳 𝖭𝖠𝖬𝖤 :* ${botname}
*𝖭𝖠𝖬𝖤 𝖮𝖶𝖭𝖤𝖱 :* ${ownername}
*𝖫𝖨𝖡𝖱𝖠𝖱𝖸 :* @whiskeysockets/baileys
*𝖳𝖠𝖭𝖦𝖦𝖠𝖫:* ${tanggal2}
*𝖳𝖮𝖳𝖠𝖫 𝖥𝖨𝖳𝖴𝖱:* ${totalFitur()}
*𝖱𝖴𝖭𝖳𝖨𝖬𝖤 :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split("@")[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? "Premium" : "Free"}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 𝗣𝗔𝗡𝗘𝗟 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴀᴅᴅᴜsʀ
  › ${prefix}ᴀᴅᴅsʀᴠ
  › ${prefix}ʀᴀᴍʟɪsᴛ
  › ${prefix}ᴅᴇʟsʀᴠ
  › ${prefix}ᴅᴇʟᴜsʀ
  › ${prefix}ʟɪsᴛᴘᴀɴᴇʟ
  › ${prefix}ᴀᴅᴅᴘᴀɴᴇʟ
  › ${prefix}ʟɪsᴛᴀᴅᴍɪɴ
  › ${prefix}ᴀᴅᴅᴀᴅᴍɪɴ
  › ${prefix}ʟɪsᴛsʀᴠ
  › ${prefix}ʟɪsᴛᴜsʀ
  › ${prefix}ᴅᴇʟᴘᴀɴᴇʟ
  
    ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 ${ownername}
`;
          RezzHost.sendMessage(
            m.chat,
            {
              text: tekg,
              contextInfo: {
                isForwarded: true,
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                  newsletterName: foter2,
                  newsletterJid: idchannel,
                },
                externalAdReply: {
                  title: foter2,
                  body: foter1,
                  thumbnailUrl: thumbnail,
                  sourceUrl: "",
                  mediaType: 1,
                  renderLargerThumbnail: false,
                },
              },
            },
            { quoted: m },
          );
        }
        break;
      case "storemenu":
        {
          if (!isRegistered) return reply(mess.regis);
          var old = performance.now();
          var neww = performance.now();
          var speed = neww - old;
          let teks = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}
*𝖡𝖮𝖳 𝖭𝖠𝖬𝖤 :* ${botname}
*𝖭𝖠𝖬𝖤 𝖮𝖶𝖭𝖤𝖱 :* ${ownername}
*𝖫𝖨𝖡𝖱𝖠𝖱𝖸 :* @whiskeysockets/baileys
*𝖳𝖠𝖭𝖦𝖦𝖠𝖫:* ${tanggal2}
*𝖳𝖮𝖳𝖠𝖫 𝖥𝖨𝖳𝖴𝖱:* ${totalFitur()}
*𝖱𝖴𝖭𝖳𝖨𝖬𝖤 :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split("@")[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? "Premium" : "Free"}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 𝗦𝗧𝗢𝗥𝗘 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴅᴏɴᴇ
  › ${prefix}ʙᴀᴛᴀʟ
  › ${prefix}ᴛᴜɴᴅᴀ
  › ${prefix}ʀᴇǫᴘᴀɴᴇʟ
 › ${prefix}ᴘᴀʏᴍᴇɴᴛ
`;
          RezzHost.sendMessage(
            m.chat,
            {
              text: teks,
              contextInfo: {
                isForwarded: true,
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                  newsletterName: foter2,
                  newsletterJid: idchannel,
                },
                externalAdReply: {
                  title: foter2,
                  body: foter1,
                  thumbnailUrl: thumbnail,
                  sourceUrl: "",
                  mediaType: 1,
                  renderLargerThumbnail: false,
                },
              },
            },
            { quoted: m },
          );
        }
        break;
      case "domainmenu":
        {
          if (!isRegistered) return reply(mess.regis);
          var old = performance.now();
          var neww = performance.now();
          var speed = neww - old;
          let tekf = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}
*𝖡𝖮𝖳 𝖭𝖠𝖬𝖤 :* ${botname}
*𝖭𝖠𝖬𝖤 𝖮𝖶𝖭𝖤𝖱 :* ${ownername}
*𝖫𝖨𝖡𝖱𝖠𝖱𝖸 :* @whiskeysockets/baileys
*𝖳𝖠𝖭𝖦𝖦𝖠𝖫:* ${tanggal2}
*𝖳𝖮𝖳𝖠𝖫 𝖥𝖨𝖳𝖴𝖱:* ${totalFitur()}
*𝖱𝖴𝖭𝖳𝖨𝖬𝖤 :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split("@")[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? "Premium" : "Free"}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 𝗗𝗢𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴀᴅᴅɢᴄ
  › ${prefix}ᴅᴇʟɢᴄ
  › ${prefix}sᴜʙᴅᴏᴍᴀɪɴ

  ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 ${ownername} 
`;
          RezzHost.sendMessage(
            m.chat,
            {
              text: tekf,
              contextInfo: {
                isForwarded: true,
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                  newsletterName: foter2,
                  newsletterJid: idchannel,
                },
                externalAdReply: {
                  title: foter2,
                  body: foter1,
                  thumbnailUrl: thumbnail,
                  sourceUrl: "",
                  mediaType: 1,
                  renderLargerThumbnail: false,
                },
              },
            },
            { quoted: m },
          );
        }
        break;
      case "gamemenu":
        {
          if (!isRegistered) return reply(mess.regis);
          var old = performance.now();
          var neww = performance.now();
          var speed = neww - old;
          let tekf = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}
*𝖡𝖮𝖳 𝖭𝖠𝖬𝖤 :* ${botname}
*𝖭𝖠𝖬𝖤 𝖮𝖶𝖭𝖤𝖱 :* ${ownername}
*𝖫𝖨𝖡𝖱𝖠𝖱𝖸 :* @whiskeysockets/baileys
*𝖳𝖠𝖭𝖦𝖦𝖠𝖫:* ${tanggal2}
*𝖳𝖮𝖳𝖠𝖫 𝖥𝖨𝖳𝖴𝖱:* ${totalFitur()}
*𝖱𝖴𝖭𝖳𝖨𝖬𝖤 :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split("@")[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? "Premium" : "Free"}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 𝗚𝗔𝗠𝗘 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴛᴇʙᴀᴋʙᴏᴍʙ
  › ${prefix}ᴄᴀsɪɴᴏ
  › ${prefix}sʟᴏᴛ
  › ${prefix}ᴛɪᴄᴛᴀᴄᴛᴏᴇ
  › ${prefix}ᴅᴇʟᴛᴛᴛ
  › ${prefix}sᴜɪᴛ

  ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 ${ownername}
`;
          RezzHost.sendMessage(
            m.chat,
            {
              text: tekf,
              contextInfo: {
                isForwarded: true,
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                  newsletterName: foter2,
                  newsletterJid: idchannel,
                },
                externalAdReply: {
                  title: foter2,
                  body: foter1,
                  thumbnailUrl: thumbnail,
                  sourceUrl: "",
                  mediaType: 1,
                  renderLargerThumbnail: false,
                },
              },
            },
            { quoted: m },
          );
        }
        break;
      case "pushmenu":
        {
          if (!isRegistered) return reply(mess.regis);
          var old = performance.now();
          var neww = performance.now();
          var speed = neww - old;
          let teks = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}
*𝖡𝖮𝖳 𝖭𝖠𝖬𝖤 :* ${botname}
*𝖭𝖠𝖬𝖤 𝖮𝖶𝖭𝖤𝖱 :* ${ownername}
*𝖫𝖨𝖡𝖱𝖠𝖱𝖸 :* @whiskeysockets/baileys
*𝖳𝖠𝖭𝖦𝖦𝖠𝖫:* ${tanggal2}
*𝖳𝖮𝖳𝖠𝖫 𝖥𝖨𝖳𝖴𝖱:* ${totalFitur()}
*𝖱𝖴𝖭𝖳𝖨𝖬𝖤 :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split("@")[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? "Premium" : "Free"}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 𝗣𝗨𝗦𝗛 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ʙᴄɢᴄ
  › ${prefix}ᴊᴘᴍ
  › ${prefix}ᴊᴘᴍᴛᴇsᴛɪ
  › ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋ
  › ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋ1
  › ${prefix}ʟɪsᴛɢᴄ
  › ${prefix}sᴛᴀʀᴛᴊᴘᴍ
  › ${prefix}sᴇᴛᴛᴇᴋsᴊᴘᴍ

  ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 ${ownername}
`;
          RezzHost.sendMessage(
            m.chat,
            {
              text: teks,
              contextInfo: {
                isForwarded: true,
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                  newsletterName: foter2,
                  newsletterJid: idchannel,
                },
                externalAdReply: {
                  title: foter2,
                  body: foter1,
                  thumbnailUrl: thumbnail,
                  sourceUrl: "",
                  mediaType: 1,
                  renderLargerThumbnail: false,
                },
              },
            },
            { quoted: m },
          );
        }
        break;

      case "pinmenu":
        {
          await RezzHost.sendMessage(m.chat, {
            react: { text: "🕛", key: m.key },
          });
          await RezzHost.sendMessage(m.chat, {
            react: { text: "🕒", key: m.key },
          });
          await RezzHost.sendMessage(m.chat, {
            react: { text: "🕕", key: m.key },
          });
          await RezzHost.sendMessage(m.chat, {
            react: { text: "🕘", key: m.key },
          });
          await RezzHost.sendMessage(m.chat, {
            react: { text: "✅️", key: m.key },
          });
          wek = `| *𝖡𝖮𝖳 𝖭𝖠𝖬𝖤* : ${global.botname}
| *Owner Name* : ${global.ownername}
| *Run Time* : ${runtime(process.uptime())}
| *Libary* : @whiskeysockets/baileys
| *Bot Version* : V2.0.0
| *Database Users* : ${Object.keys(db.data.users).length} Users`;

          let sections = [
            {
              title: "𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨 𝗣𝗜𝗡𝗧𝗘𝗥𝗘𝗦𝗘𝗧",
              highlight_label: `𝖠𝖫𝖫 𝖬𝖤𝖭𝖴 𝖫𝖨𝖲𝖳 𝖡𝖸 ${ownername}`,
              rows: [
                {
                  title: ">!< 𝟭𝟬 𝗣𝗜𝗡 𝗔𝗡𝗜𝗠𝗘",
                  description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝟣𝟢 𝖦𝖺𝗆𝖻𝖺𝗋 𝖯𝗂𝗇`,
                  id: ".pin anime",
                },
                {
                  title: ">!< 𝟮𝟬 𝗣𝗜𝗡 𝗔𝗡𝗜𝗠𝗘",
                  description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝟤𝟢 𝖦𝖺𝗆𝖻𝖺𝗋 𝖯𝗂𝗇`,
                  id: ".pin20 anime",
                },
                {
                  title: ">!< 𝟯𝟬 𝗣𝗜𝗡 𝗔𝗡𝗜𝗠𝗘",
                  description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝟥𝟢 𝖦𝖺𝗆𝖻𝖺𝗋 𝖯𝗂𝗇`,
                  id: ".pin30 anime",
                },
                {
                  title: ">!< 𝟰𝟬 𝗣𝗜𝗡 𝗔𝗡𝗜𝗠𝗘",
                  description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝟦𝟢 𝖦𝖺𝗆𝖻𝖺𝗋 𝖯𝗂𝗇`,
                  id: ".pin40 anime",
                },
                {
                  title: ">!< 𝟱𝟬 𝗣𝗜𝗡 𝗔𝗡𝗜𝗠𝗘",
                  description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝟧𝟢 𝖦𝖺𝗆𝖻𝖺𝗋 𝖯𝗂𝗇`,
                  id: ".pin50 anime",
                },
                {
                  title: ">!< 𝟲𝟬 𝗣𝗜𝗡 𝗔𝗡𝗜𝗠𝗘",
                  description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝟨𝟢 𝖦𝖺𝗆𝖻𝖺𝗋 𝖯𝗂𝗇`,
                  id: ".pin60 anime",
                },
                {
                  title: ">!< 𝟳𝟬 𝗣𝗜𝗡 𝗔𝗡𝗜𝗠𝗘",
                  description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝟩𝟢 𝖦𝖺𝗆𝖻𝖺𝗋 𝖯𝗂𝗇`,
                  id: ".pin70 anime",
                },
                {
                  title: ">!< 𝟴𝟬 𝗣𝗜𝗡 𝗔𝗡𝗜𝗠𝗘",
                  description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝟪𝟢 𝖦𝖺𝗆𝖻𝖺𝗋 𝖯𝗂𝗇`,
                  id: ".pin80 anime",
                },
                {
                  title: ">!< 𝟵𝟬 𝗣𝗜𝗡 𝗔𝗡𝗜𝗠𝗘",
                  description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝟫𝟢 𝖦𝖺𝗆𝖻𝖺𝗋 𝖯𝗂𝗇`,
                  id: ".pin90 anime",
                },
                {
                  title: ">!< 𝟭𝟬𝟬 𝗣𝗜𝗡 𝗔𝗡𝗜𝗠𝗘",
                  description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝟣𝟢𝟢 𝖦𝖺𝗆𝖻𝖺𝗋 𝖯𝗂𝗇`,
                  id: ".pin100 anime",
                },
                {
                  title: ">!< 𝗥𝗘𝗤 𝗡𝗔𝗠𝗘 𝗣𝗜𝗡𝗧𝗘𝗥𝗘𝗦𝗧 𝗠𝗘𝗡𝗨",
                  description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖬𝖾𝗇𝗎 𝖯𝗂𝗇𝗍𝖾𝗋𝖾𝗌𝖾𝗍 `,
                  id: ".pinreqname",
                },
              ],
            },
          ];

          let listMessage = {
            title: "𝖯𝖨𝖭𝖳𝖤𝖱𝖤𝖲𝖤𝖳 𝖬𝖤𝖭𝖴",
            sections,
          };

          let msg = generateWAMessageFromContent(
            m.chat,
            {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                  },
                  interactiveMessage: proto.Message.InteractiveMessage.create({
                    contextInfo: {
                      mentionedJid: [m.sender],
                      isForwarded: true,
                      forwardedNewsletterMessageInfo: {
                        newsletterJid: idchannel,
                        newsletterName: author,
                        serverMessageId: -1,
                      },
                      businessMessageForwardInfo: {
                        businessOwnerJid: RezzHost.decodeJid(RezzHost.user.id),
                      },
                    },
                    body: proto.Message.InteractiveMessage.Body.create({
                      text: wek,
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                      text: Styles("simple whatsapp bot"),
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                      title: `👋 ʜɪ ᴋᴀᴋ${m.sender.split("@")[0]}\n`,
                      subtitle: author,
                      hasMediaAttachment: true,
                      ...(await prepareWAMessageMedia(
                        { image: { url: `${thumbnail}` } },
                        { upload: RezzHost.waUploadToServer },
                      )),
                    }),
                    nativeFlowMessage:
                      proto.Message.InteractiveMessage.NativeFlowMessage.create(
                        {
                          buttons: [
                            {
                              name: "single_select",
                              buttonParamsJson: JSON.stringify(listMessage),
                            },
                            {
                              name: "cta_url",
                              buttonParamsJson: `{"display_text":"𝖢𝖱𝖤𝖠𝖳𝖮𝖱","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`,
                            },
                          ],
                        },
                      ),
                  }),
                },
              },
            },
            {},
          );

          await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
          });
        }
        break;

      case "pinreqname":
        {
          if (!isRegistered) return reply(mess.regis);
          var old = performance.now();
          var neww = performance.now();
          var speed = neww - old;
          let tekf = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}
*𝖡𝖮𝖳 𝖭𝖠𝖬𝖤 :* ${botname}
*𝖭𝖠𝖬𝖤 𝖮𝖶𝖭𝖤𝖱 :* ${ownername}
*𝖫𝖨𝖡𝖱𝖠𝖱𝖸 :* @whiskeysockets/baileys
*𝖳𝖠𝖭𝖦𝖦𝖠𝖫:* ${tanggal2}
*𝖳𝖮𝖳𝖠𝖫 𝖥𝖨𝖳𝖴𝖱:* ${totalFitur()}
*𝖱𝖴𝖭𝖳𝖨𝖬𝖤 :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split("@")[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? "Premium" : "Free"}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 𝗣𝗜𝗡𝗧𝗘𝗥𝗘𝗦𝗧 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴘɪɴ (ɴᴀᴍᴇ) 
  › ${prefix}ᴘɪɴ20 (ɴᴀᴍᴇ) 
  › ${prefix}ᴘɪɴ30 (ɴᴀᴍᴇ) 
  › ${prefix}ᴘɪɴ40 (ɴᴀᴍᴇ) 
  › ${prefix}ᴘɪɴ50 (ɴᴀᴍᴇ) 
  › ${prefix}ᴘɪɴ60(ɴᴀᴍᴇ) 
  › ${prefix}ᴘɪɴ70 (ɴᴀᴍᴇ) 
  › ${prefix}ᴘɪɴ80 (ɴᴀᴍᴇ) 
  › ${prefix}ᴘɪɴ𝟫0 (ɴᴀᴍᴇ) 
  › ${prefix}ᴘɪɴ𝟣𝟢0 (ɴᴀᴍᴇ) 

  ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 ${ownername}
`;
          RezzHost.sendMessage(
            m.chat,
            {
              text: tekf,
              contextInfo: {
                isForwarded: true,
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                  newsletterName: foter2,
                  newsletterJid: idchannel,
                },
                externalAdReply: {
                  title: foter2,
                  body: foter1,
                  thumbnailUrl: thumbnail,
                  sourceUrl: "",
                  mediaType: 1,
                  renderLargerThumbnail: false,
                },
              },
            },
            { quoted: m },
          );
        }
        break;
      // batas menu

      //OWNER MENU
      case "backupsc":
        {
          if (!isCreator) return reply(mess.owner);
          reply(mess.wait);
          const { execSync } = require("child_process");
          const ls = (await execSync("ls"))
            .toString()
            .split("\n")
            .filter(
              (pe) =>
                pe != "node_modules" &&
                pe != "session" &&
                pe != ".npm" &&
                pe != "",
            );
          const exec = await execSync(`zip -r New.zip ${ls.join(" ")}`);
          await RezzHost.sendMessage(
            m?.chat,
            {
              document: await fs.readFileSync("./New.zip"),
              mimetype: "application/zip",
              fileName: `${botname}.zip`,
            },
            { quoted: kalgans },
          );
          await execSync("rm -rf New.zip");
        }
        break;

      case "addgc":
        if (!m.isGroup) return reply(`Khusus Grup`);
        if (!isCreator) return reply(`khusus Creator`);
        ntilink.push(m.chat);
        fs.writeFileSync("./database/idgroup.json", JSON.stringify(ntilink));
        reply(`${command} sukses`);
        break;

      case "delgc":
        if (!isCreator) return reply(`khusus Creator`);
        if (!m.isGroup) return reply(`Khusus Grup`);
        var ini = ntilink.indexOf(m.chat);
        ntilink.splice(ini, 1);
        fs.writeFileSync("./database/idgruop.json", JSON.stringify(ntilink));
        reply(`${command} sukses`);
        break;

      case "hidetag":
        {
          if (!isCreator) return reply(mess.owner);
          if (!m.isGroup) return reply(mess.group);
          RezzHost.sendMessage(
            from,
            { text: q ? q : "", mentions: participants.map((a) => a.id) },
            { quoted: kalgans },
          );
        }
        break;

      case "disk":
        {
          exec("cd && du -h --max-depth=1", (err, stdout) => {
            if (err) return m?.reply(`${err}`);
            if (stdout) return m?.reply(stdout);
          });
        }
        break;

      case "addlimit":
        {
          if (!isCreator) return reply(mess.owner);
          let user = args[0] + "@s.whatsapp.net";
          if (args[0] && args[1]) {
            if (isNaN(args[0])) return reply(example("nomor 100"));
            if (!Object.keys(db.data.users).includes(user))
              return reply("Nomor target tidak terdaftar di database bot!");
            if (isNaN(args[1])) return reply(example("nomornya 100"));
            db.data.users[`${user}`].limit += Number(args[1]);
            RezzHost.sendMessage(m.chat, {
              text: `Berhasil menambah *${args[1]}* limit ke ${user.split("@")[0]}`,
            });
          } else return reply(example("nomornya 100"));
        }
        break;

      case "backupdb":
      case "backupdatabase":
        {
          if (!isCreator) return reply(mess.owner);
          RezzHost.sendMessage(
            m.chat,
            {
              document: await fs.readFileSync("./database/database.json"),
              fileName: "database.json",
              mimetype: "application/json",
            },
            { quoted: kalgans },
          );
        }
        break;

      case "sdomain":
      case "sendomain":
        {
          if (!isCreator) return reply(`Ngapain ? Khusus ᴡᴀʏꜱɢᴀɴᴢ ʜᴏꜱᴛ Aja !!`);
          if (!text)
            return reply(
              `Example : ${prefix + command} 6285xxxxx,harga,domain`,
            );
          reply("Pesanan Telah Sukses Dikirim");
          var mon = args.join(" ");
          var m1 = mon.split(",")[0];
          var m2 = mon.split(",")[1];
          var m3 = mon.split(",")[2];
          let mq1 = m1 + "@s.whatsapp.net";
          let ownernya = owner + "@s.whatsapp.net";
          let me = m.sender;
          let ments = [mq1, ownernya, me];
          RezzHost.sendMessage(
            mq1,
            {
              text: `*───❖》${ownername}《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m2}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal}*\n*Jam : ${time}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Domain : ${m3}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*_Note : Tutup ( Sensor ) Domain Anda
 Dan Jangan Sampai Orang Lain Melihat 
 Atau Tidak Nanti Domain Anda Bakal Kena Ddos Attack_*\n\n\n\n*© ᴡᴀʏꜱɢᴀɴᴢ ʜᴏꜱᴛ*`,
            },
            m,
          );
        }
        break;

      case "spanel":
      case "sendpanel":
        {
          if (!isCreator) return reply(`NGAPAIN ANJG`);
          if (!text)
            return reply(
              `Example : ${prefix + command} 6285xxxxx,harga,linklog`,
            );
          reply("Pesanan Telah Sukses Dikirim");
          var mon = args.join(" ");
          var m1 = mon.split(",")[0];
          var m2 = mon.split(",")[1];
          var m3 = mon.split(",")[2];
          let mq1 = m1 + "@s.whatsapp.net";
          let ownernya = owner + "@s.whatsapp.net";
          let me = m.sender;
          let ments = [mq1, ownernya, me];
          RezzHost.sendMessage(
            mq1,
            {
              text: `*───❖》${ownername}《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m2}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal2}*\n*Jam : ${time}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Username : admin*\n*[+] Password : admin*\n*[+] Login : ${m3}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*_Note : Jangan Lupa Ganti Password Agar Terhindar Dari Pencurian Akun Panel_*\n`,
            },
            m,
          );
        }
        break;

      case "addpremium":
      case "addprem":
        {
          if (!isCreator) return reply(mess.owner);
          let b = text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          if (args[0] == "a") {
            if (b in db.data.users) {
              if (db.data.users[b].premium == true)
                return reply(`User ${args[0]} sudah menjadi *User Premium!*`);
              db.data.users[b].limit += 10000;
              db.data.users[b].balance += 10000000000;
              db.data.users[b].premium = true;
              reply(`Berhasil update user ${args[1]} ke *User Premium*`);
            } else
              return reply(`User ${args[1]} tidak terdaftar di database bot`);
          } else if (args[0] == "b") {
            if (b in db.data.users) {
              if (db.data.users[b].premium == true)
                return reply(`User ${args[0]} sudah menjadi *User Premium!*`);
              db.data.users[b].limit += 20000;
              db.data.users[b].balance += 30000000000;
              db.data.users[b].premium = true;
              reply(`Berhasil update user ${args[1]} ke *User Premium*`);
            } else
              return reply(`User ${args[1]} tidak terdaftar di database bot`);
          } else if (args[0] == "c") {
            if (b in db.data.users) {
              if (db.data.users[b].premium == true)
                return reply(`User ${args[0]} sudah menjadi *User Premium!*`);
              db.data.users[b].limit += 30000;
              db.data.users[b].balance += 50000000000;
              db.data.users[b].premium = true;
              reply(`Berhasil update user ${args[1]} ke *User Premium*`);
            } else
              return reply(`User ${args[1]} tidak terdaftar di database bot`);
          } else return reply("nomornya");
        }
        break;

      case "delpremium":
      case "delprem":
        {
          if (!isCreator) return reply(mess.owner);
          if (!text) return reply("nomornya");
          let user = text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          if (db.data.users[user].premium == false)
            return reply(`User ${args[0]} bukan *User Premium!*`);
          if (user in db.data.users) {
            db.data.users[user].premium = false;
            reply("Berhasil menghapus *User Premium*");
          } else
            return reply(`User ${args[0]} tidak terdaftar di database bot`);
        }
        break;

      case "welcome":
        {
          if (!m.isGroup) return m.reply("Buat Di Group Bodoh");
          if (args.length < 1)
            return m.reply(
              "ketik on untuk mengaktifkan\nketik off untuk menonaktifkan",
            );
          if (args[0] === "on") {
            if (welcm) return m.reply("Sudah Aktif");
            wlcm.push(from);
            var groupe = await RezzHost.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            RezzHost.sendMessage(
              from,
              {
                text: `Fitur Welcome Di Aktifkan Di Group Ini`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m },
            );
          } else if (args[0] === "off") {
            if (!welcm) return m.reply("Sudah Non Aktif");
            let off = wlcm.indexOf(from);
            wlcm.splice(off, 1);
            m.reply("Sukses Mematikan Welcome  di group ini");
          }
        }
        break;

      //=================================================//
      case "listprem":
        if (isBan) return m.reply("*Lu Di Ban Owner*");
        teksooo = "*List Premium*\n\n";
        for (let i of owner) {
          teksooo += `- ${i}\n`;
        }
        teksooo += `\n*Total : ${owner.length}*`;
        RezzHost.sendMessage(
          from,
          { text: teksooo.trim() },
          "extendedTextMessage",
          { quoted: m, contextInfo: { mentionedJid: owner } },
        );
        break;

      case "listregis":
        {
          if (!isCreator) return reply(mess.owner);
          let anu = require("./database/registered");
          let teks = `乂 *L I S T - R E G I S T E R E D*\n`;
          teks += `*Total Register* : ${anu.lenght}\n\n`;
          anu
            .map((v, i) => {
              teks += `• ${i + 1} •\n`;
              teks += `*Id* : ${v.id}\n`;
              teks += `*Name* : ${v.name}\n`;
              teks += `*Age* : ${v.age}\n`;
              teks += `*Ns* : ${v.time}\n\n───────────────\n\n`;
            })
            .join("\n\n");
          teks += `${foter2}`;
          reply(teks);
        }
        break;

      case "addbalance":
        {
          if (!isCreator) return reply(mess.owner);
          let user = args[0] + "@s.whatsapp.net";
          if (args[0] && args[1]) {
            if (isNaN(args[0])) return reply("𝖢𝖮𝖭𝖳𝖮𝖧 : 628568773831 100");
            if (!Object.keys(db.data.users).includes(user))
              return reply("Nomor target tidak terdaftar di database bot!");
            if (isNaN(args[1])) return reply("𝖢𝖮𝖭𝖳𝖮𝖧 : 628568773831 100");
            db.data.users[`${user}`].balance += Number(args[1]);
            RezzHost.sendMessage(m.chat, {
              text: `Berhasil menambah *${args[1]}* balance ke ${user.split("@")[0]}`,
            });
          } else return reply("𝖢𝖮𝖭𝖳𝖮𝖧 : 628568773831 100");
        }
        break;

      case "addlimit":
        {
          if (!isCreator) return reply(mess.owner);
          let user = args[0] + "@s.whatsapp.net";
          if (args[0] && args[1]) {
            if (isNaN(args[0])) return reply("𝖢𝖮𝖭𝖳𝖮𝖧 : ${owner} 100");
            if (!Object.keys(db.data.users).includes(user))
              return reply("Nomor target tidak terdaftar di database bot!");
            if (isNaN(args[1])) return reply("nomornya 100");
            db.data.users[`${user}`].limit += Number(args[1]);
            RezzHost.sendMessage(m.chat, {
              text: `Berhasil menambah *${args[1]}* balance ke ${user.split("@")[0]}`,
            });
          } else return reply("𝖢𝖮𝖭𝖳𝖮𝖧 : ${owner} 100");
        }
        break;

      case "sendpayment":
      case "kirimpay":
      case "sendpay":
      case "kirimpayment":
        {
          if (!isCreator) return reply(mess.owner);
          if (!q) return reply("Masukan Nomor");
          let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;
          let teksnya = `
${tesksendpay}`;
          let msgii = generateWAMessageFromContent(
            targetNumber,
            {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                  },
                  interactiveMessage: proto.Message.InteractiveMessage.create({
                    contextInfo: {
                      mentionedJid: [targetNumber],
                    },
                    body: proto.Message.InteractiveMessage.Body.create({
                      text: teksnya,
                    }),
                    nativeFlowMessage:
                      proto.Message.InteractiveMessage.NativeFlowMessage.create(
                        {
                          buttons: [
                            {
                              name: "quick_reply",
                              buttonParamsJson:
                                '{"display_text":"𝖣𝖠𝖭𝖠 𝖯𝖠𝖸𝖬𝖤𝖭𝖳","title":"Dana","id":".danapay"}',
                            },
                            {
                              name: "quick_reply",
                              buttonParamsJson:
                                '{"display_text":"𝖮𝖵𝖮 𝖯𝖠𝖸𝖬𝖤𝖭𝖳","title":"Ovo","id":".ovopay"}',
                            },
                            {
                              name: "quick_reply",
                              buttonParamsJson:
                                '{"display_text":"𝖦𝖮𝖯𝖠𝖸 𝖯𝖠𝖸𝖬𝖤𝖭𝖳","title":"Gopay","id":".gopaypay"}',
                            },
                            {
                              name: "quick_reply",
                              buttonParamsJson:
                                '{"display_text":"𝖰𝖱𝖨𝖲𝖲","title":"QRIS","id":".qrispay"}',
                            },
                          ],
                        },
                      ),
                  }),
                },
              },
            },
            { userJid: m.sender, quoted: kalgans },
          );
          await RezzHost.relayMessage(msgii.key.remoteJid, msgii.message, {
            messageId: msgii.key.id,
          });
        }
        break;
      case "danapay":
        {
          if (global.dana == false) return reply("Payment Dana Tidak Tersedia");
          let teks = `
*Nomor Dana :*
${global.dana}

${tesksesudahsendpay}
`;
          RezzHost.sendText(m.chat, teks, kalgans);
        }
        break;
      case "ovopay":
        {
          if (!isCreator) return reply(mess.owner);
          if (global.ovo == false) return reply("Payment Ovo Tidak Tersedia");
          let teks = `
*Nomor Ovo :*
${global.ovo}

${tesksesudahsendpay}
`;
          RezzHost.sendText(m.chat, teks, kalgans);
        }
        break;
      case "gopaypay":
        {
          if (global.gopay == false)
            return reply("Payment Gopay Tidak Tersedia");
          let teks = `
*Nomor Gopay :*
${global.gopay}

${tesksesudahsendpay}
`;
          RezzHost.sendText(m.chat, teks, kalgans);
        }
        break;
      case "qrispay":
        {
          if (global.qris == false) return reply("Payment Qris Tidak Tersedia");
          let teks = `
${sendpayteskqris}

${tesksesudahsendpay}
`;
          RezzHost.sendMessage(
            m.chat,
            { image: { url: global.qris }, caption: teks },
            { quoted: kalgans },
          );
        }
        break;

      case "listclaimprem":
        {
          if (!isCreator) return reply(mess.owner);
          if (db.data.settings.claimprem.length < 1)
            return reply("Tidak ada code claim prem");
          var teks = `*乂 LIST CODE CLAIM PREM*\n\nTotal : *${db.data.settings.claimprem.length}*\n\n`;
          db.data.settings.claimprem.forEach((e) => {
            teks += ` ◦ ${e}\n`;
          });
          reply(teks);
        }
        break;

      case "openai":
        if (!isCreator) return m.reply("*khusus Premium*");
        try {
          if (global.keyopenai === "")
            return reply(
              "Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file config.js\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys",
            );
          if (!text)
            return reply(`Chat dengan AI.\n\nContoh:\n$.openai Apa itu coding`);
          const configuration = new Configuration({
            apiKey: global.keyopenai,
          });
          const openai = new OpenAIApi(configuration);
          const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            temperature: 0, // Nilai yang lebih tinggi berarti model akan mengambil lebih banyak risiko.
            max_tokens: 2048, // Jumlah maksimum token yang dihasilkan dalam penyelesaian. Sebagian besar model memiliki panjang konteks 2048 token (kecuali untuk model terbaru, yang mendukung 4096).
            top_p: 1, // alternatif untuk pengambilan sampel dengan suhu, disebut pengambilan sampel nukleus
            frequency_penalty: 0.3, // Angka antara -2.0 dan 2.0. Nilai positif menghukum token baru berdasarkan frekuensi yang ada dalam teks sejauh ini, mengurangi kemungkinan model untuk mengulang baris yang sama kata demi kata.
            presence_penalty: 0, // Angka antara -2.0 dan 2.0. Nilai positif menghukum token baru berdasarkan apakah mereka muncul dalam teks sejauh ini, meningkatkan kemungkinan model untuk membicarakan topik baru.
          });
          reply(`${response.data.choices[0].text}`);
        } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
          } else {
            console.log(error);
            reply("Maaf, sepertinya ada yang error :" + error.message);
          }
        }
        break;

      case "setnamagc":
      case "namegc":
        {
          if (!isGroup) return reply(mess.group);
          if (!isBotAdmins) return reply(mess.botadmin);
          if (!isAdmins && !isCreator) return reply(mess.admin);
          if (!text) return reply(example("teksnya"));
          RezzHost.groupUpdateSubject(m.chat, text);
          reply(mess.done);
        }
        break;

      case "del":
        {
          if (!isCreator)
            return reply("Maaf, command ini hanya untuk pemilik.");
          if (!m.quoted) return false;
          let { chat, fromMe, id, isBaileys } = m.quoted;
          RezzHost.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.quoted.id,
              participant: m.quoted.sender,
            },
          });
        }
        break;

      case "listhadiah":
        {
          if (!isCreator) return reply(mess.owner);
          if (db.data.settings.hadiah.length < 1)
            return reply("Tidak ada code hadiah");
          var teks = `*乂 LIST CODE HADIAH*\n\nTotal : *${db.data.settings.hadiah.length}*\n\n`;
          db.data.settings.hadiah.forEach((e) => {
            teks += ` ◦ ${e}\n`;
          });
          reply(teks);
        }
        break;

      case "listprem":
      case "listpremium":
        {
          if (!isCreator) return reply(mess.owner);
          let user = Object.keys(db.data.users);
          let ar = [];
          let urut = 1;
          var teks = "\n*乂 LIST USER PREMIUM*\n\n";
          user.forEach((e) => {
            if (db.data.users[e].premium == true) {
              let no = urut++;
              teks += `${no}. @${e.split("@")[0]}\n`;
              ar.push(e);
            }
          });
          if (ar.length < 1) {
            reply("Tidak Ada User Premium");
          } else {
            RezzHost.sendMessage(
              m?.chat,
              { text: teks, contextInfo: { mentionedJid: [...ar] } },
              { quoted: kalgans },
            );
          }
        }
        break;

      case "public":
        {
          if (!isCreator) return reply(mess.owner);
          RezzHost.public = true;
          reply(mess.done);
        }
        break;

      case "self":
        {
          if (!isCreator) return reply(mess.owner);
          RezzHost.public = false;
          reply(mess.done);
        }
        break;

      case "buatclaimprem":
        {
          if (!isCreator) return reply(mess.owner);
          if (isNaN(args[0])) return reply("Jumlah Kode claim prem");
          for (let i = 0; i < Number(args[0]); i++) {
            db.data.settings.claimprem.push(
              crypto.randomBytes(4).toString("hex"),
            );
          }
          let teks = "\n";
          db.data.settings.claimprem.forEach((e) => {
            teks += `◦ ${e}\n`;
          });
          reply(teks);
        }
        break;

      case "buathadiah":
        {
          if (!isCreator) return reply(mess.owner);
          if (isNaN(args[0])) return reply("Jumlah Kode Hadiah");
          for (let i = 0; i < Number(args[0]); i++) {
            db.data.settings.hadiah.push(crypto.randomBytes(4).toString("hex"));
          }
          let teks = "\n";
          db.data.settings.hadiah.forEach((e) => {
            teks += `◦ ${e}\n`;
          });
          reply(teks);
        }
        break;

      case "getcase":
        {
          const getCase = (cases) => {
            return (
              "case " +
              `'${cases}'` +
              fs
                .readFileSync("./RainMc.js")
                .toString()
                .split("case '" + cases + "'")[1]
                .split("break")[0] +
              "break"
            );
          };
          try {
            if (!isCreator) return reply("ngapain");
            if (!q) return reply(`contoh : ${prefix + command} antilink`);
            let nana = await getCase(q);
            reply(nana);
          } catch (err) {
            console.log(err);
            reply(`Case ${q} tidak di temukan`);
          }
        }
        break;

      case "addcase":
        {
          if (!isCreator) return reply("lu sapa asu");
          if (!text) return reply("Mana case nya");
          const fs = require("fs");
          const namaFile = "RainMc.js";
          const caseBaru = `${text}`;
          fs.readFile(namaFile, "utf8", (err, data) => {
            if (err) {
              console.error("Terjadi kesalahan saat membaca file:", err);
              return;
            }
            const posisiAwalGimage = data.indexOf("case 'addcase':");

            if (posisiAwalGimage !== -1) {
              const kodeBaruLengkap =
                data.slice(0, posisiAwalGimage) +
                "\n" +
                caseBaru +
                "\n" +
                data.slice(posisiAwalGimage);
              fs.writeFile(namaFile, kodeBaruLengkap, "utf8", (err) => {
                if (err) {
                  reply("Terjadi kesalahan saat menulis file:", err);
                } else {
                  reply("Case baru berhasil ditambahkan.");
                }
              });
            } else {
              reply("Tidak dapat menambahkan case dalam file.");
            }
          });
        }
        break;

      case "setppbotpanjang":
      case "setpppanjang":
        {
          if (!isCreator) return m.reply(mess.owner);
          if (/image/g.test(mime)) {
            var medis = await RezzHost.downloadAndSaveMediaMessage(
              qmsg,
              "ppbot.jpeg",
              false,
            );
            var { img } = await generateProfilePicture(medis);
            await RezzHost.query({
              tag: "iq",
              attrs: {
                to: botNumber,
                type: "set",
                xmlns: "w:profile:picture",
              },
              content: [
                {
                  tag: "picture",
                  attrs: { type: "image" },
                  content: img,
                },
              ],
            });
            await fs.unlinkSync(medis);
            m.reply("Berhasil Mengganti Foto Profil Bot ✅");
          } else return m.reply("dengan mengirim foto");
        }
        break;

      case "setbotname":
        {
          if (!isCreator) return reply(`Khusus Owner`);
          if (!text)
            return reply(
              `Dimana Namanya Tuan?\nExample: ${prefix + command} IZANAMI - MD`,
            );
          await furina.updateProfileName(text);
          reply(`Berhasil Mengubah Nama Bot Tuan✅`);
        }
        break;

      case "setppbot":
        {
          if (!isCreator) return reply(mess.owner);
          if (!quoted)
            return reply(
              `Kirim/Reply Image Dengan Caption ${prefix + command}`,
            );
          if (!/image/.test(mime))
            return reply(
              `Kirim/Reply Image Dengan Caption ${prefix + command}`,
            );
          if (/webp/.test(mime))
            return reply(
              `Kirim/Reply Image Dengan Caption ${prefix + command}`,
            );
          var medis = await RezzHost.downloadAndSaveMediaMessage(
            quoted,
            "ppbot.jpeg",
          );
          if (args[0] == `/full`) {
            var { img } = await generateProfilePicture(medis);
            await RezzHost.query({
              tag: "iq",
              attrs: {
                to: botNumber,
                type: "set",
                xmlns: "w:profile:picture",
              },
              content: [
                {
                  tag: "picture",
                  attrs: { type: "image" },
                  content: img,
                },
              ],
            });
            fs.unlinkSync(medis);
            reply(mess.done);
          } else {
            var memeg = await RezzHost.updateProfilePicture(botNumber, {
              url: medis,
            });
            fs.unlinkSync(medis);
            reply(mess.done);
          }
        }
        break;

      case "getbio":
        {
          if (!isCreator) return reply(mess.owner);
          try {
            let who;
            if (m.isGroup)
              who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
            else who = m.quoted.sender ? m.quoted.sender : m.sender;
            let bio = await RezzHost.fetchStatus(who);
            lreply(bio.status);
          } catch {
            if (text)
              return reply(
                `bio is private or you haven't replied to the person's message!`,
              );
            else
              try {
                let whoto = m.quoted ? m.quoted.sender : m.sender;
                let bio = await RezzHost.fetchStatus(who);
                reply(bio.status);
              } catch {
                return reply(
                  `bio is private or you haven't replied to the person's message!`,
                );
              }
          }
        }
        break;

      case "delppbot":
        {
          if (!isCreator) return reply(mess.owner);
          await RezzHost.removeProfilePicture(RezzHost.user.id);
          reply(mess.done);
        }
        break;

      case "getname":
        {
          if (!isCreator) return reply(mess.owner);
          if (qtod === "true") {
            namenye = await RezzHost.getName(m.quoted.sender);
            reply(namenye);
          } else if (qtod === "false") {
            RezzHost.sendMessage(
              from,
              { text: "Reply orangnya" },
              { quoted: kalgans },
            );
          }
        }
        break;

      case "restart":
        if (!isCreator) return reply("wuuu");
        reply(`_Restarting . . ._`);
        await sleep(3000);
        process.exit();
        break;

      case "welcome":
        {
          if (!isRegistered)
            return reply(
              `Kamu belum daftar!\nSilahkan daftar dengan cara *${prefix}daftar nama|umur!*`,
            );
          if (!isCreator)
            return m.reply("Ngapain ? Fitur Ini Khusus Tuan Saya😜");
          if (!m.isGroup) return m.reply("Buat Di Group Bodoh");
          if (args.length < 1)
            return m.reply(
              "ketik on untuk mengaktifkan\nketik off untuk menonaktifkan",
            );
          if (args[0] === "on") {
            if (welcm) return m.reply("Sudah Aktif");
            wlcm.push(from);
            var groupe = await RezzHost.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            RezzHost.sendMessage(
              from,
              {
                text: `Fitur Welcome Di Aktifkan Di Group Ini`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m },
            );
          } else if (args[0] === "off") {
            if (!welcm) return m.reply("Sudah Non Aktif");
            let off = wlcm.indexOf(from);
            wlcm.splice(off, 1);
            m.reply("Sukses Mematikan Welcome  di group ini");
          }
        }
        break;

      case "jpm":
        {
          if (!isCreator) return reply(mess.owner);
          if (!text)
            return reply(
              `Text mana?\n\nExample : ${prefix + command} ${botname}`,
            );
          let getGroups = await author.groupFetchAllParticipating();
          let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
          let anu = groups.map((v) => v.id);
          reply(
            `Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`,
          );
          for (let i of anu) {
            await sleep(1500);
            let msg = generateWAMessageFromContent(
              m.chat,
              {
                viewOnceMessage: {
                  message: {
                    messageContextInfo: {
                      deviceListMetadata: {},
                      deviceListMetadataVersion: 2,
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create(
                      {
                        contextInfo: {
                          mentionedJid: [m.sender],
                          isForwarded: true,
                          forwardedNewsletterMessageInfo: {
                            newsletterJid: `${idchannel}`,
                            newsletterName: `${foter1}`,
                            serverMessageId: -1,
                          },
                          businessMessageForwardInfo: {
                            businessOwnerJid: RezzHost.decodeJid(
                              RezzHost.user.id,
                            ),
                          },
                        },
                        body: proto.Message.InteractiveMessage.Body.create({
                          text: text,
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                          text: "",
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                          title: "",
                          subtitle: `${ownername}`,
                          hasMediaAttachment: false,
                        }),
                        nativeFlowMessage:
                          proto.Message.InteractiveMessage.NativeFlowMessage.create(
                            {
                              buttons: [
                                {
                                  name: "cta_url",
                                  buttonParamsJson: `{"display_text":"👤 𝗖𝗛𝗔𝗧 𝗢𝗪𝗡𝗘𝗥","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`,
                                },
                                {
                                  name: "cta_url",
                                  buttonParamsJson: `{"display_text":"💸 𝗧𝗘𝗦𝗧𝗜𝗠𝗢𝗡𝗜","url":"${grouptesti}","merchant_url":"https://www.google.com"}`,
                                },
                                {
                                  name: "cta_url",
                                  buttonParamsJson: `{"display_text":"👥️️ 𝗖𝗥𝗘𝗔𝗧𝗢𝗥","url":"https://wa.me/${creator}","merchant_url":"https://www.google.com"}`,
                                },
                                {
                                  name: "cta_url",
                                  buttonParamsJson: `{"display_text":" 𝗖𝗛𝗔𝗧 𝗕𝗢𝗧","url":"https://wa.me/${nobot}","merchant_url":"https://www.google.com"}`,
                                },
                              ],
                            },
                          ),
                      },
                    ),
                  },
                },
              },
              {},
            );

            await RezzHost.relayMessage(i, msg.message, {
              messageId: msg.key.id,
            });
          }
          reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`);
        }
        break;

      case "jpmtesti":
      case "bcgroup":
      case "bcgc":
        {
          if (!isCreator) return reply(mess.owner);
          if (!text)
            return reply(
              `*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix + command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`,
            );
          await reply(mess.wait);
          let getGroups = await RezzHost.groupFetchAllParticipating();
          let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
          let anu = groups.map((v) => v.id);
          for (let xnxx of anu) {
            let metadat72 = await RezzHost.groupMetadata(xnxx);
            let participanh = await metadat72.participants;
            if (/image/.test(mime)) {
              media = await RezzHost.downloadAndSaveMediaMessage(quoted);
              mem = await uptotelegra(media);
              await RezzHost.sendMessage(xnxx, {
                image: { url: mem },
                caption: text.split("|")[0],
              });
              await sleep(text.split("|")[1]);
            } else {
              await RezzHost.sendMessage(xnxx, { text: text.split("|")[0] });
              await sleep(text.split("|")[1]);
            }
          }
          reply(mess.done);
        }
        break;

      case "bcgc":
      case "bcgroup":
        {
          if (!isCreator) return reply(mess.owner);
          if (!text)
            return reply(
              `Text mana?\n\nExample : ${prefix + command} fatih-san`,
            );
          let getGroups = await RezzHost.groupFetchAllParticipating();
          let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
          let anu = groups.map((v) => v.id);
          reply(
            `Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`,
          );
          for (let i of anu) {
            await sleep(1500);
            RezzHost.sendMessage(i, { text: `${text}` }, { quoted: kalgans });
          }
          reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`);
        }
        break;
      //BATAS OWNER MENU

      //MAIN MENU
      case "afk":
        {
          let user = global.db.data.users[m.sender];
          user.afkTime = +new Date();
          user.afkReason = text;
          reply(`💤 *${m.pushName}* Telah Afk${text ? ": " + text : ""}`);
        }
        break;

      case "premium":
      case "buyprem":
        {
          reply(`\n*💸 LIST HARGA USER PREMIUM*

*乂 PAKET A*
*Harga Rp5.000*
◦ Gratis Balance $10.000.000.000
◦ Gratis Limit 10.000
◦ Akses fitur premium
◦ Akses fitur claim limit & balance harian

*乂 PAKET B*
*Harga Rp10.000*
◦ Gratis Balance $30.000.000.000
◦ Gratis Limit 20.000
◦ Akses fitur premium
◦ Akses fitur claim limit & balance harian

*乂 PAKET C*
*Harga Rp15.000*
◦ Gratis Balance $50.000.000.000
◦ Gratis Limit 30.000
◦ Akses fitur premium
◦ Akses fitur claim limit & balance harian


Hubungi owner bot untuk membeli paket *User Premium* dengan cara ketik .owner\n`);
        }
        break;

      case "redeemcode":
        {
          if (!args[0]) return reply("Codenya");
          if (args[0] !== args[0].toLowerCase())
            return reply("*Code Redeem* wajib huruf kecil semua!");
          if (db.data.settings.hadiahkadaluwarsa.includes(args[0]))
            return reply("*Code* tersebut sudah digunakan!");
          if (!db.data.settings.hadiah.includes(args[0]))
            return reply("*Code* tidak valid!");
          db.data.settings.hadiahkadaluwarsa.push(args[0]);
          var code = db.data.settings.hadiah.indexOf(args[0]);
          db.data.settings.hadiah.splice(code, 1);
          let h1 = randomNumber(20000, 30000);
          let h2 = randomNumber(10, 20);
          db.data.users[m.sender].balance += h1;
          db.data.users[m.sender].limit += h2;
          var teks = `Selamat kepada @${m.sender.split("@")[0]} 🎉

kamu mendapatkan *Balance  $${toRupiah(h1)}* dan *${h2} Limit* dari *Code Redeem "${args[0]}"*`;
          await reply(
            `Berhasil mengambil hadiah *$${toRupiah(h1)} Balance* dan *${h2} Limit* dari *Code Redeem ${args[0]}*`,
          ).then(() => {
            RezzHost.sendMessage(
              m.chat,
              {
                text: teks,
                contextInfo: {
                  mentionedJid: [m.sender],
                  externalAdReply: {
                    thumbnailUrl: thumbnail,
                    title: "© Message System Notifikasi",
                    body: null,
                    sourceUrl: linkgc,
                    renderLargerThumbnail: true,
                    mediaType: 1,
                  },
                },
              },
              { quoted: kalgans },
            );
          });
        }
        break;

      case "topglobal":
        {
          reply(mess.wait);
          let ubalance = Object.entries(global.db.data.users).map(
            ([key, value]) => {
              return { ...value, jid: key };
            },
          );
          let sortedbalance = ubalance
            .map(toNumber("balance"))
            .sort(sort("balance"));
          let usersbalance = sortedbalance.map(enumGetKey);
          reply(`\n*🏆 LIST TOP GLOBAL BALANCE*\n\nKamu Top *${usersbalance.indexOf(m?.sender) + 1}* Balance dari *${usersbalance.length}* Users

${sortedbalance
  .slice(0, 10)
  .map(
    ({ jid, balance }, i) =>
      `${i + 1}. *Nama :* @${db.data.users[jid].name}\n*Nomor :* ${jid.split("@")[0]}\n*Balance :* $${toRupiah(balance)}\n`,
  )
  .join("\n")}\n`);
        }
        break;

      case "readvo":
      case "readviewonce":
        {
          if (!m.quoted)
            return reply("reply gambar/video yang ingin Anda lihat");
          if (m.quoted.mtype !== "viewOnceMessageV2")
            return reply("Ini bukan pesan view-once.");
          let msg = m.quoted.message;
          let type = Object.keys(msg)[0];
          const {
            downloadContentFromMessage,
          } = require("@whiskeysockets/baileys");
          let media = await downloadContentFromMessage(
            msg[type],
            type == "imageMessage" ? "image" : "video",
          );
          let buffer = Buffer.from([]);
          for await (const chunk of media) {
            buffer = Buffer.concat([buffer, chunk]);
          }
          if (/video/.test(type)) {
            return RezzHost.sendFile(
              m.chat,
              buffer,
              "media.mp4",
              msg[type].caption || "",
              m,
            );
          } else if (/image/.test(type)) {
            return RezzHost.sendFile(
              m.chat,
              buffer,
              "media.jpg",
              msg[type].caption || "",
              m,
            );
          }
        }
        break;

      case "buylimit":
      case "belilimit":
        {
          if (!args[0])
            return reply("100\n\nHarga 1 *limit* = $1000 *balance*");
          if (isNaN(args[0])) return reply("20");
          if (args[0].includes(".")) return reply("20");
          let harga = 1000;
          let total = Number(parseInt(args[0]) * harga);
          if (balancenya < total)
            return reply(
              `*Balance* kamu tidak cukup untuk membeli ${args[0]} *Limit!*\n\nDapatkan *Balance* dengan cara memainkan game`,
            );
          db.data.users[m?.sender].limit += Number(args[0]);
          db.data.users[m?.sender].balance -= total;
          reply(
            `Berhasil membeli *${args[0]}* limit, dengan *$${toRupiah(total)}* balance`,
          );
        }
        break;

      case "pushkontak":
        {
          if (!isCreator) return m.reply(mess.owner);
          if (!m.isGroup) return m.reply(mess.group);
          if (!text) return m.reply("pesannya");
          var teks = text;
          const halls = await groupMetadata.participants
            .filter((v) => v.id.endsWith(".net"))
            .map((v) => v.id);
          m.reply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup`);
          for (let mem of halls) {
            if (mem !== m.sender) {
              contacts.push(mem);
              await fs.writeFileSync(
                "./database/contacts.json",
                JSON.stringify(contacts),
              );
              await RezzHost.sendMessage(
                mem,
                { text: teks },
                { quoted: kalgans },
              );
              await sleep(global.delaypushkontak);
            }
          }
          try {
            const uniqueContacts = [...new Set(contacts)];
            const vcardContent = uniqueContacts
              .map((contact, index) => {
                const vcard = [
                  "BEGIN:VCARD",
                  "VERSION:3.0",
                  `FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
                  `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
                  "END:VCARD",
                  "",
                ].join("\n");
                return vcard;
              })
              .join("");
            fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
          } catch (err) {
            m.reply(err.toString());
          } finally {
            if (m.chat !== m.sender)
              await m.reply(
                `Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`,
              );
            await RezzHost.sendMessage(
              m.sender,
              {
                document: fs.readFileSync("./database/contacts.vcf"),
                fileName: "contacts.vcf",
                caption: "File Contact Berhasil Di Buat✅",
                mimetype: "text/vcard",
              },
              { quoted: m },
            );
            contacts.splice(0, contacts.length);
            await fs.writeFileSync(
              "./database/contacts.json",
              JSON.stringify(contacts),
            );
            await fs.writeFileSync("./database/contacts.vcf", "");
          }
        }
        break;

      case "pushkontak1":
        {
          if (!isCreator) return m.reply(mess.owner);
          if (!text)
            return m.reply(
              "idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup",
            );
          if (!text.split("|"))
            return m.reply(
              example(
                "idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup",
              ),
            );
          var [idnya, teks] = text.split("|");
          var groupMetadataa;
          try {
            groupMetadataa = await RezzHost.groupMetadata(`${idnya}`);
          } catch (e) {
            return m.reply("*ID Grup* tidak valid!");
          }
          const participants = await groupMetadataa.participants;
          const halls = await participants
            .filter((v) => v.id.endsWith(".net"))
            .map((v) => v.id);
          m.reply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup`);
          for (let mem of halls) {
            if (mem !== m.sender) {
              contacts.push(mem);
              await fs.writeFileSync(
                "./database/contacts.json",
                JSON.stringify(contacts),
              );
              await RezzHost.sendMessage(
                mem,
                { text: teks },
                { quoted: kalgans },
              );
              await sleep(global.delaypushkontak);
            }
          }
          try {
            const uniqueContacts = [...new Set(contacts)];
            const vcardContent = uniqueContacts
              .map((contact, index) => {
                const vcard = [
                  "BEGIN:VCARD",
                  "VERSION:3.0",
                  `FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
                  `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
                  "END:VCARD",
                  "",
                ].join("\n");
                return vcard;
              })
              .join("");
            fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
          } catch (err) {
            m.reply(err.toString());
          } finally {
            if (m.chat !== m.sender)
              await m.reply(
                `Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`,
              );
            await RezzHost.sendMessage(
              m.sender,
              {
                document: fs.readFileSync("./database/contacts.vcf"),
                fileName: "contacts.vcf",
                caption: "File Contact Berhasil Di Buat✅",
                mimetype: "text/vcard",
              },
              { quoted: m },
            );
            contacts.splice(0, contacts.length);
            await fs.writeFileSync(
              "./database/contacts.json",
              JSON.stringify(contacts),
            );
            await fs.writeFileSync("./database/contacts.vcf", "");
          }
        }
        break;

      case "listgc":
      case "cekid":
      case "listgrup":
        {
          let gcall = Object.values(
            await RezzHost.groupFetchAllParticipating().catch((_) => null),
          );
          let listgc = `*｢ LIST ALL CHAT GRUP ｣*\n\n`;
          await gcall.forEach((u, i) => {
            listgc += `*• Nama :* ${u.subject}\n*• ID :* ${u.id}\n*• Total Member :* ${u.participants.length} Member\n*• Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n*• Pembuat :* ${u.owner ? u.owner.split("@")[0] : "Sudah keluar"}\n\n`;
          });
          m.reply(listgc);
        }
        break;

      case "startjpm":
        {
          if (!isCreator) return m.reply(mess.owner);
          var teksnya = await fs
            .readFileSync("./database/teksjpm.js")
            .toString();
          if (teksnya.length < 1)
            return m.reply(
              "Teks Jpm Tidak Ditemukan, Silahlan Isi/Edit Teks Jpm Didalam Folder database",
            );
          var teks = `${teksnya}`;
          let total = 0;
          let getGroups = await RezzHost.groupFetchAllParticipating();
          let usergc = await Object.keys(getGroups);
          m.reply(`Memproses Mengirim Pesan *Text* Ke *${usergc.length}* Grup`);
          for (let jid of usergc) {
            try {
              await RezzHost.sendMessage(
                jid,
                { text: teks },
                { quoted: kalgans },
              );
              total += 1;
            } catch {}
            await sleep(4000);
          }
          m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`);
        }
        break;

      case "setteksjpm":
        {
          if (!isCreator) return m.reply(mess.owner);
          if (text || m.quoted) {
            const newteks = m.quoted ? m.quoted.text : text;
            await fs.writeFileSync("./database/teksjpm.js", newteks.toString());
            m.reply("Berhasil Mengganti Teks JPM ✅");
          } else {
            return m.reply(
              "dengan reply/kirim teks\n\nUntuk melihat teks jpm saat ini ketik *.teksjpm*",
            );
          }
        }
        break;

      case "teksjpm":
        {
          if (!isCreator) return m.reply(mess.owner);
          m.reply(fs.readFileSync("./database/teksjpm.js").toString());
        }
        break;

      case "claim":
        {
          if (!isPremium) return reply(mess.premium);
          if (db.data.users[m.sender].claim == 0)
            return reply(
              "Kamu sudah *Claim* hadiah hari ini, hadiah *Claim* akan direset saat jam 12 malam!",
            );
          const hadiah = randomNumber(50000, 70000);
          const hadiah2 = randomNumber(100, 200);
          db.data.users[m.sender].balance += hadiah;
          db.data.users[m.sender].limit += hadiah2;
          db.data.users[m.sender].claim = 0;
          reply(
            `Berhasil *Claim* hadiah harian\n\n+ $${toRupiah(hadiah)} *Balance*\n+ ${hadiah2} *Limit*`,
          );
        }
        break;

      case "claimprem":
        {
          if (!args[0]) return reply("Codenya");
          if (args[0] !== args[0].toLowerCase())
            return reply("*Code Claim Prem* wajib huruf kecil semua!");
          if (db.data.settings.claimpremkadaluwarsa.includes(args[0]))
            return reply("*Code* tersebut sudah digunakan!");
          if (!db.data.settings.claimprem.includes(args[0]))
            return reply("*Code* tidak valid!");
          db.data.settings.claimpremkadaluwarsa.push(args[0]);
          var code = db.data.settings.claimprem.indexOf(args[0]);
          db.data.settings.claimprem.splice(code, 1);
          let h1 = randomNumber(20000, 30000);
          let h2 = randomNumber(10, 20);
          let h3 = randomNumber(10, 20);
          db.data.users[m?.sender].balance += h1;
          db.data.users[m?.sender].limit += h2;
          db.data.users[m?.sender].glimit += h3;
          db.data.users[m?.sender].premium = true;
          var teks = `Selamat kepada @${m?.sender.split("@")[0]} 🎉

kamu mendapatkan *Balance  $${toRupiah(h1)}* dan *${h2} Limit* dan *${h3} Limit Game* dari *Code Redeem "${args[0]}"*`;
          await reply(
            `Berhasil mengambil claim prem *$${toRupiah(h1)} Balance* dan *${h2} Limit* dan *${h3} Limit Game* dari *Code Redeem ${args[0]}*`,
          ).then(() => {
            RezzHost.sendMessage(
              m?.chat,
              {
                text: teks,
                contextInfo: {
                  mentionedJid: [m?.sender],
                  externalAdReply: {
                    thumbnailUrl: ppuser,
                    title: "© Message System Notifikasi",
                    body: null,
                    sourceUrl: linkchannel,
                    renderLargerThumbnail: true,
                    mediaType: 1,
                  },
                },
              },
              { quoted: kalgans },
            );
          });
        }
        break;

      case "tqto":
        {
          let cu = `Hallo Sis, here are the names who have been registered in creating/helping in the development of this script

*BIG TAHNKS TO*

> WaysDev (Developer)

d above is developer ${botname}
`;
          let cp = cu;
          RezzHost.sendMessage(m?.chat, {
            text: cp,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: `© 2024 | ${botname}`,
                body: "",
                sourceUrl: hariini,
                mediaType: 1,
                renderLargerThumbnail: true,
              },
            },
          });
        }
        break;

      case "listcase":
        {
          let { listCase } = require("./lib/scrapelistCase.js");
          reply(listCase());
        }
        break;

      case "ceklimit":
      case "limit":
      case "me":
      case "balance":
      case "cekbalance":
      case "my":
        {
          if (m.quoted) {
            try {
              ppuser = await RezzHost.profilePictureUrl(pengirim, "image");
            } catch (err) {
              ppuser = "https://telegra.ph/file/490ab1eea92232fc06e68.jpg";
            }
            let teksnya = `
  ◦ Name : *${pushname}*
  ◦ Number : *@${m.sender.split("@")[0]}*
  ◦ Limit : *${limitnya}*
  ◦ Balance : *$${toRupiah(balancenya)}*`;
            RezzHost.sendMessage(
              m.chat,
              {
                text: teksnya,
                contextInfo: {
                  externalAdReply: {
                    thumbnailUrl: thumbnail,
                    title: "©User Info Message",
                    renderLargerThumbnail: true,
                    sourceUrl: `https://wa.me/${m.sender.split("@")[0]}`,
                    mediaType: 1,
                  },
                },
              },
              { quoted: kalgans },
            );
          } else {
            let teksnya = `
  ◦ Name : *${pushname}*
  ◦ Number : *@${m.sender.split("@")[0]}*
  ◦ Limit : *${limitnya}*
  ◦ Balance : *$${toRupiah(balancenya)}*`;
            RezzHost.sendMessage(
              m.chat,
              {
                text: teksnya,
                contextInfo: {
                  externalAdReply: {
                    thumbnailUrl: thumbnail,
                    title: "©User Info Message",
                    renderLargerThumbnail: true,
                    sourceUrl: `https://wa.me/${m.sender.split("@")[0]}`,
                    mediaType: 1,
                  },
                },
              },
              { quoted: kalgans },
            );
          }
        }
        break;

      case "qc":
        {
          if (limitnya < 1) return reply(mess.limit);
          if (!q) return reply(`📌Example: ${prefix + command} hallo`);
          let obj = {
            type: "quote",
            format: "png",
            backgroundColor: "#ffffff",
            width: 512,
            height: 768,
            scale: 2,
            messages: [
              {
                entities: [],
                avatar: true,
                from: {
                  id: 1,
                  name: pushname,
                  photo: {
                    url: await RezzHost.profilePictureUrl(
                      m.sender,
                      "image",
                    ).catch(
                      () =>
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60",
                    ),
                  },
                },
                text: `${q}`,
                replyMessage: {},
              },
            ],
          };
          let response = await axios.post(
            "https://bot.lyo.su/quote/generate",
            obj,
            {
              headers: {
                "Content-Type": "application/json",
              },
            },
          );
          let buffer = Buffer.from(response.data.result.image, "base64");
          RezzHost.sendImageAsSticker(m.chat, buffer, kalgans, {
            packname: `${global.packname}`,
            author: `${global.author}`,
          });
          uselimit();
        }
        break;

      case "qc2":
        {
          if (!q)
            return reply(
              `📌Example: ${prefix + command} pink hallo\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`,
            );
          if (text.length > 100) return reply(`Max 100 character.`);
          let [color, ...message] = text.split(" ");
          message = message.join(" ");
          let backgroundColor;
          switch (color) {
            case "pink":
              backgroundColor = "#f68ac9";
              break;
            case "blue":
              backgroundColor = "#6cace4";
              break;
            case "red":
              backgroundColor = "#f44336";
              break;
            case "green":
              backgroundColor = "#4caf50";
              break;
            case "yellow":
              backgroundColor = "#ffeb3b";
              break;
            case "purple":
              backgroundColor = "#9c27b0";
              break;
            case "darkblue":
              backgroundColor = "#0d47a1";
              break;
            case "lightblue":
              backgroundColor = "#03a9f4";
              break;
            case "ash":
              backgroundColor = "#9e9e9e";
              break;
            case "orange":
              backgroundColor = "#ff9800";
              break;
            case "black":
              backgroundColor = "#000000";
              break;
            case "white":
              backgroundColor = "#ffffff";
              break;
            case "teal":
              backgroundColor = "#008080";
              break;
            case "lightpink":
              backgroundColor = "#FFC0CB";
              break;
            case "chocolate":
              backgroundColor = "#A52A2A";
            case "salmon":
              backgroundColor = "#FFA07A";
              break;
            case "magenta":
              backgroundColor = "#FF00FF";
              break;
            case "tan":
              backgroundColor = "#D2B48C";
              break;
            case "wheat":
              backgroundColor = "#F5DEB3";
              break;
            case "deeppink":
              backgroundColor = "#FF1493";
              break;
            case "fire":
              backgroundColor = "#B22222";
              break;
            case "skyblue":
              backgroundColor = "#00BFFF";
              break;
            case "orange":
              backgroundColor = "#FF7F50";
              break;
            case "brightskyblue":
              backgroundColor = "#1E90FF";
              break;
            case "hotpink":
              backgroundColor = "#FF69B4";
              break;
            case "lightskyblue":
              backgroundColor = "#87CEEB";
              break;
            case "seagreen":
              backgroundColor = "#20B2AA";
              break;
            case "darkred":
              backgroundColor = "#8B0000";
              break;
            case "orangered":
              backgroundColor = "#FF4500";
              break;
            case "cyan":
              backgroundColor = "#48D1CC";
              break;
            case "violet":
              backgroundColor = "#BA55D3";
              break;
            case "mossgreen":
              backgroundColor = "#00FF7F";
              break;
            case "darkgreen":
              backgroundColor = "#008000";
              break;
            case "navyblue":
              backgroundColor = "#191970";
              break;
            case "darkorange":
              backgroundColor = "#FF8C00";
              break;
            case "darkpurple":
              backgroundColor = "#9400D3";
              break;
            case "fuchsia":
              backgroundColor = "#FF00FF";
              break;
            case "darkmagenta":
              backgroundColor = "#8B008B";
              break;
            case "darkgray":
              backgroundColor = "#2F4F4F";
              break;
            case "peachpuff":
              backgroundColor = "#FFDAB9";
              break;
            case "darkishgreen":
              backgroundColor = "#BDB76B";
              break;
            case "darkishred":
              backgroundColor = "#DC143C";
              break;
            case "goldenrod":
              backgroundColor = "#DAA520";
              break;
            case "darkishgray":
              backgroundColor = "#696969";
              break;
            case "darkishpurple":
              backgroundColor = "#483D8B";
              break;
            case "gold":
              backgroundColor = "#FFD700";
              break;
            case "silver":
              backgroundColor = "#C0C0C0";
              break;
            default:
              return reply("The selected color is not available.");
          }
          let obj = {
            type: "quote",
            format: "png",
            backgroundColor,
            width: 512,
            height: 768,
            scale: 2,
            messages: [
              {
                entities: [],
                avatar: true,
                from: {
                  id: 1,
                  name: pushname,
                  photo: {
                    url: await RezzHost.profilePictureUrl(
                      m.sender,
                      "image",
                    ).catch(
                      () =>
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60",
                    ),
                  },
                },
                text: message,
                replyMessage: {},
              },
            ],
          };
          let response = await axios.post(
            "https://bot.lyo.su/quote/generate",
            obj,
            {
              headers: {
                "Content-Type": "application/json",
              },
            },
          );
          let buffer = Buffer.from(response.data.result.image, "base64");
          RezzHost.sendImageAsSticker(m.chat, buffer, kalgans, {
            packname: `${global.packname}`,
            author: `${global.author}`,
          });
        }
        break;

      case "sticker":
      case "s":
      case "stickergif":
      case "sgif":
        {
          if (limitnya < 1) return reply(mess.limit);
          if (!quoted)
            throw `Balas Video/Image Dengan Caption ${prefix + command}`;
          if (/image/.test(mime)) {
            let media = await quoted.download();
            let encmedia = await RezzHost.sendImageAsStickerAV(
              from,
              media,
              kalgans,
              { packname: global.packname, author: global.author },
            );
            await fs.unlinkSync(encmedia);
          } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 11)
              return reply("Maksimal 10 detik!");
            let media = await quoted.download();
            let encmedia = await RezzHost.sendVideoAsSticker(
              from,
              media,
              fcall,
              { packname: global.packname, author: global.author },
            );
            await fs.unlinkSync(encmedia);
          } else {
            throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`;
          }
          uselimit();
        }
        break;

      case "tiktoksearch":
      case "ttsearch":
        {
          if (limitnya < 1) return reply(mess.limit);
          if (!text)
            return reply(
              `Gunakan dengan cara ${prefix + command} *query*\n\n_Contoh_\n\n${prefix + command} jj epep`,
            );
          let anu = await mann.search.tiktoks(text);
          const capt = anu.title;
          const author = anu.author;

          let msg = generateWAMessageFromContent(
            m.chat,
            {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                  },
                  interactiveMessage: proto.Message.InteractiveMessage.create({
                    contextInfo: {
                      mentionedJid: [m.sender],
                      isForwarded: true,
                      forwardedNewsletterMessageInfo: {
                        newsletterJid: `${idchannel}`,
                        newsletterName: `${botname}`,
                        serverMessageId: -1,
                      },
                      businessMessageForwardInfo: {
                        businessOwnerJid: RezzHost.decodeJid(RezzHost.user.id),
                      },
                    },
                    body: proto.Message.InteractiveMessage.Body.create({
                      text: `*Author* : ${author}\n*Caption* : ${capt}`,
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                      text: `Simpel WhatsApp Bot`,
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                      title: `Tik Tok - Search`,
                      subtitle: `${ownername}`,
                      hasMediaAttachment: true,
                      ...(await prepareWAMessageMedia(
                        { video: { url: anu.no_watermark } },
                        { upload: RezzHost.waUploadToServer },
                      )),
                    }),
                    nativeFlowMessage:
                      proto.Message.InteractiveMessage.NativeFlowMessage.create(
                        {
                          buttons: [
                            {
                              name: "quick_reply",
                              buttonParamsJson: `{\"display_text\":\"Next\",\"id\":\".tiktoksearch ${text}\"}`,
                            },
                          ],
                        },
                      ),
                  }),
                },
              },
            },
            {},
          );

          await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
          });
          uselimit();
        }
        break;

      case "toimage":
      case "toimg":
        {
          if (limitnya < 1) return reply(mess.limit);
          if (!quoted) throw "Reply Image";
          if (!/webp/.test(mime))
            throw `Balas sticker dengan caption *${prefix + command}*`;
          let media = await RezzHost.downloadAndSaveMediaMessage(quoted);
          let ran = await getRandom(".png");
          exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media);
            if (err) throw err;
            let buffer = fs.readFileSync(ran);
            RezzHost.sendMessage(from, { image: buffer }, { quoted: kalgans });
            fs.unlinkSync(ran);
          });
          uselimit();
        }
        break;

      case "remini":
        {
          if (!quoted) return reply(`Where is the picture?`);
          if (!/image/.test(mime))
            return reply(`Send/Reply Photos With Captions ${prefix + command}`);
          const { remini } = require("./lib/remini");
          let media = await quoted.download();
          let proses = await remini(media, "enhance");
          RezzHost.sendMessage(
            m.chat,
            { image: proses, caption: mess.success },
            { quoted: kalgans },
          );
        }
        break;

      case "jarak":
        {
          if (limitnya < 1) return reply(mess.limit);
          var [me, to] = text.split`|`;
          if (!(from && to))
            return reply(`example ${prefix + command} Yogyakarta|Jakarta`);
          reply(mess.search);
          var data = await jarakkota(me, to);
          if (data.img)
            return RezzHost.sendMessage(
              m.chat,
              { image: data.img, caption: data.desc },
              { quoted: kalgans },
            );
          uselimit();
        }
        break;

      case "pin":
      case "pinterest":
        {
          if (limitnya < 1) return reply(mess.limit);
          if (!text) return reply(`*Example*: ${prefix + command} ${botname}`);
          await RezzHost.sendMessage(m.chat, {
            react: { text: "🔎", key: m.key },
          });
          async function createImage(url) {
            const { imageMessage } = await generateWAMessageContent(
              {
                image: {
                  url,
                },
              },
              {
                upload: RezzHost.waUploadToServer,
              },
            );
            return imageMessage;
          }

          function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
            }
          }

          let push = [];
          let { data } = await axios.get(
            `https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`,
          );
          let res = data.resource_response.data.results.map(
            (v) => v.images.orig.url,
          );

          shuffleArray(res);
          let ult = res.splice(0, 10);
          let i = 1;

          for (let lucuy of ult) {
            push.push({
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `• VPS\n• PANEL PETRODACTYL\n• SECRIP BOT WHATSAPP\n• DAN MASIH BANYAK LAGI`,
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: ownername,
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: `WAYSGANZ STOREID MENYEDIAKAN :`,
                hasMediaAttachment: true,
                imageMessage: await createImage(lucuy),
              }),
              nativeFlowMessage:
                proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"MY OWNER","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`,
                    },
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"GROUP OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`,
                    },
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"SOURCE","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`,
                    },
                  ],
                }),
            });
          }

          const bot = generateWAMessageFromContent(
            m.chat,
            {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                  },
                  interactiveMessage:
                    proto.Message.InteractiveMessage.fromObject({
                      body: proto.Message.InteractiveMessage.Body.create({
                        text: mess.done,
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "HASIL PENCARIAN",
                      }),
                      header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: false,
                      }),
                      carouselMessage:
                        proto.Message.InteractiveMessage.CarouselMessage.fromObject(
                          {
                            cards: [...push],
                          },
                        ),
                    }),
                },
              },
            },
            {},
          );

          await RezzHost.relayMessage(m.chat, bot.message, {
            messageId: bot.key.id,
          });
        }
        break;

      case "pin20":
      case "pinterest20":
        {
          if (limitnya < 1) return reply(mess.limit);
          if (!text) return reply(`*Example*: ${prefix + command} ${botname}`);
          await RezzHost.sendMessage(m.chat, {
            react: { text: "🔎", key: m.key },
          });
          async function createImage(url) {
            const { imageMessage } = await generateWAMessageContent(
              {
                image: {
                  url,
                },
              },
              {
                upload: RezzHost.waUploadToServer,
              },
            );
            return imageMessage;
          }

          function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
            }
          }

          let push = [];
          let { data } = await axios.get(
            `https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`,
          );
          let res = data.resource_response.data.results.map(
            (v) => v.images.orig.url,
          );

          shuffleArray(res);
          let ult = res.splice(0, 20);
          let i = 1;

          for (let lucuy of ult) {
            push.push({
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `• VPS\n• PANEL PETRODACTYL\n• SECRIP BOT WHATSAPP\n• DAN MASIH BANYAK LAGI`,
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: ownername,
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: `WAYSGANZSTOREID MENYEDIAKAN :`,
                hasMediaAttachment: true,
                imageMessage: await createImage(lucuy),
              }),
              nativeFlowMessage:
                proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"MY OWNER","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`,
                    },
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"GROUP OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`,
                    },
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"SOURCE","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`,
                    },
                  ],
                }),
            });
          }

          const bot = generateWAMessageFromContent(
            m.chat,
            {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                  },
                  interactiveMessage:
                    proto.Message.InteractiveMessage.fromObject({
                      body: proto.Message.InteractiveMessage.Body.create({
                        text: mess.done,
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "HASIL PENCARIAN",
                      }),
                      header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: false,
                      }),
                      carouselMessage:
                        proto.Message.InteractiveMessage.CarouselMessage.fromObject(
                          {
                            cards: [...push],
                          },
                        ),
                    }),
                },
              },
            },
            {},
          );

          await RezzHost.relayMessage(m.chat, bot.message, {
            messageId: bot.key.id,
          });
        }
        break;

      case "pin30":
      case "pinterest30":
        {
          if (limitnya < 1) return reply(mess.limit);
          if (!text) return reply(`*Example*: ${prefix + command} ${botname}`);
          await RezzHost.sendMessage(m.chat, {
            react: { text: "🔎", key: m.key },
          });
          async function createImage(url) {
            const { imageMessage } = await generateWAMessageContent(
              {
                image: {
                  url,
                },
              },
              {
                upload: RezzHost.waUploadToServer,
              },
            );
            return imageMessage;
          }

          function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
            }
          }

          let push = [];
          let { data } = await axios.get(
            `https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`,
          );
          let res = data.resource_response.data.results.map(
            (v) => v.images.orig.url,
          );

          shuffleArray(res);
          let ult = res.splice(0, 30);
          let i = 1;

          for (let lucuy of ult) {
            push.push({
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `• VPS\n• PANEL PETRODACTYL\n• SECRIP BOT WHATSAPP\n• DAN MASIH BANYAK LAGI`,
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: ownername,
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: `WAYSGANZSTOREID MENYEDIAKAN :`,
                hasMediaAttachment: true,
                imageMessage: await createImage(lucuy),
              }),
              nativeFlowMessage:
                proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"MY OWNER","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`,
                    },
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"GROUP OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`,
                    },
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"SOURCE","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`,
                    },
                  ],
                }),
            });
          }

          const bot = generateWAMessageFromContent(
            m.chat,
            {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                  },
                  interactiveMessage:
                    proto.Message.InteractiveMessage.fromObject({
                      body: proto.Message.InteractiveMessage.Body.create({
                        text: mess.done,
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "HASIL PENCARIAN",
                      }),
                      header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: false,
                      }),
                      carouselMessage:
                        proto.Message.InteractiveMessage.CarouselMessage.fromObject(
                          {
                            cards: [...push],
                          },
                        ),
                    }),
                },
              },
            },
            {},
          );

          await RezzHost.relayMessage(m.chat, bot.message, {
            messageId: bot.key.id,
          });
        }
        break;

      case "pin40":
      case "pinterest40":
        {
          if (limitnya < 1) return reply(mess.limit);
          if (!text) return reply(`*Example*: ${prefix + command} ${botname}`);
          await RezzHost.sendMessage(m.chat, {
            react: { text: "🔎", key: m.key },
          });
          async function createImage(url) {
            const { imageMessage } = await generateWAMessageContent(
              {
                image: {
                  url,
                },
              },
              {
                upload: RezzHost.waUploadToServer,
              },
            );
            return imageMessage;
          }

          function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
            }
          }

          let push = [];
          let { data } = await axios.get(
            `https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`,
          );
          let res = data.resource_response.data.results.map(
            (v) => v.images.orig.url,
          );

          shuffleArray(res);
          let ult = res.splice(0, 40);
          let i = 1;

          for (let lucuy of ult) {
            push.push({
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `• VPS\n• PANEL PETRODACTYL\n• SECRIP BOT WHATSAPP\n• DAN MASIH BANYAK LAGI`,
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: ownername,
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: `WAYSGANZSTOREID MENYEDIAKAN :`,
                hasMediaAttachment: true,
                imageMessage: await createImage(lucuy),
              }),
              nativeFlowMessage:
                proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"MY OWNER","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`,
                    },
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"GROUP OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`,
                    },
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"SOURCE","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`,
                    },
                  ],
                }),
            });
          }

          const bot = generateWAMessageFromContent(
            m.chat,
            {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                  },
                  interactiveMessage:
                    proto.Message.InteractiveMessage.fromObject({
                      body: proto.Message.InteractiveMessage.Body.create({
                        text: mess.done,
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "HASIL PENCARIAN",
                      }),
                      header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: false,
                      }),
                      carouselMessage:
                        proto.Message.InteractiveMessage.CarouselMessage.fromObject(
                          {
                            cards: [...push],
                          },
                        ),
                    }),
                },
              },
            },
            {},
          );

          await RezzHost.relayMessage(m.chat, bot.message, {
            messageId: bot.key.id,
          });
        }
        break;

      case "pin50":
      case "pinterest50":
        {
          if (limitnya < 1) return reply(mess.limit);
          if (!text) return reply(`*Example*: ${prefix + command} ${botname}`);
          await RezzHost.sendMessage(m.chat, {
            react: { text: "🔎", key: m.key },
          });
          async function createImage(url) {
            const { imageMessage } = await generateWAMessageContent(
              {
                image: {
                  url,
                },
              },
              {
                upload: RezzHost.waUploadToServer,
              },
            );
            return imageMessage;
          }

          function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
            }
          }

          let push = [];
          let { data } = await axios.get(
            `https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`,
          );
          let res = data.resource_response.data.results.map(
            (v) => v.images.orig.url,
          );

          shuffleArray(res);
          let ult = res.splice(0, 50);
          let i = 1;

          for (let lucuy of ult) {
            push.push({
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `• VPS\n• PANEL PETRODACTYL\n• SECRIP BOT WHATSAPP\n• DAN MASIH BANYAK LAGI`,
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: ownername,
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: `WAYSGANZSTOREID MENYEDIAKAN :`,
                hasMediaAttachment: true,
                imageMessage: await createImage(lucuy),
              }),
              nativeFlowMessage:
                proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"MY OWNER","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`,
                    },
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"GROUP OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`,
                    },
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"SOURCE","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`,
                    },
                  ],
                }),
            });
          }

          const bot = generateWAMessageFromContent(
            m.chat,
            {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                  },
                  interactiveMessage:
                    proto.Message.InteractiveMessage.fromObject({
                      body: proto.Message.InteractiveMessage.Body.create({
                        text: mess.done,
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "HASIL PENCARIAN",
                      }),
                      header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: false,
                      }),
                      carouselMessage:
                        proto.Message.InteractiveMessage.CarouselMessage.fromObject(
                          {
                            cards: [...push],
                          },
                        ),
                    }),
                },
              },
            },
            {},
          );

          await RezzHost.relayMessage(m.chat, bot.message, {
            messageId: bot.key.id,
          });
        }
        break;

      case "pin60":
      case "pinterest60":
        {
          if (limitnya < 1) return reply(mess.limit);
          if (!text) return reply(`*Example*: ${prefix + command} ${botname}`);
          await RezzHost.sendMessage(m.chat, {
            react: { text: "🔎", key: m.key },
          });
          async function createImage(url) {
            const { imageMessage } = await generateWAMessageContent(
              {
                image: {
                  url,
                },
              },
              {
                upload: RezzHost.waUploadToServer,
              },
            );
            return imageMessage;
          }

          function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
            }
          }

          let push = [];
          let { data } = await axios.get(
            `https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`,
          );
          let res = data.resource_response.data.results.map(
            (v) => v.images.orig.url,
          );

          shuffleArray(res);
          let ult = res.splice(0, 60);
          let i = 1;

          for (let lucuy of ult) {
            push.push({
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `• VPS\n• PANEL PETRODACTYL\n• SECRIP BOT WHATSAPP\n• DAN MASIH BANYAK LAGI`,
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: ownername,
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: `WAYSGANZSTOREID MENYEDIAKAN :`,
                hasMediaAttachment: true,
                imageMessage: await createImage(lucuy),
              }),
              nativeFlowMessage:
                proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"MY OWNER","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`,
                    },
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"GROUP OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`,
                    },
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"SOURCE","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`,
                    },
                  ],
                }),
            });
          }

          const bot = generateWAMessageFromContent(
            m.chat,
            {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                  },
                  interactiveMessage:
                    proto.Message.InteractiveMessage.fromObject({
                      body: proto.Message.InteractiveMessage.Body.create({
                        text: mess.done,
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "HASIL PENCARIAN",
                      }),
                      header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: false,
                      }),
                      carouselMessage:
                        proto.Message.InteractiveMessage.CarouselMessage.fromObject(
                          {
                            cards: [...push],
                          },
                        ),
                    }),
                },
              },
            },
            {},
          );

          await RezzHost.relayMessage(m.chat, bot.message, {
            messageId: bot.key.id,
          });
        }
        break;

      case "pin70":
      case "pinterest70":
        {
          if (limitnya < 1) return reply(mess.limit);
          if (!text) return reply(`*Example*: ${prefix + command} ${botname}`);
          await RezzHost.sendMessage(m.chat, {
            react: { text: "🔎", key: m.key },
          });
          async function createImage(url) {
            const { imageMessage } = await generateWAMessageContent(
              {
                image: {
                  url,
                },
              },
              {
                upload: RezzHost.waUploadToServer,
              },
            );
            return imageMessage;
          }

          function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
            }
          }

          let push = [];
          let { data } = await axios.get(
            `https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`,
          );
          let res = data.resource_response.data.results.map(
            (v) => v.images.orig.url,
          );

          shuffleArray(res);
          let ult = res.splice(0, 70);
          let i = 1;

          for (let lucuy of ult) {
            push.push({
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `• VPS\n• PANEL PETRODACTYL\n• SECRIP BOT WHATSAPP\n• DAN MASIH BANYAK LAGI`,
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: ownername,
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: `WAYSGANZSTOREID MENYEDIAKAN :`,
                hasMediaAttachment: true,
                imageMessage: await createImage(lucuy),
              }),
              nativeFlowMessage:
                proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"MY OWNER","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`,
                    },
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"GROUP OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`,
                    },
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"SOURCE","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`,
                    },
                  ],
                }),
            });
          }

          const bot = generateWAMessageFromContent(
            m.chat,
            {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                  },
                  interactiveMessage:
                    proto.Message.InteractiveMessage.fromObject({
                      body: proto.Message.InteractiveMessage.Body.create({
                        text: mess.done,
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "HASIL PENCARIAN",
                      }),
                      header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: false,
                      }),
                      carouselMessage:
                        proto.Message.InteractiveMessage.CarouselMessage.fromObject(
                          {
                            cards: [...push],
                          },
                        ),
                    }),
                },
              },
            },
            {},
          );

          await RezzHost.relayMessage(m.chat, bot.message, {
            messageId: bot.key.id,
          });
        }
        break;

      case "pin80":
      case "pinterest80":
        {
          if (limitnya < 1) return reply(mess.limit);
          if (!text) return reply(`*Example*: ${prefix + command} ${botname}`);
          await RezzHost.sendMessage(m.chat, {
            react: { text: "🔎", key: m.key },
          });
          async function createImage(url) {
            const { imageMessage } = await generateWAMessageContent(
              {
                image: {
                  url,
                },
              },
              {
                upload: RezzHost.waUploadToServer,
              },
            );
            return imageMessage;
          }

          function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
            }
          }

          let push = [];
          let { data } = await axios.get(
            `https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`,
          );
          let res = data.resource_response.data.results.map(
            (v) => v.images.orig.url,
          );

          shuffleArray(res);
          let ult = res.splice(0, 80);
          let i = 1;

          for (let lucuy of ult) {
            push.push({
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `• VPS\n• PANEL PETRODACTYL\n• SECRIP BOT WHATSAPP\n• DAN MASIH BANYAK LAGI`,
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: ownername,
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: `WAYSGANZSTOREID MENYEDIAKAN :`,
                hasMediaAttachment: true,
                imageMessage: await createImage(lucuy),
              }),
              nativeFlowMessage:
                proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"MY OWNER","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`,
                    },
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"GROUP OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`,
                    },
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"SOURCE","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`,
                    },
                  ],
                }),
            });
          }

          const bot = generateWAMessageFromContent(
            m.chat,
            {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                  },
                  interactiveMessage:
                    proto.Message.InteractiveMessage.fromObject({
                      body: proto.Message.InteractiveMessage.Body.create({
                        text: mess.done,
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "HASIL PENCARIAN",
                      }),
                      header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: false,
                      }),
                      carouselMessage:
                        proto.Message.InteractiveMessage.CarouselMessage.fromObject(
                          {
                            cards: [...push],
                          },
                        ),
                    }),
                },
              },
            },
            {},
          );

          await RezzHost.relayMessage(m.chat, bot.message, {
            messageId: bot.key.id,
          });
        }
        break;

      case "pin90":
      case "pinterest90":
        {
          if (limitnya < 1) return reply(mess.limit);
          if (!text) return reply(`*Example*: ${prefix + command} ${botname}`);
          await RezzHost.sendMessage(m.chat, {
            react: { text: "🔎", key: m.key },
          });
          async function createImage(url) {
            const { imageMessage } = await generateWAMessageContent(
              {
                image: {
                  url,
                },
              },
              {
                upload: RezzHost.waUploadToServer,
              },
            );
            return imageMessage;
          }

          function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
            }
          }

          let push = [];
          let { data } = await axios.get(
            `https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`,
          );
          let res = data.resource_response.data.results.map(
            (v) => v.images.orig.url,
          );

          shuffleArray(res);
          let ult = res.splice(0, 90);
          let i = 1;

          for (let lucuy of ult) {
            push.push({
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `• VPS\n• PANEL PETRODACTYL\n• SECRIP BOT WHATSAPP\n• DAN MASIH BANYAK LAGI`,
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: ownername,
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: `WAYSGANZSTOREID MENYEDIAKAN :`,
                hasMediaAttachment: true,
                imageMessage: await createImage(lucuy),
              }),
              nativeFlowMessage:
                proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"MY OWNER","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`,
                    },
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"GROUP OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`,
                    },
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"SOURCE","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`,
                    },
                  ],
                }),
            });
          }

          const bot = generateWAMessageFromContent(
            m.chat,
            {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                  },
                  interactiveMessage:
                    proto.Message.InteractiveMessage.fromObject({
                      body: proto.Message.InteractiveMessage.Body.create({
                        text: mess.done,
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "HASIL PENCARIAN",
                      }),
                      header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: false,
                      }),
                      carouselMessage:
                        proto.Message.InteractiveMessage.CarouselMessage.fromObject(
                          {
                            cards: [...push],
                          },
                        ),
                    }),
                },
              },
            },
            {},
          );

          await RezzHost.relayMessage(m.chat, bot.message, {
            messageId: bot.key.id,
          });
        }
        break;

      case "pin100":
      case "pinterest100":
        {
          if (limitnya < 1) return reply(mess.limit);
          if (!text) return reply(`*Example*: ${prefix + command} ${botname}`);
          await RezzHost.sendMessage(m.chat, {
            react: { text: "🔎", key: m.key },
          });
          async function createImage(url) {
            const { imageMessage } = await generateWAMessageContent(
              {
                image: {
                  url,
                },
              },
              {
                upload: RezzHost.waUploadToServer,
              },
            );
            return imageMessage;
          }

          function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
            }
          }

          let push = [];
          let { data } = await axios.get(
            `https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`,
          );
          let res = data.resource_response.data.results.map(
            (v) => v.images.orig.url,
          );

          shuffleArray(res);
          let ult = res.splice(0, 100);
          let i = 1;

          for (let lucuy of ult) {
            push.push({
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `• VPS\n• PANEL PETRODACTYL\n• SECRIP BOT WHATSAPP\n• DAN MASIH BANYAK LAGI`,
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: ownername,
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: `WAYSGANZSTOREID MENYEDIAKAN :`,
                hasMediaAttachment: true,
                imageMessage: await createImage(lucuy),
              }),
              nativeFlowMessage:
                proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"MY OWNER","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`,
                    },
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"GROUP OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`,
                    },
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"SOURCE","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`,
                    },
                  ],
                }),
            });
          }

          const bot = generateWAMessageFromContent(
            m.chat,
            {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                  },
                  interactiveMessage:
                    proto.Message.InteractiveMessage.fromObject({
                      body: proto.Message.InteractiveMessage.Body.create({
                        text: mess.done,
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "HASIL PENCARIAN",
                      }),
                      header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: false,
                      }),
                      carouselMessage:
                        proto.Message.InteractiveMessage.CarouselMessage.fromObject(
                          {
                            cards: [...push],
                          },
                        ),
                    }),
                },
              },
            },
            {},
          );

          await RezzHost.relayMessage(m.chat, bot.message, {
            messageId: bot.key.id,
          });
        }
        break;

      case "ttsearch":
      case "ttscroll":
      case "tiktoksearch":
        {
          if (!text) return reply("Masukan Query!");
          let old = new Date();
          let json;
          try {
            json = await fetchJson(
              `https://skizo.tech/api/tiktok-search?apikey=${skizo}&keywords=${text}`,
            );
          } catch (err) {
            return m.reply(
              `Terjadi kesalahan saat mengambil data: ${err.message}`,
            );
          }

          function pickRandom(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
          }

          var hiasan = "=> ";

          // Ensure json has enough elements
          if (!json || json.length < 8)
            return m.reply("Data tidak lengkap untuk membuat scroll.");

          let json1 = pickRandom([json[0], json[1], json[3]]);
          let json2 = pickRandom([json[5], json[6], json[7]]);
          let json3 = pickRandom([json[8], json[2]]);
          let json4 = pickRandom([json[7], json[3], json[6]]);
          let json5 = pickRandom([json[4], json[0], json[1]]);

          async function video(url) {
            if (!url) throw new Error("URL video tidak tersedia.");
            const { videoMessage } = await generateWAMessageContent(
              {
                video: {
                  url,
                },
              },
              {
                upload: RezzHost.waUploadToServer,
              },
            );
            return videoMessage;
          }

          try {
            let msg = generateWAMessageFromContent(
              m.chat,
              {
                viewOnceMessage: {
                  message: {
                    interactiveMessage: {
                      body: {
                        text: `result from ${text}`,
                      },
                      carouselMessage: {
                        cards: [
                          {
                            header: {
                              videoMessage: await video(json1.play),
                              hasMediaAttachment: true,
                            },
                            body: {
                              text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json1.duration || "N/A"}\n${hiasan}*Play* : ${json1.play_count || 0}\n${hiasan}*Download* : ${json1.download_count || 0}\n${hiasan}*Share* : ${json1.share_count || 0}\n${hiasan}*Comment* : ${json1.comment_count || 0}\n${hiasan}*Like* : ${json1.digg_count || 0}\n\n`,
                            },
                            nativeFlowMessage: {
                              buttons: [
                                {
                                  name: "quick_reply",
                                  buttonParamsJson: `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`,
                                },
                              ],
                            },
                          },
                          {
                            header: {
                              videoMessage: await video(json2.play),
                              hasMediaAttachment: true,
                            },
                            body: {
                              text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json2.duration || "N/A"}\n${hiasan}*Play* : ${json2.play_count || 0}\n${hiasan}*Download* : ${json2.download_count || 0}\n${hiasan}*Share* : ${json2.share_count || 0}\n${hiasan}*Comment* : ${json2.comment_count || 0}\n${hiasan}*Like* : ${json2.digg_count || 0}\n\n`,
                            },
                            nativeFlowMessage: {
                              buttons: [
                                {
                                  name: "quick_reply",
                                  buttonParamsJson: `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`,
                                },
                              ],
                            },
                          },
                          {
                            header: {
                              videoMessage: await video(json3.play),
                              hasMediaAttachment: true,
                            },
                            body: {
                              text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json3.duration || "N/A"}\n${hiasan}*Play* : ${json3.play_count || 0}\n${hiasan}*Download* : ${json3.download_count || 0}\n${hiasan}*Share* : ${json3.share_count || 0}\n${hiasan}*Comment* : ${json3.comment_count || 0}\n${hiasan}*Like* : ${json3.digg_count || 0}\n\n`,
                            },
                            nativeFlowMessage: {
                              buttons: [
                                {
                                  name: "quick_reply",
                                  buttonParamsJson: `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`,
                                },
                              ],
                            },
                          },
                          {
                            header: {
                              videoMessage: await video(json4.play),
                              hasMediaAttachment: true,
                            },
                            body: {
                              text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json4.duration || "N/A"}\n${hiasan}*Play* : ${json4.play_count || 0}\n${hiasan}*Download* : ${json4.download_count || 0}\n${hiasan}*Share* : ${json4.share_count || 0}\n${hiasan}*Comment* : ${json4.comment_count || 0}\n${hiasan}*Like* : ${json4.digg_count || 0}\n\n`,
                            },
                            nativeFlowMessage: {
                              buttons: [
                                {
                                  name: "quick_reply",
                                  buttonParamsJson: `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`,
                                },
                              ],
                            },
                          },
                          {
                            header: {
                              videoMessage: await video(json5.play),
                              hasMediaAttachment: true,
                            },
                            body: {
                              text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json5.duration || "N/A"}\n${hiasan}*Play* : ${json5.play_count || 0}\n${hiasan}*Download* : ${json5.download_count || 0}\n${hiasan}*Share* : ${json5.share_count || 0}\n${hiasan}*Comment* : ${json5.comment_count || 0}\n${hiasan}*Like* : ${json5.digg_count || 0}\n\n`,
                            },
                            nativeFlowMessage: {
                              buttons: [
                                {
                                  name: "quick_reply",
                                  buttonParamsJson: `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`,
                                },
                              ],
                            },
                          },
                        ],
                        messageVersion: 1,
                      },
                    },
                  },
                },
              },
              {},
            );

            await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
              messageId: msg.key.id,
            });
          } catch (error) {
            console.error(error);
            m.reply("Terjadi kesalahan saat mengirim pesan.");
          }
        }
        break;

      case "cekip":
      case "ip":
        {
          if (limitnya < 1) return reply(mess.limit);
          if (args.length !== 1) {
            return reply("Format salah! Penggunaan: cekip link");
          }
          const link = args[0];
          dns.resolve4(link, (err, addresses) => {
            if (err) {
              return reply("Gagal melakukan DNS reverse lookup.");
            }
            if (addresses.length === 0) {
              return reply("Tidak ada alamat IP yang ditemukan.");
            }
            const ip = addresses[0];
            reply(`Alamat IP dari ${link} adalah: ${ip}`);
          });
          uselimit();
        }
        break;

      case "cerpen":
        {
          const mann = require("d-scrape");
          const mannr = await mann.random.randomCerpen();
          var yaya = `*[ R A N D O M  C E R P E N ]*\n\n*Judul:* ${mannr.judul}\n*Penulis:* ${mannr.penulis}\n\n${mannr.cerita}\n\n_${mannr.sumber}_`;
          reply(yaya);
        }
        break;

      case "readvo":
      case "readviewonce":
        {
          if (!m.quoted)
            return reply(`Reply view once message to use this command`);
          reply(mess.wait);
          let type = Object.keys(m.quoted.message)[0];
          let quotedType = m.quoted.message[type];
          var media = await downloadContentFromMessage(
            quotedType,
            type == "imageMessage" ? "image" : "video",
          );
          let buffer = Buffer.from([]);
          for await (let chunk of media) {
            buffer = Buffer.concat([buffer, chunk]);
          }
          if (/video/.test(type)) {
            await RezzHost.sendMessage(
              m.chat,
              { video: buffer, caption: quotedType.caption },
              { quoted: kalgans },
            );
          } else if (/image/.test(type)) {
            await RezzHost.sendMessage(
              m.chat,
              { image: buffer, caption: quotedType.caption },
              { quoted: kalgans },
            );
          }
        }
        break;

      case "tourl":
        {
          if (limitnya < 1) return reply(mess.limit);
          if (!/video/.test(mime) && !/image/.test(mime))
            throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`;
          if (!quoted)
            throw `*Send/Reply the Video/Image Caption* ${prefix + command}`;
          let {
            UploadFileUgu,
            webp2mp4File,
            TelegraPh,
          } = require("./lib/uploader");
          let media = await RezzHost.downloadAndSaveMediaMessage(quoted);
          if (/image/.test(mime)) {
            let anu = await TelegraPh(media);
            reply(util.format(anu));
          } else if (!/image/.test(mime)) {
            let anu = await UploadFileUgu(media);
            reply(util.format(anu));
          }
          await fs.unlinkSync(media);
          uselimit();
        }
        break;

      case "daftar":
      case "regis":
      case "register":
        {
          if (isRegistered) return reply("Kamu sudah terdaftar");
          const serialUser = createSerial(20);
          mzd = `───「 𝗧𝗘𝗥𝗩𝗘𝗥𝗜𝗙𝗜𝗞𝗔𝗦𝗜 」────

○ Nomor : @${m?.sender.split("@")[0]}
○ Nama : ${pushname}
○ Status : Sukses✅ 
○ Ns : ${serialUser}

Jangan Lupa Baca Rules Ya ${pushname}...
Data User Yang Tersimpan Di Database Bot, Di Jamin Aman Tanpa Tershare (. ❛ ᴗ ❛.)`;
          veri = m?.sender;
          if (!m.isGroup) {
            addRegisteredUser(m?.sender, pushname, serialUser);
            RezzHost.sendMessage(m?.chat, {
              text: mzd,
              contextInfo: {
                mentionedJid: [m?.chat],
                externalAdReply: {
                  showAdAttribution: true,
                  title: `© 2024 | R E G I S T E R`,
                  body: "",
                  thumbnailUrl: ppuser,
                  sourceUrl: hariini,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                },
              },
            });
          } else {
            addRegisteredUser(m?.sender, pushname, serialUser);
            RezzHost.sendMessage(m?.chat, {
              text: mzd,
              contextInfo: {
                mentionedJid: [m?.chat],
                externalAdReply: {
                  showAdAttribution: true,
                  title: `© 2024 | R E G I S T E R`,
                  body: "",
                  thumbnailUrl: ppuser,
                  sourceUrl: hariini,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                },
              },
            });
          }
        }
        break;

      case "ss":
      case "ssweb":
        {
          if (limitnya < 1) return reply(mess.limit);
          const scp1 = require("./lib/myfunc");
          if (!q) return reply(`Example ${prefix + command} link`);
          reply(mess.search);
          let krt = await scp1.ssweb(q);
          RezzHost.sendMessage(
            from,
            { image: krt.result, caption: mess.success },
            { quoted: kalgans },
          );
          uselimit();
        }
        break;
      //BATAS MAIN MENU

      // DOWNLOAD MENU
      case "tiktok":
      case "tt":
        {
          if (limitnya < 1) return reply(mess.limit);
          if (args.length == 0)
            return reply(`Example: ${prefix + command} link lu`);
          let res = await tiktok(`${args[0]}`);
          RezzHost.sendMessage(m.chat, {
            video: { url: res.nowm },
            caption: res.title,
            fileName: `tiktok.mp4`,
            mimetype: "video/mp4",
          }).then(() => {
            RezzHost.sendMessage(m.chat, {
              audio: { url: res.audio },
              fileName: `tiktok.mp3`,
              mimetype: "audio/mp4",
            });
          });
          uselimit();
        }
        break;

      case "ytreels":
      case "ytmp4":
        {
          if (limitnya < 1) return reply(mess.limit);
          if (!text) return reply("Masukan Link Nya!!!");
          reply(mess.wait);
          downloadMp4(text);
          uselimit();
        }
        break;

      case "ytmp3":
      case "youtubemp3":
        {
          if (limitnya < 1) return reply(mess.limit);
          if (!text)
            throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`;
          reply(mess.wait);
          downloadMp3(text);
          uselimit();
        }
        break;

      case "instagram":
        {
          if (limitnya < 1) return reply(mess.limit);
          if (!text)
            throw `Example : ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`;
          reply(mess.wait);
          let iganu = await igdl2(text);
          RezzHost.sendMessage(m.chat, {
            video: { url: iganu[0].url },
            caption: mess.success,
          });
          uselimit();
        }
        break;

      case "mediafire":
        {
          if (!args[0])
            return reply(`Enter the mediafire link next to the command`);
          if (!args[0].match(/mediafire/gi)) return reply(`Link incorrect`);
          const { mediafiredl } = require("@bochilteam/scraper");
          let full = /f$/i.test(command);
          let u = /https?:\/\//.test(args[0]) ? args[0] : "https://" + args[0];
          let res = await mediafiredl(args[0]);
          let { url, url2, filename, ext, aploud, filesize, filesizeH } = res;
          let caption = `
≡ *MEDIAFIRE*

▢ *Number:* ${filename}
▢ *Size:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Uploaded:* ${aploud}
`.trim();
          RezzHost.sendMessage(
            m.chat,
            { document: { url: url }, fileName: filename, mimetype: ext },
            { quoted: m },
          );
        }
        break;

      case "git":
      case "gitclone":
        {
          if (!args[0])
            return reply2(
              `Mana link nya?\nContoh :\n${prefix}${command} https://github.com/YukiShima4/tes`,
            );
          if (!isUrl(args[0]) && !args[0].includes("github.com"))
            return reply2(`Link invalid!!`);
          reply(mess.search);
          let regex1 =
            /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
          let [, user, repo] = args[0].match(regex1) || [];
          repo = repo.replace(/.git$/, "");
          let url = `https://api.github.com/repos/${user}/${repo}/zipball`;
          let filename = (await fetch(url, { method: "HEAD" })).headers
            .get("content-disposition")
            .match(/attachment; filename=(.*)/)[1];
          RezzHost.sendMessage(
            m.chat,
            {
              document: { url: url },
              fileName: filename + ".zip",
              mimetype: "application/zip",
            },
            { quoted: kalgans },
          ).catch((err) => reply("emror"));
        }
        break;

      //BATAS DOWN MENU

      //GROUP MENU
      case "promote":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!isAdmins && !isGroupOwner && !isCreator)
            return reply(mess.admin);
          if (!isBotAdmins) return reply(mess.botAdmin);
          if (!text && !m.quoted) reply("masukkan nomor yang ingin di promote");
          let users = m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await RezzHost.groupParticipantsUpdate(
            m.chat,
            [users],
            "promote",
          ).catch(console.log);
        }
        break;

      case "antilink":
        {
          if (!m.isGroup) return m.reply(mess.group);
          if (!isBotAdmins) return m.reply(mess.botAdmin);
          if (!isAdmins && !isCreator) return m.reply(mess.admin);
          if (args[0] === "on") {
            if (AntiLink) return m.reply("_Sudah Diaktifkan_");
            ntilinkall.push(from);
            fs.writeFileSync("./lib/antilink.json", JSON.stringify(ntilinkall));
            m.reply(`_Sukses aktifkan ${command} di group ini_`);
            var groupe = await message.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            message.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim link apapun di grup ini atau kamu akan langsung ditendang!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m },
            );
          } else if (args[0] === "off") {
            if (!AntiLink) return m.reply("_Sudah Dimatikan_");
            let off = ntilinkall.indexOf(from);
            ntilinkall.splice(off, 1);
            fs.writeFileSync("./lib/antilink.json", JSON.stringify(ntilinkall));
            m.reply(`_Sukses matikan ${command} di group ini_`);
          }
        }
        break;

      case "demote":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!isAdmins && !isGroupOwner && !isCreator)
            return reply(mess.admin);
          if (!isBotAdmins) return reply(mess.botAdmin);
          if (!text && !m.quoted) reply("masukkan nomor yang ingin di demote");
          let users = m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await RezzHost.groupParticipantsUpdate(
            m.chat,
            [users],
            "demote",
          ).catch(console.log);
        }
        break;

      case "sendlinkgc":
        {
          if (!isCreator) return reply(mess.owner);
          if (!m.isGroup) return reply(mess.group);
          if (!isBotAdmins) return reply(mess.badm);
          if (!args[0])
            return reply(
              `Penggunaan ${prefix + command} nomor\nContoh ${prefix + command} ${owner}`,
            );
          bnnd = text.split("|")[0] + "@s.whatsapp.net";
          let response = await RezzHost.groupInviteCode(from);
          RezzHost.sendText(
            bnnd,
            `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`,
            m,
            { detectLink: true },
          );
        }
        break;

      case "resetlinkgc":
        if (!isCreator) return reply(mess.owner);
        if (!m.isGroup) return reply(mess.group);
        if (!isBotAdmins) return reply(mess.badm);
        RezzHost.groupRevokeInvite(from);
        break;

      case "editdesk":
        {
          if (!isCreator) return reply(mess.owner);
          if (!m.isGroup) return reply(mess.group);
          if (!isBotAdmins) return reply(mess.badm);
          if (!isAdmins) return reply(mess.admin);
          if (!text) return reply(`Text Nya ?`);
          await RezzHost.groupUpdateDescription(from, text)
            .then(res)
            .catch((err) => reply(jsonformat(err)));
        }
        break;

      case "jpmpromosi":
      case "jpmpromo":
      case "jpm3":
        {
          if (!isOwner) return tamzReply(msg.owner);
          if (!text && !m.quoted)
            return m.reply(example("teksnya atau replyteks"));
          var teks = m.quoted ? m.quoted.text : text;
          let total = 0;
          let getGroups = await tamz.groupFetchAllParticipating();
          let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
          let usergc = groups.map((v) => v.id);
          m.reply(`Memproses Mengirim Pesan Ke *${usergc.length} Grup*`);
          let teksnya = teks;
          let msgii = generateWAMessageFromContent(
            m.chat,
            {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                  },
                  interactiveMessage: proto.Message.InteractiveMessage.create({
                    contextInfo: {
                      mentionedJid: [m.sender],
                      externalAdReply: {
                        showAdAttribution: true,
                      },
                    },
                    body: proto.Message.InteractiveMessage.Body.create({
                      text: teksnya,
                    }),
                    nativeFlowMessage:
                      proto.Message.InteractiveMessage.NativeFlowMessage.create(
                        {
                          buttons: [
                            {
                              name: "cta_url",
                              buttonParamsJson: `{\"display_text\":\"Chat ${namaowner}\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`,
                            },
                            {
                              name: "cta_url",
                              buttonParamsJson: `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`,
                            },
                          ],
                        },
                      ),
                  }),
                },
              },
            },
            { userJid: m.sender, quoted: qchanel },
          );
          for (let jid of usergc) {
            try {
              await tamz.relayMessage(jid, msgii.message, {
                messageId: msgii.key.id,
              });
              total += 1;
            } catch {}
            await sleep(global.delayjpm);
          }
          m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`);
        }
        break;

      case "closetime":
        if (!m.isGroup) return reply(mess.group);
        if (!isBotAdmins) return reply(mess.Badmin);
        if (args[1] == "detik") {
          var timer = args[0] * `1000`;
        } else if (args[1] == "menit") {
          var timer = args[0] * `60000`;
        } else if (args[1] == "jam") {
          var timer = args[0] * `3600000`;
        } else if (args[1] == "hari") {
          var timer = args[0] * `86400000`;
        } else {
          return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
        }
        reply(`Close time ${q} dimulai dari sekarang`);
        setTimeout(() => {
          const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`;
          RezzHost.groupSettingUpdate(from, "announcement");
          reply(close);
        }, timer);
        break;

      case "opentime":
        {
          if (!m?.isGroup) return reply("Khusus Dalam Group");
          if (!isAdmins && !isCreator) return reply("Khusus Admin Group");
          if (!isBotAdmins)
            return reply(
              "Jadikan Bot Sebagai Admin Terlebih Dahulu Jika Ingin Menggunakan Fitur Ini",
            );
          if (args[1] == "detik") {
            var timer = args[0] * `1000`;
          } else if (args[1] == "menit") {
            var timer = args[0] * `60000`;
          } else if (args[1] == "jam") {
            var timer = args[0] * `3600000`;
          } else if (args[1] == "hari") {
            var timer = args[0] * `86400000`;
          } else {
            return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
          }
          reply(`Open Time ${q} Dimulai Dari Sekarang`);
          setTimeout(() => {
            const nomor = m.participant;
            const open = `*Tepat Waktu* Grup Dibuka Oleh Admin\nSekarang Member Dapat Mengirim Pesan`;
            RezzHost.groupSettingUpdate(m.chat, "not_announcement");
            reply(open);
          }, timer);
        }
        break;

      //SEARCH MENU

      case "yts":
      case "ytsearch":
        {
          if (limitnya < 1) return reply(mess.limit);
          if (!text) return reply(`Example : ${prefix + command} Drunk Text`);
          if (limitnya < 1) return reply(mess.limit);
          reply(mess.wait);
          let search = await yts(text);
          let teks = "*YouTube Search*\n\n Result From " + text + "\n\n";
          let no = 1;
          for (let i of search.all) {
            teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`;
          }
          RezzHost.sendMessage(
            m.chat,
            { image: { url: search.all[0].thumbnail }, caption: teks },
            { quoted: kalgans },
          );
          uselimit();
        }
        break;

      case "google":
        {
          if (limitnya < 1) return reply(mess.limit);
          if (!text) return reply(`Example : ${prefix + command} ${botname}`);
          let google = require("google-it");
          google({ query: text }).then((res) => {
            let teks = `Google Search From : ${text}\n\n`;
            for (let g of res) {
              teks += `⭔ *Title* : ${g.title}\n`;
              teks += `⭔ *Description* : ${g.snippet}\n`;
              teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`;
            }
            reply(teks);
          });
          uselimit();
        }
        break;

     

      case "add":
        {
          if (m.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return;
          if (!text && !m?.quoted)
            reply("masukkan nomor yang ingin di tambahkan");
          let users = m?.quoted
            ? m?.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await RezzHost.groupParticipantsUpdate(m?.chat, [users], "add").catch(
            console.log,
          );
        }
        break;

      case "kick":
        {
          if (m.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return;
          if (!text && !m?.quoted)
            reply("masukkan nomor / tag yang ingin di kick");
          let users = m?.quoted
            ? m?.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await RezzHost.groupParticipantsUpdate(
            m?.chat,
            [users],
            "remove",
          ).catch(console.log);
        }
        break;

      case "linkgroup":
      case "linkgc":
        {
          if (!isCreator) return reply(mess.owner);
          if (!m.isGroup) return reply(mess.group);
          if (!isBotAdmins) return reply(mess.badm);
          let response = await RezzHost.groupInviteCode(from);
          RezzHost.sendText(
            from,
            `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`,
            m,
            { detectLink: true },
          );
        }
        break;

      case "tagall":
        {
          if (!isAdmins) return reply(mess.admin);
          if (!m.isGroup) return;
          let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : "kosong"}*\n\n`;
          for (let mem of participants) {
            teks += `⭔ @${mem.id.split("@")[0]}\n`;
          }
          RezzHost.sendMessage(
            m.chat,
            { text: teks, mentions: participants.map((a) => a.id) },
            { quoted: kalgans },
          );
        }
        break;

      case "biochange":
        if (!isCreator) return reply(mess.owner);
        if (args.length < 1) return reply(`Example ${prefix + command} on/off`);
        if (q == "enable") {
          autobio = true;
          reply(`Berhasil Mengubah AutoBio Ke ${q}`);
        } else if (q == "disable") {
          autobio = false;
          reply(`Berhasil Mengubah AutoBio Ke ${q}`);
        }
        break;

      case "autobio":
        {
          if (!isCreator) return reply(mess.owner);
          let {
            proto,
            generateWAMessageFromContent,
          } = require("@whiskeysockets/baileys");
          let msg = generateWAMessageFromContent(
            m.chat,
            {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                  },
                  interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                      text: "",
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                      text: "[ *${botname} – ${versionbot}* ]",
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                      title: Styles(
                        `click button *enable* to enable autobio\nclick button *disable* to disable autobio`,
                      ),
                      subtitle: "rorr",
                      hasMediaAttachment: false,
                    }),
                    nativeFlowMessage:
                      proto.Message.InteractiveMessage.NativeFlowMessage.create(
                        {
                          buttons: [
                            {
                              name: "quick_reply",
                              buttonParamsJson:
                                '{"display_text":"Enable","id":".biochange enable"}',
                            },
                            {
                              name: "quick_reply",
                              buttonParamsJson:
                                '{"display_text":"Disable","id":".biochange disable"}',
                            },
                          ],
                        },
                      ),
                  }),
                },
              },
            },
            {},
          );

          await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
          });
        }
        break;

      case "Wayshostchat":
        {
          if (!isCreator) return mess.owner;
          let {
            proto,
            generateWAMessageFromContent,
          } = require("@whiskeysockets/baileys");
          let msg = generateWAMessageFromContent(
            m.chat,
            {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                  },
                  interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                      text: "",
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                      text: "Simpel WhatsApp Bot",
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                      title: `click button *enable* to enable autobio\nclick button *disable* to disable autobio`,
                      subtitle: `${ownername}`,
                      hasMediaAttachment: false,
                    }),
                    nativeFlowMessage:
                      proto.Message.InteractiveMessage.NativeFlowMessage.create(
                        {
                          buttons: [
                            {
                              name: "quick_reply",
                              buttonParamsJson:
                                '{"display_text":"Enable","id":".Wayshostchatchange enable"}',
                            },
                            {
                              name: "quick_reply",
                              buttonParamsJson:
                                '{"display_text":"Disable","id":".Wayshostchatchange disable"}',
                            },
                          ],
                        },
                      ),
                  }),
                },
              },
            },
            {},
          );

          await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
          });
        }
        break;

      case "bototomatis":
        {
          if (args[0] === "enable") {
            if (db.data.chats[m.chat].RezzHost) return reply(`activated`);
            db.data.chats[m.chat].RezzHost = true;
            reply("Successfully Activate Auto Chat");
          } else if (args[0] === "disable") {
            if (!db.data.chats[m.chat].RezzHost)
              return reply(`it's deactivated`);
            db.data.chats[m.chat].RezzHost = false;
            reply("Successfully Disabling Auto Chat ");
          } else {
            reply(
              `${prefix + command} enable -- _mengaktifkan_\n${prefix + command} disable -- _Menonaktifkan_`,
            );
          }
        }
        break;

      case "bard":
        {
          if (limitnya < 1) return reply(mess.limit);
          if (!text)
            return m.reply(`*Example*: ${prefix + command} siapa kamu`);
          let res = await bard(text);
          RezzHost.sendMessage(
            m.chat,
            {
              text: res,
              contextInfo: {
                externalAdReply: {
                  title: `Bard-Ai`,
                  body: `Bard-Ai`,
                  thumbnailUrl: `https://telegra.ph/file/490ab1eea92232fc06e68.jpg`,
                  sourceUrl: `https://google.com`,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                },
              },
            },
            { quoted: kalgans },
          );
          uselimit();
        }
        break;

      case "delsesi":
      case "clearsession":
        {
          fs.readdir("./session", async function (err, files) {
            if (err) {
              console.log("Unable to scan directory: " + err);
              return reply("Unable to scan directory: " + err);
            }
            let filteredArray = await files.filter(
              (item) =>
                item.startsWith("pre-key") ||
                item.startsWith("sender-key") ||
                item.startsWith("session-") ||
                item.startsWith("app-state"),
            );
            console.log(filteredArray.length);
            let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`;
            if (filteredArray.length == 0) return reply(teks);
            filteredArray.map(function (e, i) {
              teks += i + 1 + `. ${e}\n`;
            });
            reply(teks);
            await sleep(2000);
            reply("Menghapus file sampah...");
            await filteredArray.forEach(function (file) {
              fs.unlinkSync(`./session/${file}`);
            });
            await sleep(2000);
            reply("Berhasil menghapus semua sampah di folder session");
          });
        }
        break;

      case "setname":
      case "setsubject":
        {
          if (!text) return reply(`Text ?`);
          await RezzHost.groupUpdateSubject(m.chat, text)
            .then((res) => reply(mess.success))
            .catch((err) => reply(jsonformat(err)));
        }
        break;


      case "done":
        {
          if (!isCreator) return m.reply(mess.owner);
          if (!text)
            return m.reply("barang,harga\n\n*Contoh :* Panel Unlimited,2");
          if (!text.split(","))
            return m.reply("barang,harga\n\n*Contoh :* Panel Unlimited,2");
          const [barang, harga] = text.split(",");
          if (isNaN(harga)) return m.reply("Format Harga Tidak Valid");
          var total = `${harga}000000`;
          var total2 = Number(`${harga}000`);
          const teks = `*TRANSAKSI DONE BY ${ownername} ✅*

*📦 Barang :* ${barang}
*💸 Nominal :* Rp${toRupiah(total2)}
*⏰ Waktu :* ${time}

_*Terimakasih Sudah Mempercayai & Menggunakan Jasa Saya 🥳*_`;
          RezzHost.relayMessage(
            m.chat,
            {
              requestPaymentMessage: {
                currencyCodeIso4217: "IDR",
                amount1000: Number(total),
                requestFrom: m.sender,
                noteMessage: {
                  extendedTextMessage: {
                    text: `${teks}`,
                    contextInfo: {
                      externalAdReply: { showAdAttribution: true },
                    },
                  },
                },
              },
            },
            {},
          );
        }
        break;

      case "tunda":
        text_trxpending = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚 」

𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚
𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥`;
        await RezzHost.relayMessage(
          m.chat,
          {
            requestPaymentMessage: {
              currencyCodeIso4217: "IDR",
              amount1000: 1000000000,
              requestFrom: m.sender,
              noteMessage: {
                extendedTextMessage: {
                  text: text_trxpending,
                  contextInfo: {
                    externalAdReply: {
                      showAdAttribution: true,
                    },
                  },
                },
              },
            },
          },
          {},
        );
        break;

      case "batal":
        text_trxbatal = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗔𝗧𝗔𝗟 」

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${tanggal2}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${time}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹`;
        await RezzHost.relayMessage(
          m.chat,
          {
            requestPaymentMessage: {
              currencyCodeIso4217: "IDR",
              amount1000: 1000000000,
              requestFrom: m.sender,
              noteMessage: {
                extendedTextMessage: {
                  text: text_trxbatal,
                  contextInfo: {
                    externalAdReply: {
                      showAdAttribution: true,
                    },
                  },
                },
              },
            },
          },
          {},
        );
        break;

     
      
//================INFORMASI BOT=========================//
        case "sc":
          {
            await RezzHost.sendMessage(m.chat, {
              react: { text: "⏳", key: m.key },
            });
            const url = `${thumbnail}`;
            async function image(url) {
              const { imageMessage } = await generateWAMessageContent(
                {
                  image: {
                    url,
                  },
                },
                {
                  upload: RezzHost.waUploadToServer,
                },
              );
              return imageMessage;
            }

            let msg = generateWAMessageFromContent(
              m.chat,
              {
                viewOnceMessage: {
                  message: {
                    interactiveMessage: {
                      body: {},
                      carouselMessage: {
                        cards: [
                          {
                            header: {
                              imageMessage: await image(url),
                              hasMediaAttachment: true,
                            },
                            body: {
                              text: `▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
        > *𝖧𝖠𝖨 𝖪𝖠𝖪 ${pushname}, ${tesksc}*
        ▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

        *${tesksesudahsc}*`,
                            },
                            nativeFlowMessage: {
                              buttons: [
                                {
                                  name: "cta_url",
                                  buttonParamsJson: `{"display_text":"𝖢𝖱𝖤𝖠𝖳𝖮𝖱","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`,
                                },
                              ],
                            },
                          },
                          {
                            header: {
                              imageMessage: await image(url),
                              hasMediaAttachment: true,
                            },
                            body: {
                              text: `▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
        > *𝖧𝖺𝗅𝗈 𝖪𝖺𝗄 ${pushname}, 𝖳𝖾𝗄𝖺𝗇 𝖳𝗈𝗆𝖻𝗈𝗅 𝖸𝖺??𝗀 𝖻𝖾𝗋𝗍𝗎𝗅𝗂𝗌𝗄𝖺𝗇 𝖢𝗁𝖺𝗍 𝖡𝗈𝗍 𝖴𝗇𝗍𝗎𝗄 𝖡𝖾𝗋𝗆𝖺𝗂𝗇 ${namebot}*
        ▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

        *𝖳𝖤𝖱𝖨𝖬𝖠𝖪𝖠𝖲𝖨𝖧 𝖩𝖨𝖪𝖠 𝖲𝖴𝖣𝖠𝖧 𝖬𝖤𝖬𝖡𝖠𝖢𝖠 𝖲𝖠𝖬𝖯𝖠𝖨 𝖲𝖤𝖫𝖤𝖲𝖠𝖨𝖪𝖠𝖭*`,
                            },
                            nativeFlowMessage: {
                              buttons: [
                                {
                                  name: "cta_url",
                                  buttonParamsJson: `{"display_text":"💬  𝗖𝗛𝗔𝗧 𝗕𝗢𝗧","url":"https://wa.me/${nobot}","merchant_url":"https://www.google.com"}`,
                                },
                              ],
                            },
                          },
                        ],
                        messageVersion: 1,
                      },
                    },
                  },
                },
              },
              {},
            );

            await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
              messageId: msg.key.id,
            });
          }
          break;

      case "bot":
        {
          if (!text)
            return reply(`Ya Kamu Kah Panggil Aku? Kenapa Panggil bot Bang`);
          function checkText(text) {
            const lowerCaseText = text.toLowerCase();
            if (
              lowerCaseText.includes("cariin") ||
              lowerCaseText.includes("carikan") ||
              lowerCaseText.includes("putarin") ||
              lowerCaseText.includes("putarkan")
            ) {
              return "ok";
            } else {
              return "no";
            }
          }
          if (text.includes("grup") && text.includes("tutup")) {
            if (!isBotAdmins)
              return reply(
                `Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`,
              );
            if (!isAdmins)
              return reply(
                `Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`,
              );

            await RezzHost.groupSettingUpdate(m.chat, "announcement");
            reply(`Oke, grup telah ditutup. Semoga lebih teratur ya~ 😉`);
          } else if (text.includes("grup") && text.includes("buka")) {
            if (!isBotAdmins)
              return reply(
                `Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`,
              );
            if (!isAdmins)
              return reply(
                `Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`,
              );

            await RezzHost.groupSettingUpdate(m.chat, "not_announcement");
            reply(
              `Oke, grup telah dibuka. Ayo kita beraktivitas bersama-sama! 😉`,
            );
          } else if (text.includes("kick") || text.includes("kik")) {
            if (!isBotAdmins)
              return reply(
                `Maaf, hanya admin yang bisa menggunakan perintah ini. ror�`,
              );
            if (!isAdmins)
              return reply(
                `Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`,
              );

            let users = m.mentionedJid[0]
              ? m.mentionedJid[0]
              : m.quoted
                ? m.quoted.sender
                : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await RezzHost.groupParticipantsUpdate(m.chat, [users], "remove");
            reply(`Maaf Ya Terpaksa Aku Tendang 😖, Perintah Admin Sih..`);
          } else if (checkText(text) === "ok") {
            async function findSong(text) {
              const natural = require("natural");
              const tokenizer = new natural.WordTokenizer();
              const tokens = tokenizer.tokenize(text.toLowerCase());

              const keywords = [
                "putar",
                "putarkan",
                "putarlagu",
                "lagu",
                "cariin",
                "carikan",
                "mainkan",
                "mainkanlagu",
                "play",
                "playmusic",
                "playasong",
              ];
              const songKeywords = tokens.filter((token) =>
                keywords.includes(token),
              );

              if (songKeywords.length === 0) {
                return "Maaf, tidak dapat menemukan permintaan lagu dalam teks tersebut.";
              }
              let songTitle = tokens
                .slice(tokens.indexOf(songKeywords[0]) + 1)
                .join(" ");
              return songTitle;
            }
            const songName = await findSong(text);
            reply(
              `Oke, tunggu sebentar ya~ Aku sedang mencari "${songName}" untukmu! 😉`,
            );
            await sleep(6000);
            let res = await yts(text);
            let vid = res.videos[0];
            await RezzHost.sendMessage(m.chat, {
              react: { text: "🧢", key: m.key },
            });
            if (!vid)
              return reply(
                "Tidak di temukan, coba untuk membalikkan judul dan author nya",
              );
            let {
              title,
              description,
              thumbnail,
              videoId,
              durationH,
              viewH,
              publishedTime,
            } = vid;
            reply(`Berikut adalah lagu yang kamu pilih: ${title}`);
            const url = "https://www.youtube.com/watch?v=" + videoId;
            const yt = await youtubedl(url).catch(
              async () => await youtubedlv2(url),
            );
            const link = await yt.audio["128kbps"].download();
            try {
              let doc = {
                audio: {
                  url: link,
                },
                mimetype: "audio/mp4",
                fileName: `${title}`,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    renderLargerThumbnail: false,
                    mediaType: 1,
                    mediaUrl: url,
                    title: foter1,
                    body: foter1,
                    sourceUrl: "",
                    thumbnail: await (await RezzHost.getFile(thumbnail)).data,
                  },
                },
              };
              return RezzHost.sendMessage(m.chat, doc, { quoted: kalgans });
            } catch (e) {
              console.error(e);
              reply(`Maaf, terjadi kesalahan dalam mencari lagu. 😔`);
            }
          } else {
          }
        }
        break;
        
      case "totalfitur":
        {
          reply(`${totalFitur()} Features`);
        }
        break;
         case "owner":
                {
                  await RezzHost.sendMessage(m.chat, {
                    react: { text: "⏳", key: m.key },
                  });
                  const url = `${thumbnail}`;
                  async function image(url) {
                    const { imageMessage } = await generateWAMessageContent(
                      {
                        image: {
                          url,
                        },
                      },
                      {
                        upload: RezzHost.waUploadToServer,
                      },
                    );
                    return imageMessage;
                  }

                  let msg = generateWAMessageFromContent(
                    m.chat,
                    {
                      viewOnceMessage: {
                        message: {
                          interactiveMessage: {
                            body: {},
                            carouselMessage: {
                              cards: [
                                {
                                  header: {
                                    imageMessage: await image(url),
                                    hasMediaAttachment: true,
                                  },
                                  body: {
                                    text: `▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
        > *𝖧𝖺𝗂 𝖪𝖺𝗄 ${pushname}, 𝖳𝖾𝗄𝖺𝗇 𝖳𝗈𝗆𝖻𝗈𝗅 𝖸𝖺𝗇𝗀 𝖻𝖾𝗋𝗍𝗎𝗅𝗂𝗌𝗄𝖺𝗇 𝖢𝗁𝖺𝗍 𝖮𝗐𝗇𝖾𝗋 𝖴𝗇𝗍𝗎𝗄 𝖬𝖾𝗇𝗀𝗁𝗎𝖻𝗎𝗇𝗀𝗂 𝖭𝗈𝗆𝗈𝗋 𝖮𝗐𝗇𝖾𝗋 𝗄𝗎*
        ▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

        *𝖩𝖠𝖭𝖦𝖠𝖭 𝖣𝖨 𝖲𝖯𝖠𝖬 𝖸𝖠 𝖪𝖠𝖪, 𝖩𝖨𝖪𝖠 𝖲𝖫𝖮𝖶 𝖱𝖤𝖲 𝖪𝖤𝖬𝖴𝖭𝖦𝖪𝖨𝖭𝖠𝖭 𝖫𝖠𝖦𝖨 𝖲𝖨𝖡𝖴𝖪*`,
                                  },
                                  nativeFlowMessage: {
                                    buttons: [
                                      {
                                        name: "cta_url",
                                        buttonParamsJson: `{"display_text":"👤 𝗖𝗛𝗔𝗧 𝗢𝗪𝗡𝗘𝗥","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`,
                                      },
                                    ],
                                  },
                                },
                                {
                                  header: {
                                    imageMessage: await image(url),
                                    hasMediaAttachment: true,
                                  },
                                  body: {
                                    text: `▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
        > *𝖧𝖺𝗅𝗈 𝖪??𝗄 ${pushname}, 𝖳𝖾𝗄𝖺𝗇 𝖳𝗈𝗆𝖻𝗈𝗅 𝖸𝖺𝗇𝗀 𝖻𝖾𝗋𝗍𝗎𝗅𝗂𝗌𝗄𝖺𝗇 𝖢𝗁𝖺𝗍 𝖡𝗈𝗍 𝖴𝗇𝗍𝗎𝗄 𝖡𝖾𝗋𝗆𝖺𝗂𝗇 ${namebot}*
        ▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

        *TERIMAKASIH JIKA SUDAH MEMBACA SAMPAI SELESAIKAN*`,
                                  },
                                  nativeFlowMessage: {
                                    buttons: [
                                      {
                                        name: "cta_url",
                                        buttonParamsJson: `{"display_text":"💬  𝗖𝗛𝗔𝗧 𝗕𝗢𝗧","url":"https://wa.me/${nobot}","merchant_url":"https://www.google.com"}`,
                                      },
                                    ],
                                  },
                                },
                              ],
                              messageVersion: 1,
                            },
                          },
                        },
                      },
                    },
                    {},
                  );

                  await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
                    messageId: msg.key.id,
                  });
                }
                break;
        
 //============================game menu=======================//
      case "tebakbomb":
      case "bomb":
        {
          if (!m.isGroup) return reply(mess.group);
          if (m.chat in RezzHost.bomb)
            return RezzHost.sendText(
              m.chat,
              "Masih ada game yang belum terselsaikan!",
              RezzHost.bomb[m.chat][0],
            );
          RezzHost.bomb = RezzHost.bomb ? RezzHost.bomb : {};
          let id = m.chat,
            timeout = 180000;
          const bom = [
            "💥",
            "✅",
            "✅",
            "✅",
            "✅",
            "✅",
            "✅",
            "✅",
            "✅",
          ].sort(() => Math.random() - 0.5);
          const number = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];
          const array = bom.map((v, i) => ({
            emot: v,
            number: number[i],
            position: i + 1,
            state: false,
          }));
          let teks = `*🎮 GAME TEBAK BOM 🎮*\n\nKirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`;
          for (let i = 0; i < array.length; i += 3)
            teks +=
              array
                .slice(i, i + 3)
                .map((v) => (v.state ? v.emot : v.number))
                .join("") + "\n";
          teks += `\nWaktu : *${timeout / 1000 / 60} menit*\nHadiah : *Random Balance*\n\nApabila mendapat kotak yang berisi bom maka *Hadiah* tidak di berikan`;
          let msg = await RezzHost.sendText(
            m.chat,
            teks,
            RezzHost.bomb[id] ? RezzHost.bomb[id][0] : m,
          );
          let { key } = msg;

          let v;
          RezzHost.bomb[id] = [
            msg,
            array,
            setTimeout(() => {
              v = array.find((v) => v.emot == "💥");
              if (RezzHost.bomb[id])
                RezzHost.sendText(
                  m.chat,
                  `*Waktu habis*\n\nKotak yang berisi bom ${v.number} tidak terbuka\nGame dihentikan!`,
                  RezzHost.bomb[id][0],
                );
              delete RezzHost.bomb[id];
            }, timeout),
            key,
          ];
        }
        break;

      case "casino":
        {
          if (!m.isGroup) return reply(mess.group);
          let buatall = 1;
          RezzHost.casino = RezzHost.casino ? RezzHost.casino : {};
          if (m.chat in RezzHost.casino)
            return reply(
              "Masih Ada Yang Melakukan Casino Disini, Tunggu Sampai Selesai!!",
            );
          else RezzHost.casino[m.chat] = true;
          try {
            let randomaku = `${Math.floor(Math.random() * 101)}`.trim();
            let randomkamu = `${Math.floor(Math.random() * 81)}`.trim(); //hehe Biar Susah Menang :v
            let Aku = randomaku * 1;
            let Kamu = randomkamu * 1;
            let count = args[0];
            count = count
              ? /all/i.test(count)
                ? Math.floor(db.data.users[m.sender].balance / buatall)
                : parseInt(count)
              : args[0]
                ? parseInt(args[0])
                : 1;
            count = Math.max(1, count);
            if (args.length < 1)
              return reply(`${prefix}casino <jumlah>\n${prefix}casino 1000`);
            if (db.data.users[m.sender].balance >= count * 1) {
              db.data.users[m.sender].balance -= count * 1;
              if (Aku > Kamu) {
                reply(
                  `💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Kehilangan ${count} Balance`,
                );
              } else if (Aku < Kamu) {
                db.data.users[m.sender].balance += count * 2;
                reply(
                  `💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Mendapatkan ${count * 2} Balance`,
                );
              } else {
                ldb.data.users[m.sender].balance += count * 1;
                reply(
                  `💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Seri*\nKamu Mendapatkan ${count * 1} Balance`,
                );
              }
            } else
              reply(
                `Balance Kamu Tidak Mencukupi Untuk Casino Silahkan *bermain game* Terlebih Dahulu!`,
              );
          } catch (e) {
            console.log(e);
            reply(mess.error);
          } finally {
            delete RezzHost.casino[m.chat];
          }
        }
        break;

      case "suit":
        {
          if (!m.isGroup) return reply(mess.group);
          if (
            Object.values(suit).find(
              (v) =>
                v.id.startsWith("suit") &&
                [v.penantang, v.ditantang].includes(m.sender),
            )
          )
            return reply(`Selesaikan dulu suit mu yang sebelumnya`);
          if (m.quoted || text) {
            if (froms === botNumber)
              return reply(`Tidak bisa bermain suit dengan bot!`);
            if (froms === m.sender)
              return reply(`Tidak bisa bermain dengan diri sendiri!`);
            if (
              Object.values(suit).find(
                (v) =>
                  v.id.startsWith("suit") &&
                  [v.penantang, v.ditantang].includes(froms),
              )
            )
              return m.reply(
                `Orang yang kamu tantang sedang bermain suit bersama orang lain`,
              );
            let hadiah = randomNumber(2000, 3000);
            let timeout = 60 * 1000;
            let id = "suit_" + Date.now();

            suit[id] = {
              id: id,
              penantang: m.sender,
              ditantang: froms,
              status: "WAIT",
              hadiah: hadiah,
              chat: await RezzHost.sendMessage(
                m.chat,
                {
                  text: `*🎮 GAME SUIT 🎮*\n\n@${m.sender.split("@")[0]} menantang @${froms.split("@")[0]} untuk bermain suit\n\nKetik *Y atau N* untuk bermain\nY = menerima suit\nN = menolak suit\n\nHadiah : *$${hadiah}* balance`,
                  contextInfo: { mentionedJid: [froms, m.sender] },
                },
                { quoted: kalgans },
              ),
              timeout: timeout,
              waktu: setTimeout(() => {
                if (suit[id])
                  RezzHost.sendMessage(
                    m.chat,
                    {
                      text: `Waktu habis! @${froms.split("@")[0]} tidak merespon suit\nGame dibatalkan!`,
                      contextInfo: { mentionedJid: [froms] },
                    },
                    { quoted: suit[id].chat },
                  );
                delete suit[id];
              }, timeout),
            };
          } else reply("@tagtarget");
        }
        break;

      case "slot":
        {
          if (!m.isGroup) return reply(mess.group);
          let hadiah = randomNumber(2000, 3000);
          let emojis = ["😹", "🧢", "🗿"];
          let a = Math.floor(Math.random() * emojis.length);
          let b = Math.floor(Math.random() * emojis.length);
          let c = Math.floor(Math.random() * emojis.length);
          let x = [],
            y = [],
            z = [];
          for (let i = 0; i < 3; i++) {
            x[i] = emojis[a];
            a++;
            if (a == emojis.length) a = 0;
          }
          for (let i = 0; i < 3; i++) {
            y[i] = emojis[b];
            b++;
            if (b == emojis.length) b = 0;
          }
          for (let i = 0; i < 3; i++) {
            z[i] = emojis[c];
            c++;
            if (c == emojis.length) c = 0;
          }
          let end;
          if (a == b && b == c) {
            end = `JACKPOT! *$${hadiah} point*`;
            db.data.users[m.sender].balance += hadiah;
          } else if (a == b || a == c || b == c) {
            end = `Hampir Beruntung! *+1 Limits*`;
            db.data.users[m.sender].limit += 1;
          } else {
            end = `LOSE! *-$${hadiah}*`;
            if (hadiah > db.data.users[m.sender].balance) {
              ldb.data.users[m.sender].balance = 0;
            } else {
              db.data.users[m.sender].balance -= hadiah;
            }
          }
          let teks = `乂  *S L O T S*\n\n`;
          teks += `	[ ${x[0]} ${y[0]} ${z[0]} ]\n`;
          teks += `	[ ${x[1]} ${y[1]} ${z[1]} ]\n`;
          teks += `	[ ${x[2]} ${y[2]} ${z[2]} ]\n`;
          teks += `\n${end}`;
          reply(teks);
        }
        break;
      case "tictactoe":
      case "ttt":
      case "ttc":
      case "xox":
        if (!m.isGroup) return reply(mess.group);
        if (from in tictactoe) return reply(`Masih ada game yang blum selesai`);
        if (!froms)
          return reply(
            `Kirim perintah *${command}* @tag atau reply pesan orangnya!`,
          );
        if (froms === botNumber) return reply(`Tidak bisa bermain dengan bot!`);
        if (froms === sender) return reply(`Sad amat main ama diri sendiri`);
        var hadiah = randomNumber(10, 20);
        await reply(
          `@${sender.split("@")[0]} menantang @${froms.split("@")[0]} untuk bermain TicTacToe\n\n*Kirim (Y/N)* untuk bermain\n\nHadiah : ${hadiah} balance`,
        );
        tictactoe[from] = {
          id: from,
          status: null,
          hadiah: hadiah,
          penantang: sender,
          ditantang: froms,
          TicTacToe: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"],
        };
        break;
      case "delttt":
      case "delttc":
        if (!m.isGroup) return reply(mess.group);
        if (!(from in tictactoe))
          return reply(`Tidak ada sesi game tictactoe di grup ini`);
        if (isAdmins || isOwner) {
          delete tictactoe[from];
          reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`);
        } else if (tictactoe[from].penantang.includes(sender)) {
          delete tictactoe[from];
          reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`);
        } else if (tictactoe[from].ditantang.includes(sender)) {
          delete tictactoe[from];
          reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`);
        } else {
          reply(
            `Anda tidak bisa menghapus sesi tictactoe karena bukan pemain!`,
          );
        }
        break;
        
      //==============BATAS PAYMENT DAN LIST HARGA=================//
        case "payment":
                {
                  await RezzHost.sendMessage(m.chat, {
                    react: { text: "⏳", key: m.key },
                  });
                  const url = `${qris}`;
                  async function image(url) {
                    const { imageMessage } = await generateWAMessageContent(
                      {
                        image: {
                          url,
                        },
                      },
                      {
                        upload: RezzHost.waUploadToServer,
                      },
                    );
                    return imageMessage;
                  }

                  let msg = generateWAMessageFromContent(
                    m.chat,
                    {
                      viewOnceMessage: {
                        message: {
                          interactiveMessage: {
                            body: {},
                            carouselMessage: {
                              cards: [
                                {
                                  header: {
                                    imageMessage: await image(url),
                                    hasMediaAttachment: true,
                                  },
                                  body: {
                                    text: `▰▰▰▰▰▰[𝗣𝗔𝗬𝗠𝗘𝗡𝗧]▰▰▰▰▰▰▰▰
        > 𝗗𝗔𝗡𝗔 : ${dana}
        > 𝗢𝗩𝗢 : ${ovo}
        > 𝗚𝗢𝗣𝗔𝗬 : ${gopay} 
        > 𝗤𝗥𝗜𝗦𝗦 : 𝗦𝗖𝗔𝗡 𝗕𝗔𝗥𝗖𝗢𝗗𝗘 𝗬𝗔𝗡𝗚 𝗔𝗗𝗔 𝗗𝗜 𝗚𝗔𝗠𝗕𝗔𝗥 𝗜𝗡𝗜 𝗬𝗔 𝗞𝗔𝗞
        ▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

        𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗨𝗞𝗧𝗜 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗬𝗔 𝗞𝗔??
        ▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
        > 𝖩𝖨𝖪𝖠 𝖲𝖴𝖣𝖠𝖧 𝖣𝖨 𝖳𝖥 𝖲𝖨𝖫𝖠𝖧𝖪𝖠𝖭 𝖢𝖧𝖠𝖳 𝖮𝖶𝖭𝖤𝖱 𝖲𝖠𝖸𝖠 𝖸𝖠 𝖪𝖠𝖪, 𝖣𝖤𝖭𝖦𝖠𝖭 𝖬𝖤𝖭𝖦𝖪𝖫𝖨𝖪 𝖢𝖧𝖠𝖳 𝖮𝖶𝖭𝖤𝖱 𝖸𝖠𝖭𝖦 𝖣𝖨 𝖡𝖠𝖶𝖠𝖧
        ▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

        *TERIMAKASIH JIKA SUDAH MEMBACA SAMPAI SELESAIKAN*`,
                                  },
                                  nativeFlowMessage: {
                                    buttons: [
                                      {
                                        name: "cta_url",
                                        buttonParamsJson: `{"display_text":"𝖢𝖱𝖤𝖠𝖳𝖮𝖱","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`,
                                      },
                                    ],
                                  },
                                },
                              ],
                              messageVersion: 1,
                            },
                          },
                        },
                      },
                    },
                    {},
                  );

                  await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
                    messageId: msg.key.id,
                  });
                }
                break;


        
      case "dmff":
      case "listdmff":
      case "ff":
        {
          await RezzHost.sendMessage(m.chat, {
            react: { text: "⏳", key: m.key },
          });
          const url = `https://telegra.ph/file/7506187f999638fb12668.jpg`;
          async function image(url) {
            const { imageMessage } = await generateWAMessageContent(
              {
                image: {
                  url,
                },
              },
              {
                upload: RezzHost.waUploadToServer,
              },
            );
            return imageMessage;
          }

          let msg = generateWAMessageFromContent(
            m.chat,
            {
              viewOnceMessage: {
                message: {
                  interactiveMessage: {
                    body: {},
                    carouselMessage: {
                      cards: [
                        {
                          header: {
                            imageMessage: await image(url),
                            hasMediaAttachment: true,
                          },
                          body: {
                            text: `
*50    DIAMONDS    Rp7.000*
*70    DIAMONDS    Rp10.000*
*80    DIAMONDS    Rp11.000*

*100    DIAMONDS    Rp14.000*
*120    DIAMONDS    Rp16.500*
*140    DIAMONDS    Rp19.000*
*145    DIAMONDS    Rp20.000*
*170    DIAMONDS    Rp25.000*
*210    DIAMONDS    Rp30.000*
*300    DIAMONDS    Rp42.000*
*360    DIAMONDS    Rp50.000*
*425    DIAMONDS    Rp57.000*
*495    DIAMONDS    Rp66.000*
*520    DIAMONDS    Rp70.000*
*600    DIAMONDS    Rp80.000*
*655    DIAMONDS    Rp90.000*
*720    DIAMONDS    Rp94.000*

*Level Up            Rp16.000*
*Boyaah Pass    Rp45.000*
*M.Mingguan    Rp29.000*
*M.Bulanan        Rp85.000*
`,
                          },
                          nativeFlowMessage: {
                            buttons: [
                              {
                                name: "cta_url",
                                buttonParamsJson: `{"display_text":"ORDER","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`,
                              },
                            ],
                          },
                        },
                      ],
                      messageVersion: 1,
                    },
                  },
                },
              },
            },
            {},
          );

          await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
          });
        }
        break;

      //=================================================//
      default:
        if (budy.startsWith("=>")) {
          if (!isCreator) return false;
          function Return(sul) {
            sat = JSON.stringify(sul, null, 2);
            bang = util.format(sat);
            if (sat == undefined) {
              bang = util.format(sul);
            }
            return reply(bang);
          }
          try {
            reply(
              util.format(eval(`(async () => { return ${budy.slice(3)} })()`)),
            );
          } catch (e) {
            reply(String(e));
          }
        }
        if (budy.startsWith(">")) {
          if (!isCreator) return false;
          try {
            let evaled = await eval(budy.slice(2));
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
            await reply(evaled);
          } catch (err) {
            await reply(String(err));
          }
        }
        if (budy.startsWith("$")) {
          if (!isCreator) return false;
          exec(budy.slice(2), (err, stdout) => {
            if (err) return reply(err);
            if (stdout) return reply(stdout);
          });
        }
        //=================================================//
        if (isCmd && budy.toLowerCase() != undefined) {
          if (from.endsWith("broadcast")) return;
          if (m.isBaileys) return;
          let msgs = global.db.data.database;
          if (!(budy.toLowerCase() in msgs)) return;
          RezzHost.copyNForward(from, msgs[budy.toLowerCase()], true);
        }
    }
  } catch (err) {
    console.log(util.format(err));
  }
};
//=================================================//
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
