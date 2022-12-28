# fcc-intermediate-algorithm-scripting-lesson-19

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-undrxo)

## PROBLEM EXPLANATION
It can be quite complicated to understand what needs to be done.  There are always many ways to do something when coding but regardless of the algorithm used, we have to create a program that does the following:
- It has to add two numbers passed as parameters and return the sum.
- It has to check if any of the numbers are actual numbers, otherwise return **undefined** and stop the program right there.
- It has to check if it has one or two arguments passed.  More are ignored.
- If it has only one argument then it has to return a function that uses that number and expects another one, to then add it.

### REFERENCE LINKS
- [Typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
- [Arguments Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

## HINTS

### Hint 1
Every time you deal with an argument, you have to check if it is defined and if it is a number.

### Hint 2
When working on the case that it needs to return a function, using closure can help you write the new function in terms of `addTogether()`.

### Hint 3
The eary return pattern can simplify your code.

