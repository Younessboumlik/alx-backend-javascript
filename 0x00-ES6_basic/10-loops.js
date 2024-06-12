export default function appendToEachArrayValue(array, appendString) {
  for (const elem of array) {
    const indx = array.indexOf(elem);
    array[indx] = appendString + elem;
  }

  return array;
}
