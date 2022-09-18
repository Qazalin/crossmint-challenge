import { phase2 } from "./phases/phase2";

// API errors are handled in the create() function in ./utils/creator.ts
phase2().catch((err) => {
  console.error(`There was an error: ${err}`);
});
