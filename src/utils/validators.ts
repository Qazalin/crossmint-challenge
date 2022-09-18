// Type gaurds and parameter validators that produce runtime errors, to make the API calls safer
import { ComethDirection, PlanetTypes, SoloonColor } from "./types";

// A type gaurd for validating the arguments of the creator function before sending a request to the API
export function validateArgs(
  args: Record<string, string>,
  planet: PlanetTypes
) {
  switch (planet) {
    case "Soloon":
      if (!args.color) {
        throw new Error("Color is required for Soloon");
      }
      isStringInEnum(args.color, SoloonColor);
      break;
    case "Cometh":
      if (!args.direction) {
        throw new Error("Direction is required for Cometh");
      }
      isStringInEnum(args.direction, ComethDirection);
      break;
    default:
      break;
  }
}

// checks if a string is a member of an Enum
export function isStringInEnum(str: string, en: any) {
  if (!Object.values(en).includes(str)) {
    throw new Error(`Invalid string: ${str}`);
  }
}
