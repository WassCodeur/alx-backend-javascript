export default function createIteratorObject(report) {
  function* func() {
    for (const depart of Object.values(report.allEmployees)) {
      for (const employee of depart) {
        yield employee;
      }
    }
  }
  return (func());
}
