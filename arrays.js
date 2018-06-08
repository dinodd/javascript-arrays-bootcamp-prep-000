var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array,element) {
  var myArray = array;
  return [element,...myArray];
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  var myArray = array;
  array.unshift(element);
  return array;
}
