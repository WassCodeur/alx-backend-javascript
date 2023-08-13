export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    const sum = students.reduce((total, student) => total + student.id, 0);
    return sum;
  }
  return 0;
}
