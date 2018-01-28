# Idiotic API

This is a canvas based API to be used primarily with Discord Bots, so all these examples will be based using **Discord.js Version 12** methods

## **ATTENTION**

You cannot deconstruct the package due to how it's coded, You need to require and create a new instance of the module as shown in these examples.

## Command Based Endpoints

## Achievement

```javascript
const Idiot = require("idiotic-api");
const API = new Idiot.Client("your-token-here");

await message.channel.send(new MessageAttachment(
	await API.achievement(message.author.displayAvatarURL({format:"png", size:32}), args.join(" ")),
	"achievement.png"));
```

## Bat Slap

```javascript
const Idiot = require("idiotic-api");
const API = new Idiot.Client("your-token-here");

await message.channel.send(new MessageAttachment(
	await API.batslap(message.author.displayAvatarURL({format:"png", size:128}),
		message.mentions.users.first().displayAvatarURL({format:"png", size:128})),
	"batslap.png"));
```

## Wanted

```javascript
const Idiot = require("idiotic-api");
const API = new Idiot.Client("your-token-here");

await message.channel.send(new MessageAttachment(
	await API.wanted(message.author.displayAvatarURL({format:"png", size:128})),
	"batslap.png"));
```

## pls

```javascript
const Idiot = require("idiotic-api");
const API = new Idiot.Client("your-token-here");

await message.channel.send(new MessageAttachment(
	await API.pls((message.mentions.members.first() || message.member).displayName),
	"pls.png"));
```

## Greeting/Farewell Based Endpoints

## Gearz Welcome

```javascript
const Idiot = require("idiotic-api");
const API = new Idiot.Client("your-token-here");
const { user } = member;

await message.channel.send(new MessageAttachment(
	await API.welcome("gearz", user.bot, user.tag,`${member.guild.name}#${member.guild.memberCount}`),
	"welcome"));
```
