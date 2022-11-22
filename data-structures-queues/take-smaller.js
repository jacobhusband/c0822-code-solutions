/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) return;
  const first = queue.dequeue();
  if (queue.peek() === undefined) return first;
  const second = queue.dequeue();
  if (first > second) {
    queue.enqueue(first);
    return second;
  } else {
    queue.enqueue(second);
    return first;
  }
}
