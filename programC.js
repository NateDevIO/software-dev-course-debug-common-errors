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
