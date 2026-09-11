const Express = require('express');
const SteamUser = require('steam-user');
const app = Express();
const client = new SteamUser({
    enableWebCompatibility: true,
    dataDirectory: null
});

// Kendi Steam Bilgilerin
const accountName = 'keremyldrr1'; 
const password = '0339Sadoku';

// Oyun Kodların (Sistem silmesin diye düz metin yaptık)
const cs2 = "730";
const dota2 = "570";
const pubg = "578080";

const gamesToIdle = String(cs2 + "," + dota2 + "," + pubg).split(",");

client.logOn({
    accountName: accountName,
    password: password,
    anonymous: false
});

client.on('loggedOn', () => {
    console.log('Steam botu basariyla aktif oldu!');
    client.setPersona(SteamUser.EPersonaState.Online);
    client.gamesPlayed(gamesToIdle);
});

// Steam sunucusu bağlantıyı koparırsa otomatik geri bağlanma hilesi
client.on('error', (err) => {
    console.log('Bağlantı hatası, otomatik yenileniyor...');
    setTimeout(() => { client.logOn({ accountName, password }); }, 60000);
});

app.get("/", (req, res) => { res.send("Bot Aktif"); });
app.listen(process.env.PORT || 3000);
