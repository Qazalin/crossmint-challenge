// I'd normally have types in a seperate src/types dir but the scale of types is a lot smaller here

// Use this base type for Polyanets and extend it for other planets
export interface PolyanetParams extends Record<string, unknown> {
  candidateId?: string;
  row: number;
  column: number;
}

export type SoloonColors = "blue" | "red" | "purple" | "white";
export interface SoloonsParams extends PolyanetParams {
  color: SoloonColors;
}

export type ComethDirections = "up" | "down" | "left" | "right";
export interface ComethParams extends PolyanetParams {
  direction: ComethDirections;
}

export interface APIResponse {
  error: boolean;
  message?: string; // the successsful response doesn't have a message
}
export type Planets =
  | "POLYANET"
  | "RIGHT_COMETH"
  | "LEFT_COMETH"
  | "DOWN_COMETH"
  | "UP_COMETH"
  | "BLUE_SOLOON"
  | "RED_SOLOON"
  | "PURPLE_SOLOON"
  | "WHITE_SOLOON";
