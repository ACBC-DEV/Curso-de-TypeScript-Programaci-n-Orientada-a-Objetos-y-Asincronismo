console.log(Math.PI);
console.log(Math.max(1, 2, 3, 5, 8, 87, 122));

class myMath {
  static readonly PI = 3.14;
  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => (max >= item ? max : item));
  }
}
console.log(myMath.PI);
const numbers = [1, 2, 5, 45, 4, 45, 85];
console.log(myMath.max(...numbers));
const numbers1 = [-1, -2, -5, -45, -4, -45, -85];
console.log(myMath.max(...numbers1));
