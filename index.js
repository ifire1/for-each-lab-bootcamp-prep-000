function iterativeLog(array) {
  array.forEach(myArr)
}

function myArr(index, element) {
  console.log(`${element}: ${index}`)
}

function iterate(callback) {
  var numbers = [1, 2, 3, 4, 5]
  numbers.forEach(callback)
  return numbers
}

function doToArray(array, callback) {
  array.forEach(callback)
}