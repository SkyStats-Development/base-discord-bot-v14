# SkyStats Development Bot Blueprint

### This template can be used free of charge to any developer looking to make a bot. Though, it is designed for our systems!

This bot has been featured in

- SkyStats Discord
- Hyperbolic
- Cardboard
- BetBoost Nitro Shop
- And more!

# Requirements

- [pnpm](https://pnpm.io) installed `npm i pnpm -g`
- [pm2](https://pm2.keymetrics.io) installed `npm i pm2 -g`
- [node.js](https://nodejs.org/en) v20 with npm (windows, mac and linux tested)

# Installing

- extract the code
- in the main directory of the package, create a file named `.env` exactly like that
- open the file and add

  ```apache
  TOKEN=placeholder (leave as is)
  PROD= This is where you put your production bot token
  DEV= this is where you put your dev testing token, use ^ if you dont have 2 bots
  ID=placeholder (leave as is)
  PRODID= The discord bot id matching the bot PROD=
  DEVID= the discord bot id matching the bot DEV=

  ```
- save the file and run the following scripts

  - `npm run build` to build the dependencies (you can also use `pnpm i`)
  - `npm run dev` or `npm run start` to start the bot!
  - to debug simply type node ``./start/developer_start.js``
  - if everything works, have fun!

# Credits

- [DuckySoLucky](https://github.com/DuckySoLucky) for their [original template](https://github.com/DuckySoLucky/discord-bot-blueprint-v14) (it was missing multiple things)
- a few others

# Licence

Licence is viewable in the licence file

# Version

- 3.0.4
