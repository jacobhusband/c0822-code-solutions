/* exported swapFront */

function swapFront(list) {
  if (!list.next) return list;
  const placeholder = list.next.next;
  let second = list.next;
  let first = list;
  second.next = new LinkedList(first.data);
  if (placeholder) second.next.next = placeholder;
  return second;
}
