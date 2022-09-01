/* exported getStudentNames */

// make an empty array to hold student names
// enter the array at the first location
// take the value from the name property at that location
// repeat previous steps until last index of array

function getStudentNames(students) {
  var output = [];
  for (var i = 0; i < students.length; i++) {
    output.push(students[i].name);
  }
  return output;
}
