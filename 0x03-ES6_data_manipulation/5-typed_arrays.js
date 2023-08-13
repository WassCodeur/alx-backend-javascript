export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position > length) {
    throw new Error('Position outside range');
  }
  const arr = new ArrayBuffer(length);
  const Arr = new Int8Array(arr);
  Arr[position] = value;
  return new DataView(arr);
}
