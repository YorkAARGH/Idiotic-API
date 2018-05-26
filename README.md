# Idiotic API

[![Discord](https://discordapp.com/api/guilds/405783659388469248/widget.png?style=banner1)](https://discord.gg/PgCR8Rg)

***All Examples are based on Discord.js version 12, to back port it just remove `({ format: "ABC", size: XYZ })` from all avatar URL lines.***

You'll want to declare this somewhere central, so maybe attach it to the client.

```javascript
const Idiot = require("idiotic-api");
client.API = new Idiot.Client("your-token-here");
```

If you want to use the developer endpoint, you'll need to add `{ dev: true }` to your new Idiot Client like so.

```javascript
client.API = new Idiot.Client("your-token-here", { dev: true });
```

***Command Based Endpoints***

**Achievement**

```javascript
await message.channel.send(new MessageAttachment(
  await client.API.achievement(message.author.displayAvatarURL({ format: "png", size: 32 }), args.join(" ")),
  "achievement.png"));
```

**Example:**

![Achievement Get!, used the api!](https://i.imgur.com/AMtRJIi.png)

**Bat Slap**

```javascript
await message.channel.send(new MessageAttachment(
  await client.API.batSlap(message.author.displayAvatarURL({ format: "png", size: 128 }),
    message.mentions.users.first().displayAvatarURL({ format: "png", size: 128 })),
  "batslap.png"));
```

**Example:**

![POW](https://i.imgur.com/eUhtD0n.png)

**Wanted**

```javascript
await message.channel.send(new MessageAttachment(
  await client.API.wanted(message.author.displayAvatarURL({ format: "png", size: 128 })),
  "wanted.png"));
```

**Example:**

![Dead or alive](https://i.imgur.com/3wClggw.png)

**pls**

```javascript
await message.channel.send(new MessageAttachment(
  await client.API.pls((message.mentions.members.first() || message.member).displayName),
  "pls.png"));
```

**Example:**

![York pls](https://i.imgur.com/504PYeg.png)

***Greeting/Farewell Based Endpoints***

**Anime Welcome**
_Placed inside your GuildMemberAdd event_

```javascript
await client.API.welcome("anime", member.user.bot, member.user.displayAvatarURL({ format: "png", size: 128 }), member.user.tag,`${member.guild.name}#${member.guild.memberCount}`);
```

**Example:**

![Example welcome image](https://i.imgur.com/MAvDuNR.png)