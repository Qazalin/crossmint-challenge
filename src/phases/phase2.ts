import {
  PolyanetParams,
  ComethDirections,
  PHASE2_GOAL,
  SoloonColors,
  drawPolyanet,
  drawCometh,
  drawSoloon,
  Planets,
  create,
} from "../utils";

export async function phase2() {
  const positions = getAllRowPos(); // for each row, get the positions of the planets in the Megaverse

  for (let i = 0; i < positions.length; i++) {
    const { row, column, planet } = positions[i];
    if (planet === "POLYANET") {
      await drawPolyanet(column, row);
    } else if (planet.includes("COMETH")) {
      const dir = planet.split("_")[0].toLowerCase() as ComethDirections;
      await drawCometh(column, row, dir);
    } else if (planet.includes("SOLOON")) {
      const color = planet.split("_")[0].toLowerCase() as SoloonColors;
      await drawSoloon(column, row, color);
    }
  }
}

function getAllRowPos() {
  const positions: { row: number; column: number; planet: Planets }[] = [];
  PHASE2_GOAL.forEach((row, i) => {
    row.map((col, j) => {
      if (col !== "SPACE") {
        console.log(`(${i}, ${j}): ${col}`);
        positions.push({ row: i, column: j, planet: col as Planets });
      }
    });
  });

  return positions;
}

// trying to find the patterns that resulted in this
function getPolyanetPostitions() {
  const polsNum = [];
  const polsIdx = [];
  PHASE2_GOAL.forEach((row, i) => {
    const pols = [];
    row.forEach((col, j) => {
      if (col === "POLYANET") {
        pols.push(j);
      }
    });
    console.log(
      `for the ${i}th row there are ${pols.length} pols in columns: ${pols}`
    );

    console.log(
      `${pols[pols.length - 1] - pols[0]}, ${pols[pols.length - 2] - pols[1]} `
    );

    polsNum.push(pols.length);
    polsIdx.push(pols);
  });
  console.log("----------------------");
  console.log(polsNum);
}

function getComethPositions() {
  const ethNum = [];
  const ethIdx = [];
  PHASE2_GOAL.forEach((row, i) => {
    const eths = [];
    row.forEach((col, j) => {
      if (col.includes("COMETH")) {
        eths.push({ col: j, dir: col.split("_")[0].toLowerCase() });
      }
    });
    console.log(
      `for the ${i}th row there are ${
        eths.length
      } comeths in columns: ${eths.map((e) => `${e.col} ${e.dir}`)}`
    );
    ethNum.push(eths.length);
    ethIdx.push(eths);
  });
  console.log("----------------------");
  console.log(ethNum);
}

function getSoloonPositions() {
  const solNum = [];
  const solIdx = [];
  PHASE2_GOAL.forEach((row, i) => {
    const sols = [];
    row.forEach((col, j) => {
      if (col.includes("SOLOON")) {
        sols.push({ col: j, color: col.split("_")[0].toLowerCase() });
      }
    });
    console.log(
      `for the ${i}th row there are ${sols.length} sols in columns: ${sols.map(
        (e) => `${e.col} ${e.color}`
      )}`
    );
    solNum.push(sols.length);
    solIdx.push(sols);
  });
  console.log("----------------------");
  console.log(solNum);
}

export async function drawX() {
  // Top and bottom have the same pattern, right and left have the same pattern
  const points: PolyanetParams[] = [];

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

  for (let i = 0; i < points.length; i++) {
    await create("Polyanet", points[i]);
  }
}
