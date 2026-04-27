function reverseString(str) {
  let reversed = "";
  // Start from the last index and move toward 0
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("JavaScript")); // "tpircSavaJ"
//
console.log("Test 1")
console.log("Test 2")
console.log("Test 3")
console.log("Test 4")
console.log("Test 5")