export default function cleanSet(mySet, startStr) {
  // [...mySet] convert a set to an array
  const len = startStr.length;
  let result = '';
  if (len > 0) {
    const filterArray = [...mySet].filter((value) => value.startsWith(startStr));
    result = filterArray.map((value) => value.substring(len)).join('-');
  }
  return result;
}
