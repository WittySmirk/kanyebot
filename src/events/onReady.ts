import { Client } from "discord.js";
import { REST } from '@discordjs/rest'
import { CommandList } from "../commands/_CommandList";
import { Routes } from "discord-api-types/v9";

const onReady = async (bot: Client) => {
    const rest = new REST({ version: "9" }).setToken(
        process.env.BOT_TOKEN as string
      );
    
      const commandData = CommandList.map((command) => command.data.toJSON());
    
      await rest.put(
        Routes.applicationCommands(
          bot.user?.id || "missing id"
        ),
        { body: commandData }
      );
}

export default onReady;