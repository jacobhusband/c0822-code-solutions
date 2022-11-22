/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  let first, second;
  if (stack.peek() !== undefined) {
    first = stack.pop();
  } else {
    return undefined;
  }
  if (stack.peek() !== undefined) {
    second = stack.pop();
  } else {
    stack.push(first);
    return undefined;
  }
  stack.push(second);
  stack.push(first);
  return second;
}
