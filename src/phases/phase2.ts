import { PHASE2_GOAL } from "../utils";
import { create } from "../utils/creator";

export async function phase2() {
  const center = { x: 13, y: 13 };
  create(
    "Polyanet",
    {
      row: 13,
      column: 13,
    },
    "POST"
  );
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
