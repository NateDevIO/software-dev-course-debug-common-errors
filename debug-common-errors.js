/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

// ERROR TYPE: Syntax error - unterminated string literal and missing closing parenthesis
console.log("Welcome to the bootcamp");

// What's Wrong?
// The string literal had no closing quote and the call was missing the closing ).
// JavaScript threw a SyntaxError before any code could run.


// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

// ERROR TYPE: Runtime / type error - string value "eight" in a numeric array produces NaN when multiplied
let numbers = [2, 4, 8];   // replace "eight" with the number 8
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}

// What's Wrong?
// Multiplying the string "eight" by 2 yields NaN because "eight" cannot be
// coerced to a number. Using the numeric literal 8 produces the expected 16.


// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

// ERROR TYPE: Logic error - the inner return should be false (num is NOT prime)
// and the trailing return should be true (num IS prime). Values were swapped.
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // found a divisor - not prime
    }
  }
  return true; // no divisors found - prime
}

console.log(isPrime(7)); // now correctly returns true

// What's Wrong?
// The return values inside and after the loop were inverted: finding a divisor
// must return false (composite), and reaching the end must return true (prime).
