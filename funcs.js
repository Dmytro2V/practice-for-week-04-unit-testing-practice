function isFive(num) {
  // Your code here
  return num === 5;
}

function isOdd(number) {
  // Your code here
  if (typeof number !== 'number') throw new Error()
  return Math.abs(number % 2) === 1;
}

function myRange(min, max, step = 1) {
  // Your code here
  let arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}


module.exports = { isFive, isOdd, myRange };