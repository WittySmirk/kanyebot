import { Interaction } from "discord.js";
import { CommandList } from "../commands/_CommandList";

const onInteraction = async (interaction: Interaction) => {
    if(interaction.isCommand()) {
        for(const Command of CommandList) {
            if(interaction.commandName === Command.data.name) {
                await Command.run(interaction)
                break
            }
        }
    }
}

export default onInteraction;