import ClassRoom from './0-classroom.js'

export default function initializeRooms(){
	let class1 = ClassRoom(19);
	let class2 = ClassRoom(20);
	let class3 = ClassRoom(34);
	let  classrooms = [];
	classrooms.push(class1);
	classrooms.push(class2);
	classrooms.push(class3);

	return classrooms;

}
