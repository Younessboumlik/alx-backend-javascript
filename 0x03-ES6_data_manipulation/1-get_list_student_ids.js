
export default function getListStudentIds(stds){
    if (stds instanceof Array) {
    return stds.map((student) => student.id);
  }
  return [];
}
