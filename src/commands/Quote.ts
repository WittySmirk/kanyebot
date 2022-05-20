import { SlashCommandBuilder } from '@discordjs/builders'
import { Command } from '../interfaces/Command'
import fetchQuote from '../fetchQuote'

export const quote: Command = {
    data: new SlashCommandBuilder().setName("quote").setDescription("Gives a random Kanye Quote"),
    run: async (interaction) => {
        let quote = await fetchQuote()
        await interaction.deferReply()
        console.log(quote)
        await interaction.editReply(quote)
    }
}