export default function appendToEachArrayValue(array, appendString) {
  for (var x of array) {
    x = appendString + x;
  }

  return array;
}
