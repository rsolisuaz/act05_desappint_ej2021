var testArray = [1, 2, 3, 4, 5]

function arrayLoop1(someArray) {
  for(var i=0;i<someArray.length; i++) {
    var value = someArray[i]
    doSomethingWith(value)
  }
}

function arrayLoop2(someArray) {
  for(var i=0, value; value=someArray[i]; i++) {
    doSomethingWith(value)
  }
}

function doSomethingWith(val) {
  console.log("Value is '%o'", val)
}

// Pass to Console command line
//   arrayLoop1(testArray)
//   arrayLoop2(testArray)

function arrayLoops() {
  var names = ["Joe", "Jane", "John"]
  printArray1(names)
  printArray2(names)
  names.length = 6
  printArray1(names)
  printArray2(names) 
}
    
function printArray1(array) {
  for(var i=0; i<array.length; i++) {
    console.log("[printArray1] array[%o] is %o", i, array[i])
  }
}

function printArray2(array) {
  for(var i in array) {
    console.log("[printArray2] array[%o] is %o", i, array[i])
  }
}

arrayLoops()

