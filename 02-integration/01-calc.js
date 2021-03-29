let sum = require("../01-unit/01-sum");
let diff = require("../01-unit/02-difference");
let pro = require("../01-unit/03-product");
let quo = require("../01-unit/04-quotient");

// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function calc(operation,num1,num2) {
  switch (operation) {
   case "add": return sum.sum(num1,num2);
  
   case "subtract": return diff.difference(num1,num2);
  
  
   case "multiply": return pro.product(num1,num2);

   case "modulo": return quo.quotient(num1,num2);
  
   case "exponent": return "Operation not supported";
 
   default: return "Operation Specified is not correct"
   
  }
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the correct sum when the user provides: 'add', 1, 1.
  var result = calc('add', 1, 1);
  if (result !== 2) throw new Error('Expected calc("add", 1, 1) to be 2. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return the correct difference when the user provides: 'subtract', 20, 10.
  var result = calc('subtract', 20, 10);
  if (result !== 10) throw new Error('Expected calc("subtract", 20, 10) to be 10. Received: ' + result);
  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should return the correct product when the user provides: 'multiply', 9, 9.
  var result = calc('multiply', 9, 9);
  if (result !== 81) throw new Error('Expected calc("multiply", 9, 9) to be 81. Received: ' + result);
  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // It should return the correct quotient when the user provides: 'divide', 9, 3.
  var result = calc('modulo', 9, 3);
  if (result !== 0) throw new Error('Expected calc("modulo", 9, 3) to be 0. Received: ' + result);
  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // It should return the message 'Operation not supported.' when the user provides: exponent, 2, 8.
  var result = calc('exponent', 2, 8);
  if (result !== "Operation not supported") throw new Error('Expected calc("exponent", 2, 8) to be Operation not supported. Received: ' + result);

  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
