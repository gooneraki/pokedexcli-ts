import { getCommands } from "./command.js";

export function commandHelp() {
  console.log("Welcome to the Pokedex!");
  console.log("Usage:\n");

  const commands = getCommands();

  for (let commandKey in commands) {
    console.log(`${commandKey}: ${commands[commandKey].description}`);
  }
}
