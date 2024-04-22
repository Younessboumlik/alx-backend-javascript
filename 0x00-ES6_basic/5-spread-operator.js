export default function concatArrays(array1, array2, string) {
  let array = [...array1,...array2,...string];
  return array;
}
