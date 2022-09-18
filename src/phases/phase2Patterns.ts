// A set of functions that log the positions of each planet in the Megaverse to find a pattern
import { PHASE2_GOAL } from "../utils";

export function getPolyanetPostitions() {
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

export function getComethPositions() {
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

export function getSoloonPositions() {
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
