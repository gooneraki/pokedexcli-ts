import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";

type CLICommand = {
  name: string;
  description: string;
  callback: (commands: Record<string, CLICommand>) => void;
};

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Shows the list of commands",
      callback: commandHelp,
    },
  };
}
