// I'd normally have types in a seperate src/types dir but the scale of types is a lot smaller here

export interface APIParams extends Record<string, string> {
  candidateId: string;
  row: string;
  column: string;
}

export interface APIResponse {
  error: boolean;
  message: string;
}
