// I'd normally have types in a seperate src/types dir but the scale of types is a lot smaller here

export interface APIParams {
  candidateId: string;
  row: number;
  column: number;
}

export interface APIResponse {
  error: boolean;
  message: string;
}
