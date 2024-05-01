export function default getStudentsByLocation(stds,city){
    if (stds instanceof Array) {
    return stds.filter((student) => student.location === city);
  }
  return [];
}
