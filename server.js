const Express = require('express');
const SteamUser = require('steam-user');
const app = Express();
const client = new SteamUser();

// Tokenı kodun içinden söktük, Render panelinden çekecek
const tokenKey = process.env.STEAM_TOKEN;
const gamesToIdle =;

client.logOn({ refreshToken: tokenKey });

client.on('loggedOn', () => {
    console.log('Steam botu basariyla aktif oldu!');
    client.setPersona(SteamUser.EPersonaState.Online);
    client.gamesPlayed(gamesToIdle);
});

app.get("/", (req, res) => { res.send("Bot Aktif"); });
app.listen(process.env.PORT || 3000);
