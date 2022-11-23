/* exported updateNext */

function updateNext(list, value) {
  if (!list.next) return list;
  if (list.next.next) {
    const placeholder = list.next.next;
    list.next = new LinkedList(value);
    list.next.next = placeholder;
  }
  return list;
}
