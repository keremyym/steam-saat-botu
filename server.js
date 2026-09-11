const Express = require('express');
const SteamUser = require('steam-user');
const app = Express();
const client = new SteamUser();

// Seninkini buraya birebir yapıştırdım reis, hiçbir şeye dokunma
const refreshToken = '76561199155824159%7C%7CeyAidHlwIjogIkpXVCIsICJhbGciOiAiRWREU0EiIH0.eyAiaXNzIjogInI6MDAwOF8yOENBMkY0MV8wMDlFOCIsICJzdWIiOiAiNzY1NjExOTkxNTU4MjQxNTkiLCAiYXVkIjogWyAid2ViOmNvbW11bml0eSIgXSwgImV4cCI6IDE3ODkyNDExOTQsICJuYmYiOiAxNzgwNTEzNjQ2LCAiaWF0IjogMTc4OTE1MzY0NiwgImp0aSI6ICIwMDA3XzI4Q0EyRjQwX0I1NUQyIiwgIm9hdCI6IDE3ODkxNTM2NDYsICJydF9leHAiOiAxODA3Mjk4MDU4LCAicGVyIjogMCwgImlwX3N1YmplY3QiOiAiNTEuMTU4LjIwNC4yMzUiLCAiaXBfY29uZmlybWVyIjogIjUxLjE1OC4yMDQuMjM1IiB9.Wk4LDwn-F34IfUivo3VC4Bx-3TO7cRD5AWzZV8EzjagsjKeEDrOE2Yw06rb3NchHiH6SXWyi1k2eddED45gwBA';

const cs2 = "730";
const dota2 = "570";
const pubg = "578080";

const gamesToIdle = String(cs2 + "," + dota2 + "," + pubg).split(",");

// Artık şifresiz, doğrudan senin bu özel biletinle güvenli giriş yapıyor
client.logOn({ refreshToken: refreshToken });

client.on('loggedOn', () => {
    console.log('Steam botu basariyla aktif oldu!');
    client.setPersona(SteamUser.EPersonaState.Online);
    client.gamesPlayed(gamesToIdle);
});

app.get("/", (req, res) => { res.send("Bot Aktif"); });
app.listen(process.env.PORT || 3000);
