export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    (function() {
      let task = true;
      let task2 = false;
      // You can use task and task2 here.
    })();
  }

  return [task, task2];
}
