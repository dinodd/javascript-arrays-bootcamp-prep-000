var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array,element); {
  var myArray = array;
  return [element,...myArray];
}

addElementToBeginningOfArray();
