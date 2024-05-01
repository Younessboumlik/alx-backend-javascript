export default function getStudentIdsSum(stds) {
  if (stds instanceof Array) {
    return stds.reduce(
      (prevstds, curstds) => prevstds.id || prevstds + curstds.id,
      0,
    );
  }
  return 0;
}
