/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  if (!list.next) return list;
  const placeholder = list.next;
  list.next = new LinkedList(value);
  list.next.next = placeholder;
}
