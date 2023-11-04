const config = require("../../../config.json");


module.exports = {
    name: 'help',
    description: 'Shows help menu',

    
    execute: async (interaction, client, InteractionCreate) => {
        const embed = {
            title: `Hello~`,
            description: (`Welcome to your new bot~`),
            fields: [
                {
                    name: `Discord`,
                    value: `[Discord Support Server](https://discord.gg/DNHdpx8wwn)`,
                    inline: false
                }
            ],
            timestamp: new Date().toISOString(),
            footer: {text: `Created with ♥ by @axle.coffee`},
            };
    

            await interaction.reply({  embeds: [ embed ] })
    }
};;