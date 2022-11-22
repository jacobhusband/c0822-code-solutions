/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) return undefined;
  const first = stack.pop();
  stack.push(value);
  stack.push(first);
  return stack;
}
