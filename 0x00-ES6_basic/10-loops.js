export default function appendToEachArrayValue(array, appendString) {
  for (elem of array) {
    var value = elem;
    elem = appendString + value;
  }

  return array;
}
