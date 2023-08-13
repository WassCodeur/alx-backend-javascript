export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    const stdts = students.filter((student) => student.location === city);
    return stdts;
  }
  return [];
}
