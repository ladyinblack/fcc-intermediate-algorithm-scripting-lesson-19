// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Arguments Optional</h1>`;

/**
 * Create a function that sums two arguments together.  If only one argument is provided, then return a function that expects one argument and returns the sum.
 * For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
 * Calling this returned function with a single argument will then return the sum:
 *      var sumTwoAnd = addTogether(2);
 * sumTwoAnd(3) return 5.
 */

function addTogether() {
  const [first, second] = arguments;
  if (typeof first !== 'number') {
    return undefined;
  } else if (arguments.length === 1) {
    function addSecond(second) {
      if (typeof second !== 'number') {
        return undefined;
      } else {
        return first + second;
      }
    }
    return addSecond;
  } else if (typeof second !== 'number') {
    return undefined;
  } else {
    return first + second;
  }
}

console.log(addTogether(2, 3));
console.log(addTogether(23, 30));
console.log(addTogether(5)(7));
console.log(addTogether('https://www.youtube.com/watch?v=dQw4w9WgXcQ'));
console.log(addTogether(2, '3'));
console.log(addTogether(2)([3]));
console.log(addTogether('2', 3));
console.log(addTogether(5, undefined));
console.log(addTogether(2, 3, 6));
