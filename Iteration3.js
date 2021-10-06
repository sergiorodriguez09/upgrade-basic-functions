/* 1.3 */

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  let count = 0;
  for (let i = 0; i < param.length; i++) {
      count += param[i];
      }
      return count
}

console.log(sumAll(numbers));
