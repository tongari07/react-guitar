export function setStringArray(pos: number, item: number): number[] {
  const newArray = [-1, -1, -1, -1, -1, -1]
  newArray[pos] = item
  return newArray
}
