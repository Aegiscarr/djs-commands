const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('randomcolor')
		.setDescription('Gives a random color'),
	async execute(interaction) {
        // colors
        const red = randomNumber255()
        const green = randomNumber255()
        const blue = randomNumber255()

        const colorEmbed = new EmbedBuilder()
            .setColor([red, green, blue])
            .setTitle('Here\'s your random color!')
            .setThumbnail('https://singlecolorimage.com/get/' + RGBToHex(red,green,blue) + '/100x100')
            .addFields(
                { name: 'RGB', value: '[' + red.toString() + ', ' + green.toString() + ', ' + blue.toString() + ']'},
                { name: 'Hex', value:  '#' + RGBToHex(red, green, blue)},
                {name : 'HSL', value:  RGBtoHSL(red,green,blue)}
            )

            interaction.reply({embeds: [colorEmbed]}).catch(error => {})

        function randomNumber255(){
        return Math.floor(Math.random() * 255);
        }

        function RGBToHex(r,g,b) {
            r = red.toString(16)
            g = green.toString(16)
            b = blue.toString(16)

            if (r.length == 1)
                r = "0" + r;
            if (g.length == 1)
                g = "0" + g;
            if (b.length == 1)
                b = "0" + b;

                return r.toString() + g.toString() + b.toString();
        }

        function RGBtoHSL(r,g,b) {
            r /= 255;
            g /= 255;
            b /= 255;

            let cmin = Math.min(r,g,b),
                cmax = Math.max(r,g,b),
                delta = cmax - cmin,
                h = 0,
                s = 0,
                l = 0;

            if (delta == 0)
                h = 0;

            else if (cmax == r)
                h = ((g - b) / delta) % 6;

            else if (cmax == g)
                h = (b - r) / delta + 2;

            else
                h = (r - g) / delta + 4;

            h = Math.round(h * 60);
  

            if (h < 0)
                h += 360;

            l = (cmax + cmin) / 2;

            s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    

            s = +(s * 100).toFixed(1);
            l = +(l * 100).toFixed(1);

            return "hsl(" + h + "," + s + "%," + l + "%)";

        }
	},
};