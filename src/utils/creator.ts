import fetch from "node-fetch";
import { API_BASE_URL, MY_ID } from "./constants";
import { PolyanetParams, APIResponse, PlanetTypes } from "./types";
import { validateArgs } from "./validators";

/** A simpler interface for interacting with the API with fewer lines of code
 * @param planet The planet to create
 * @param args The arguments for the planet
 * @returns The response from the API
 */
export async function create<T extends PolyanetParams>(
  planet: PlanetTypes,
  args: T,
  method: "POST" | "DELETE" = "POST"
) {
  // validate the arguments based on the planet type and throw a runtime error if the arguments aren't valid before going to the API
  validateArgs(args, planet);
  args.candidateId = MY_ID;

  const res = await fetch(API_BASE_URL + "/" + planet.toLowerCase() + "s", {
    method: method,
    body: JSON.stringify(args),
    headers: { "Content-Type": "application/json" },
  });

  const data: APIResponse = await res.json();
  if (data.error) {
    console.error(`The was an error: ${data.message}`);
  } else {
    console.log(
      `Successfuly performed ${method} for ${planet} at ${args.row}, ${args.column}`
    );
  }
}
