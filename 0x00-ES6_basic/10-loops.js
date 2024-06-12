export default function appendToEachArrayValue(array, appendString) {
  for (const elem of array) {
    var indx = array.indexOf(elem);
    array[indx] = appendString + elem;
  }

  return array;
}
