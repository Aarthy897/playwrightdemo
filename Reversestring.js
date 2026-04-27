function reverseString(str) {
  let reversed = "";
  // Start from the last index and move toward 0
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("JavaScript")); // "tpircSavaJ"