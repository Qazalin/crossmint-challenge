// Drop the duplicate objects in an array of Recrods
export function dropDuplicates<T extends Record<string, unknown>>(
  arr: T[],
  keys: string[]
): T[] {
  const filteredArr: T[] = arr.reduce((acc, current) => {
    const x = acc.find((item) =>
      keys.every((key) => item[key] === current[key])
    );
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);
  return filteredArr;
}
