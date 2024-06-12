export default function appendToEachArrayValue(array, appendString) {
  for (var elem of array) {
    var value = elem;
    elem = appendString + value;
  }

  return array;
}
