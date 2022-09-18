import { PHASE2_GOAL, drawPolyanet, drawCometh, drawSoloon } from "../utils";

export async function phase2() {
  const positions = getAllRowPositions(); // for each row, get the positions of the planets in the Megaverse

  for (let i = 0; i < positions.length; i++) {
    const { row, column, planet } = positions[i];
    if (planet === "POLYANET") {
      await drawPolyanet(column, row);
    } else if (planet.includes("COMETH")) {
      const dir = planet.split("_")[0].toLowerCase();
      await drawCometh(column, row, dir);
    } else if (planet.includes("SOLOON")) {
      const color = planet.split("_")[0].toLowerCase();
      await drawSoloon(column, row, color);
    }
  }
}

function getAllRowPositions() {
  const positions: { row: number; column: number; planet: string }[] = [];
  PHASE2_GOAL.forEach((row, i) => {
    row.map((col, j) => {
      if (col !== "SPACE") {
        console.log(`(${i}, ${j}): ${col}`);
        positions.push({ row: i, column: j, planet: col });
      }
    });
  });

  return positions;
}
