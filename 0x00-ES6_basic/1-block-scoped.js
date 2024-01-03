export default function taskBlock(trueOrFalse) {
  const task = false;
   const task2 = true;

  if (trueOrFalse) {
   const task = true; //jest
   const task2 = false; //jest
  }

  return [task, task2];
}
