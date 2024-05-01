
export function default getListStudentIds(stds){
    if (students instanceof Array) {
    return stds.map((student) => student.id);
  }
  return [];
}
