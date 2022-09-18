// I'd normally have types in a seperate src/types dir but the scale of types is a lot smaller here

// Use this base type for Polyanets and extend it for other planets
export interface PolyanetParams extends Record<string, string> {
  candidateId?: string;
  row: string;
  column: string;
}

export enum SoloonColor {
  "blue",
  "red",
  "purple",
  "white",
}

export enum ComethDirection {
  "top",
  "down",
  "left",
  "right",
}

export interface SoloonsParams extends PolyanetParams {
  color: string;
}

export interface ComethParams extends PolyanetParams {
  direction: string;
}

export interface APIResponse {
  error: boolean;
  message?: string; // the successsful response doesn't have a message
}

export type PlanetTypes = "Polyanet" | "Soloon" | "Cometh";
export type PlanetsPhase2 =
  | "POLYANET"
  | "RIGHT_COMETH"
  | "LEFT_COMETH"
  | "DOWN_COMETH"
  | "UP_COMETH"
  | "BLUE_SOLOON"
  | "RED_SOLOON"
  | "PURPLE_SOLOON"
  | "WHITE_SOLOON";
