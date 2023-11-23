interface student: Student {
	firstname: String,
	lastname:  String,
	age: Number,
	location: String
}

const student_0: Student = {
	firstname: "Alex",
	lastname: "alex",
	age: 20,
	location: "Nairobi"
}

const student_1: Student = {
	firstname: "desamos",
	lastname: "pythagor"
	age: 24,
	location: "anywhere"
}

const studentList: Student[]: = [student_0, student_1]
