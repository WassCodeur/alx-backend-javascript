interface Teacher {
    readonly firstName: string;
    fullTimeEmployee: boolean;
    readonly lastName: string;
    yearOfExperince?: number;
    location: string;
    [key: string]: any;
}


interface Directors extends Teacher {
	numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string) {
	console.log(`${firstName[0]}. ${lastName}`)
}

interface printTeacherFunction {
	(fistName: string, lastName: string): void;
}

export const StudentClass = class StudentClass {
	firstName: string;
	lastName: string;
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	workOnHomework(): string {
		return ("Currently working");
	}
	displayName(): string {
		return this.firstName;
	}
}
