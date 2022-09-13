const { SlashCommandBuilder } = require('discord.js');
const dicerolls = [`Luck really isn't on your side today, huh? It's a 1.`, `A 2. Couldn't have been much worse.`, `It's a tree!- Oh, wait. A 3.`, `A four-se. Of course. That didn't work, did it?`, `A 5. Nothing funny here.`, `A 6. The devil, anyone?`, `Lucky number 7! Now can you get two more?`, `8, not bad.`, `Just under halfway up. A 9`, `A 10! Halfway up the scale!`, `11. Decent.`, `12. Could have been much worse. Could've also been better, though.`, `13. Feelin' lucky?`, `Aand it's come up 14!`, `15! Getting up there!`, `16, solid.`, `17. Rolling real high now, aren't you?`, `18! You're old eno- wait this isn't a birthday.`, `19! So CLOSE!`, `NAT 20 BAYBEE!`]

module.exports = {
	data: new SlashCommandBuilder()
		.setName('d20')
		.setDescription('Roll a d20!'),
	async execute(interaction) {
        const num = rollDice20();
        interaction.reply(`${dicerolls[num - 1]}`);

        function rollDice20() {
            const sides = dicerolls.length;
            return Math.floor(Math.random() * sides) + 1;
        }
	},
};