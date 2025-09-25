import type { State } from "./state.js";

async function commonMap(state: State, url?: string) {
  const locations = await state.pokeAPI.fetchLocations(url);

  state.nextLocationsURL = locations.next;
  state.prevLocationsURL = locations.previous;

  for (let loc of locations.results) {
    console.log(loc.name);
  }
}

export async function commandMapForward(state: State) {
  return commonMap(state, state.nextLocationsURL);
}

export async function commandMapBack(state: State) {
  if (!state.prevLocationsURL) {
    throw new Error("you're on the first page");
  }

  return commonMap(state, state.prevLocationsURL);
}
