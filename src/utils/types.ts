// I'd normally have types in a seperate src/types dir but the scale of types is a lot smaller here

// Use this base type for Polyanets and extend it for other planets
export interface APIParams extends Record<string, unknown> {
  candidateId?: string;
  row: number;
  column: number;
}

export interface SoloonsParams extends APIParams {
  color: "blue" | "red" | "purple" | "white";
}

export interface ComethParams extends APIParams {
  direction: "up" | "down" | "left" | "right";
}

export interface APIResponse {
  error: boolean;
  message?: string; // the successsful response doesn't have a message
}
