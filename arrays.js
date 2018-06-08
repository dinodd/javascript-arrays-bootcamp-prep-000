var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array,element) {
  var myArray = array;
  return [element,...myArray];
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  var myArray = array;
  myArray.unshift(element);
  return myArray;
}

function addElementToEndOfArray (array,element) {
  var myArray = array;
  return [...myArray, element]
}

function destructivelyAddElementToEndOfArray (array,element) {
  var myArray = array;
  myArray.push(element);
  return myArray
}

function accessElementInArray (array,index) {
  return array[index];
}
