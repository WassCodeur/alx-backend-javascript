export default function taskBlock(trueOrFalse) {
  const task1 = false;
  const task2 = true;

  if (trueOrFalse) {
    const task1 = true;
    const task2 = false;
  }

  return [task1, task2];
}
