const Express = require('express');
const SteamUser = require('steam-user');
const app = Express();
const client = new SteamUser();

// Senin telefondan söktüğün o ömürlük gizli bilet anahtarın
const tokenKey = '76561199155824159%7C%7CeyAidHlwIjogIkpXVCIsICJhbGciOiAiRWREU0EiIH0.eyAiaXNzIjogInI6MDAwOF8yOENBMkY0MV8wMDlFOCIsICJzdWIiOiAiNzY1NjExOTkxNTU4MjQxNTkiLCAiYXVkIjogWyAid2ViOmNvbW11bml0eSIgXSwgImV4cCI6IDE3ODkyNDExOTQsICJuYmYiOiAxNzgwNTEzNjQ2LCAiaWF0IjogMTt8OTE1MzY0NiwgImp0aSI6ICIwMDA3XzI4Q0EyRjQwX0I1NUQyIiwgIm9hdCI6IDE3ODkxNTM2NDYsICJydF9leHAiOiAxODA3Mjk4MDU4LCAicGVyIjogMCwgImlwX3N1YmplY3QiOiAiNTEuMTU4LjIwNC4yMzUiLCAiaXBfY29uZmlybWVyIjogIjUxLjE1OC4yMDQuMjM1IiB9.Wk4LDwn-F34IfUivo3VC4Bx-3TO7cRD5AWzZV8EzjagsjKeEDrOE2Yw06rb3NchHiH6SXWyi1k2eddED45gwBA';

// Yapay zekanın silemeyeceği, sunucunun şak diye tanıyacağı resmi oyun listesi
const gamesToIdle = Array.from([730, 570, 578080]);

client.logOn({ refreshToken: tokenKey });

client.on('loggedOn', () => {
    console.log('Steam botu basariyla aktif oldu!');
    client.setPersona(SteamUser.EPersonaState.Online);
    client.gamesPlayed(gamesToIdle);
});

app.get("/", (req, res) => { res.send("Bot Aktif"); });
app.listen(process.env.PORT || 3000);
