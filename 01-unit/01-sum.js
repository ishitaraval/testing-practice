// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function sum(num1=0,num2=0) {
  return num1+num2;

}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the sum of two numbers.
  var result = sum(1, 1);
  if (result !== 2) throw new Error('Expected sum(1, 1) to be 2. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should ignore additional numbers.
  var result = sum(1, 1, 2, 3, 4, 5, 6);
  if (result !== 2) throw new Error('Expected sum(1, 1, 2, 3, 4, 5, 6) to be 2. Received: ' + result);

  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.
  var result = sum(2,null);
  if (result !== 2) throw new Error('Expected sum(2) to be 2. Received: ' + result);

  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.
  var result = sum(null,null);
  if (result !== 2) throw new Error('Expected sum(null,null) to be 0. Received: ' + result);

  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
