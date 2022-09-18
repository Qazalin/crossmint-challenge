import {
  PolyanetParams,
  ComethDirections,
  ComethParams,
  SoloonColors,
  SoloonsParams,
  create,
} from ".";

export async function drawCometh(
  column: number,
  row: number,
  direction: ComethDirections
) {
  const params: ComethParams = {
    column,
    row,
    direction,
  };
  await create("Cometh", params);
}

export async function drawSoloon(
  column: number,
  row: number,
  color: SoloonColors
) {
  const params: SoloonsParams = {
    column,
    row,
    color,
  };
  await create("Soloon", params);
}

export async function drawPolyanet(column: number, row: number) {
  const params: PolyanetParams = {
    column,
    row,
  };
  await create("Polyanet", params);
}
