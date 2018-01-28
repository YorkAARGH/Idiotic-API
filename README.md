# Idiotic API

This is a canvas based API to be used primarily with Discord Bots, so all these examples will be based using **Discord.js Version 12** methods

## **ATTENTION**

You cannot deconstruct the package due to how it's coded, You need to require and create a new instance of the module as shown in these examples.

## Command Based Endpoints

## Achievement

```js
const Idiot = require("idiotic-api");
const API = new Idiot.Client("your-token-here");
await message.channel.send({ files: [{ attachment: await API.achievement(message.author.displayAvatarURL({format:"png", size:32}), args.join(" ")), name: "achievement.png" }] });
```

## Bat Slap

```js
const Idiot = require("idiotic-api");
const API = new Idiot.Client("your-token-here");
await message.channel.send({ files: [{ attachment: await API.batslap(message.author.displayAvatarURL({format:"png", size:128}), message.mentions.users.first().displayAvatarURL({format:"png", size:128})), name: "batslap.png" }] });
```

## Wanted

```js
const Idiot = require("idiotic-api");
const API = new Idiot.Client("your-token-here");
await message.channel.send({ files: [{ attachment: await API.wanted(message.author.displayAvatarURL({format:"png", size:128})), name: "wanted.png" }] });
```

## pls

```js
const Idiot = require("idiotic-api");
const API = new Idiot.Client("your-token-here");
await message.channel.send({ files: [{ attachment: await API.pls((message.mentions.members.first() || message.member).displayName), name: "pls.png" }] });
```

## Greeting/Farewell Based Endpoints

## Gearz Welcome

```js
const Idiot = require("idiotic-api");
const API = new Idiot.Client("your-token-here");
const user = member.user;
await message.channel.send({ files: [{ attachment: await API.welcome("gearz", user.bot, user.tag,`${member.guild.name}#${member.guild.memberCount}`), name: "pls.png" }] });
```