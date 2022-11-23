/* exported getLength */

function getLength(list) {
  let count = 1;
  let link = list.next;
  while (link) {
    count++
    link = link.next;
  }
  return count;
}
