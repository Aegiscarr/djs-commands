const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('devexcuse')
		.setDescription('Gets a random developer excuse from developerexcuses.com'),
	async execute(interaction) {    
      const quote = getDeveloperExcuse()
        .then(({quote}) => {
          interaction.reply(`"` + quote + `"`).catch(error => {})
        })

        async function getDeveloperExcuse() {
            try {
              const res = await fetch("https://api.tabliss.io/v1/developer-excuses");
              const body = await res.json();
          
              return {
                quote: body.data,
              };
            } catch (err) {
              return {
                quote: "Unable to get a new developer excuse.",
              };
            }
          };
	},
};