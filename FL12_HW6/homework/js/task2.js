const a = parseInt(prompt('Input length of side a:'));
const b = parseInt(prompt('Input length of side b:'));
const c = parseInt(prompt('Input length of side c:'));

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Input values should be obly numbers');
} else if (a <= 0 || b <= 0 || c <= 0) {
      console.log('Triangle doesn\'t exist');
      alert('A triangle must have 3 sides with a positive definite length');
    } else if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            console.log('Equilateral triangle');
        } else if (a === b || b === c || a === c) {
            console.log('Isosceles triangle');
        } else {
            console.log('Scalene triangle');
        }
    } else {
        console.log('Triangle doesn\'t exist');
        alert('Triangle doesn\'t exist');   
}
