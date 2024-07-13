//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "2347045845726";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0hXdDZZOFo1a0lsWlgvOUVzTkRpdmVGOTM0a1NpV0YwTzI3UXpDazJFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk43U1dIRHl5NkFHUWhUTFJycHpVYnlqSXMyWjFybUZFZDB3UTh6a3dFMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1QkpSOGtWbXRWQnpiK3o3TGQrVlBxaDJIYjlPajZPclpIZHZlcG95NjBFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0T3E3UzRuYmZjeWVkaDZoZmdHTVlMQkcwdlk5Y1Y5MFlBQXZPdEh5MzJNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9EeXNsL2VXcTE2SWhsUDBmTTJBd25sdzRBZFBMSVYrMFpYZFk5RmRLMHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNpaE1kZUhnM3pqNnE1TSt4dVZxUC8zS0M2NGdzQUJSMVE3dTJKaWg3Z3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUU3UTZhcTExV2dJMVA4OWZPMkpqV092SmljdjZham00bG0vLzUweDZHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ21PR0crVE1rYVRnQ1JadXNSTkxFRHRoSVZiaHRrTnpZSTRNQ2tYODkzTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii83V0FiR0I1SWhabDROaXpScXBlQzc2bXZSSTYxS1RjYUh4aFRaZlZCa0dFMGxTZGY0VWIvbG8xdXNhTDJYcC80ZkVTQzd0LytYaEg0dG5kMUlwMGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQyLCJhZHZTZWNyZXRLZXkiOiJ2Yk5KZEEvc3B0S1d5b1hCYjZLK3Q2aE9EK3B5OVhpYzg5YUxJb0VlM1pBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJNb3hiVGFhUFFUaUw3N1hicm44LTRnIiwicGhvbmVJZCI6IjBhODMxNTQyLWJiOGMtNGM5NS04YzVkLTNkYjI3ZjI2NTg2NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrd2E4OHpSOW5BdU5kaHAySUZ3QnlnMWJzMHM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQURBaEc5UktGcVdMZkFqSUdDNHpPajJQRXBBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkYzUDQ2QUFEIiwibWUiOnsiaWQiOiIyMzQ3MDQ1ODQ1NzI2OjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiw5fNnMOX4oKmxYLigrXJhuKCssmEyY40NTbDl82cw5cifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pMb25rb1FxZWZJdEFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9pUVZvMHRhN0FqYktCOUFybTZXOVJsU21sa2hTWjdJT2RJbE1WS0Z4akk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlZjWkFUU2FhUEZXd3djWGdiUGNMbVc2UVdBbEhTZFB1UjJaRlR5b2xyelVic1IrZXViQVI4Y2RzWWloTWxPVmdidktqdmtOSUxSNGJWdEtkUmhLVERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlZ2I0ZitGS0c5cjNkR0ZnOWJTNzhla1c2SDByWTRzeCtvYyswOFpZVmxDWTgyOVlpMGZKNkFhNXIrWHRNUHpIVEpvWkxNUDVTNzhTS2xzSjVJSXdoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNDU4NDU3MjY6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUb2tGYU5MV3V3STJ5Z2ZRSzV1bHZVWlVwcFpJVW1leURuU0pURlNoY1l5In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwODU3NTI1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUp6bSJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "hey 😪",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "×͜×",
  botname: process.env.BOT_NAME || "Wₐᵣₐᵢ ₒ𝚗ᵢ-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "Wₐᵣₐᵢ ₒ𝚗ᵢ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
