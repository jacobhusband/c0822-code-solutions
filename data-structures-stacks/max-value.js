/* exported maxValue */

function maxValue(stack) {
  let val; let max = -Infinity;
  while (stack.peek() !== undefined) {
    val = stack.pop();
    max = (val > max) ? val : max;
  }
  return max;
}
