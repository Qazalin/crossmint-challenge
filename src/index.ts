import { phase2 } from "./phases/phase2";

// API errors are handled in the create() function in ./utils/creator.ts
phase2().catch((e) =>
  console.error(`There was an error in running the function: ${e}`)
);
