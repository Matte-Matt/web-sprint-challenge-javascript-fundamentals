// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

// Explanation: Nested function can access the internal variable because it is declared within myFunction, the function that nestedFunction is well, nested in. However if the internal variable was declared inside of the nested function, myFunction would not have access to it due to the reason of scope.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(parameter) {
  let number = 0;
  for (let i = 1; i <= parameter; i++) {
    number = i + number;
  }
  return number;
}

console.log(summation(4));
