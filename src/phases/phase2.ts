import { APIParams, PHASE2_GOAL } from "../utils";
import { create } from "../utils/creator";

export async function phase2() {
  // Top and bottom have the same pattern, right and left have the same pattern
  const points: APIParams[] = [];

  // Step 1: make the + in the center
  const CENTER = 13;

  // the direactions of each point of the +
  const center = { row: CENTER, column: CENTER };
  const left = { row: CENTER, column: CENTER - 1 };
  const right = { row: CENTER, column: CENTER + 1 };
  const bottom = { row: CENTER - 1, column: CENTER };
  const top = { row: CENTER + 1, column: CENTER };
  points.push(center, left, right, bottom, top);

  // column is constant, row is increasing

  /* 
  for (let i = 0; i < points.length; i++) {
    await create("Polyanet", points[i]);
    }
*/
}

// discovery
function test() {
  const dim_len = PHASE2_GOAL[0].length;
  const start = 2;
  const end = 24;

  const ps = [];
  for (let i = 0; i < PHASE2_GOAL.length; i++) {
    const row = PHASE2_GOAL[i];
    console.log(row.length);
    row.forEach((col, j) => {
      if (col === "POLYANET") {
        ps.push({ x: i, y: j });
      }
    });
  }

  const d = ps.filter((p) => p.x === p.y);
  console.log(d);
}

// trying to find the patterns that resulted in this
function explore() {
  const dim_len = PHASE2_GOAL[0].length;
  const start = 2;
  const end = 24;

  const ps = [];
  for (let i = 0; i < PHASE2_GOAL.length; i++) {
    const row = PHASE2_GOAL[i];
    console.log(row.length);
    row.forEach((col, j) => {
      if (col === "POLYANET") {
        ps.push({ x: i, y: j });
      }
    });
  }

  console.log(ps);
}
