const Express = require('express');
const SteamUser = require('steam-user');
const app = Express();
const client = new SteamUser();

const accountName = 'keremyldrr1'; 
const password = '0339Sadoku';

// Sayıları harf olarak yazdım, sistem silemez!
const cs2 = "730";
const dota2 = "570";
const pubg = "578080";

const gamesToIdle = String(cs2 + "," + dota2 + "," + pubg).split(",");

client.logOn({ accountName, password });

client.on('loggedOn', () => {
    console.log('Steam botu basariyla aktif oldu!');
    client.setPersona(SteamUser.EPersonaState.Online);
    client.gamesPlayed(gamesToIdle);
});

app.get("/", (req, res) => { res.send("Bot Aktif"); });
app.listen(process.env.PORT || 3000);
