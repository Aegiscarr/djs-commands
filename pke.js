const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pke')
		.setDescription('Shows an explanation about PluralKit and multiplicity'),
	async execute(interaction) {
        const pkeEmbed = new EmbedBuilder()
            .setColor(0x8c1bb1)
            .setTitle('Why does that person have the [BOT] tag?')
            .setDescription("On this server we cater to people who experience plurality (or multiplicity) \n Bots like PluralKit help these people express themselves easier. \n \n Due to discord limitations, these people show up with the [BOT] tag, but rest assured they are not bots.")
            .addFields(
                {name: "A brief explanation of plurality", value: "There's a lot more to it than what I'm showing here, but essentially plurality is the existence of multiple self-aware entities (they don't necessarily have to be people) in one brain. It's like having roommates inside your head."},
                {name: "Better explanations and more resources", value: `[MoreThanOne](https://morethanone.info/)`}
            )
            interaction.reply({embeds: [pkeEmbed]}).catch(error => {})
	},
};