// ERROR TYPE: Runtime / type error - string value "eight" in a numeric array produces NaN when multiplied
let numbers = [2, 4, 8];   // replace "eight" with the number 8
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}
