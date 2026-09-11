const Express = require('express');
const SteamUser = require('steam-user');
const app = Express();
const client = new SteamUser();

const accountName = 'keremyldrr1'; 
const password = '0339Sadoku';

// Sunucunun %100 algılayacağı kesin ve gerçek oyun listesi
const gamesToIdle = [730, 570, 578080];

client.logOn({ accountName, password });

client.on('loggedOn', () => {
    console.log('Steam botu basariyla aktif oldu!');
    client.setPersona(SteamUser.EPersonaState.Online);
    client.gamesPlayed(gamesToIdle);
});

app.get("/", (req, res) => { res.send("Bot Aktif"); });
app.listen(process.env.PORT || 3000);
