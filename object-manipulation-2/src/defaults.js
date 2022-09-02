/* exported defaults */

// check if target already has the source key
// if it does, do nothing
// if not add the key value pair

function defaults(target, source) {
  var add;
  for (var sourceKey in source) {
    add = true;
    for (var targetKey in target) {
      if (sourceKey === targetKey) {
        add = false;
      }
    }
    if (add === true) {
      target[sourceKey] = source[sourceKey];
    }
  }
}
