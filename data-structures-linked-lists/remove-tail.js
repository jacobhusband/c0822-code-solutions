/* exported removeTail */

function removeTail(list) {
  if (!list.next) return list;
  while (list.next.next) list = list.next;
  list.next = null;
}
