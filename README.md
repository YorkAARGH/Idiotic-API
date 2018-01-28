# Idiotic API

This is a canvas based API to be used primarily with Discord Bots, so all examples will be based using **Discord.js Version 12** methods.

## Installation

You'll want to declare this somewhere central, so maybe attach it to the client.

```javascript
const IdioticAPI = require("idiotic-api");
client.api = new IdioticAPI.Client("your-token-here");
```

## Command Based Endpoints

### Achievement

```javascript
await message.channel.send(new MessageAttachment(
  await client.api.achievement(message.author.displayAvatarURL({format:"png", size:32}), args.join(" ")),
  "achievement.png"));
```

### Bat Slap

```javascript
await message.channel.send(new MessageAttachment(
  await client.api.batslap(message.author.displayAvatarURL({format:"png", size:128}),
    message.mentions.users.first().displayAvatarURL({format:"png", size:128})),
  "batslap.png"));
```

### Wanted

```javascript
await message.channel.send(new MessageAttachment(
  await client.api.wanted(message.author.displayAvatarURL({format:"png", size:128})),
  "wanted.png"));
```

### pls

```javascript
await message.channel.send(new MessageAttachment(
  await client.api.pls((message.mentions.members.first() || message.member).displayName),
  "pls.png"));
```

## Greeting/Farewell Based Endpoints

### Gearz Welcome

```javascript
const { user } = member;

await message.channel.send(new MessageAttachment(
  await client.api.welcome("gearz", user.bot, user.displayAvatarURL({ format: "png" }), user.tag,`${member.guild.name}#${member.guild.memberCount}`),
  "welcome"));
```
