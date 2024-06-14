import ClassRoom from './0-classroom';
/**
 * array of classroom objects.
 * @return array of classrooms.
 */
export default function initializeRooms() {
  const class1 = new ClassRoom(19);
  const class2 = new ClassRoom(20);
  const class3 = new ClassRoom(34);
  const classrooms = [];
  classrooms.push(class1);
  classrooms.push(class2);
  classrooms.push(class3);

  return classrooms;
}
