/* exported removeNext */

function removeNext(list) {
  if (!list.next) return
  const placeholder = list.next.next
  if (placeholder) {
    list.next = placeholder;
  }
  return list
}
