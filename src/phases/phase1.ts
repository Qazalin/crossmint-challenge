import fetch from "node-fetch";
import { PolyanetParams, APIResponse, API_BASE_URL, MY_ID } from "../utils";
import { dropDuplicates } from "../utils/dropDuplicates";

export default async function phase1() {
  const dims = 10; // 10x10 grid
  // The first 2 rows and columns from each side are empty
  const startIdx = 2;
  const endIdx = dims - startIdx;
  const center = dims / 2 + 1;

  type Point = {
    x: number;
    y: number;
  };

  // draw an x from the center
  const points: Point[] = [];

  for (let i = startIdx; i < center; i++) {
    points.push({ x: i, y: i });
    points.push({ x: i, y: dims - i });
    points.push({ x: dims - i, y: i });
    points.push({ x: dims - i, y: dims - i });
  }

  const uniquePoints = dropDuplicates(points, ["x", "y"]); // The loop has some duplicate items in it, to save API requests, we drop the duplicates

  for (const point of uniquePoints) {
    const params: PolyanetParams = {
      candidateId: MY_ID,
      row: point.x,
      column: point.y,
    };
    const res = await fetch(API_BASE_URL + "/polyanets", {
      method: "POST",
      body: JSON.stringify(params),
      headers: { "Content-Type": "application/json" },
    });

    const data: APIResponse = await res.json();
    if (data.error) {
      console.error(`Error: ${data.message}`);
    } else {
      console.log(`Success: (${point.x}, ${point.y})`);
    }
  }
}
