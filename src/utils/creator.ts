import fetch from "node-fetch";
import { API_BASE_URL, MY_ID } from "./constants";
import { PolyanetParams, APIResponse } from "./types";

type Planet = "Polyanet" | "Soloon" | "Cometh";

/** A simpler interface for interacting with the API with fewer lines of code
 * @param planet The planet to create
 * @param args The arguments for the planet
 * @returns The response from the API
 */
export async function create<T extends PolyanetParams>(
  planet: Planet,
  args: T,
  method: "POST" | "DELETE" = "POST"
) {
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

// A type gaurd for validating the arguments of the creator function before sending a request to the API
function validateArgs(args: Record<string, unknown>, planet: Planet) {
  switch (planet) {
    case "Soloon":
      if (!args.color) {
        throw new Error("Color is required for Soloon");
      }
      break;
    case "Cometh":
      if (!args.direction) {
        throw new Error("Direction is required for Cometh");
      }

      break;
    default:
      break;
  }
}
