export default function updateStudentGradeByCity(students, city, grade) {
  if (!Array.isArray(students) || !Array.isArray(grade)) {
    return [];
  }
  const stdents = students.filter((stdt) => stdt.location === city);
  return stdents.map((stdt) => {
    const findGrade = (grade.filter((grd) => grd.studentId === stdt.id)).pop();
    const grd = findGrade ? findGrade.grade : 'N/A';
    return {
      id: stdt.id,
      firstName: stdt.firstName,
      location: stdt.location,
      grade: grd,
    };
  });
}
