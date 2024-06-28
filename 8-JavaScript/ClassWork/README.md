# JavaScript Function Exercises

## Exercise 1
Define a function named `sayGoodbye` that takes a parameter `name` and logs `Goodbye, [name]` to the console. Call the function with your name.

## Exercise 2
Define a function named `modulus` that takes two parameters and returns their modulus results. Call the function with two numbers and log the result.

## Exercise 3
Define a function named `introduce` that takes no parameters but uses `this` to log `Hello, my name is [name]`.

- Use `call` to invoke `introduce` with an object having a `name` property.
- Use `apply` to invoke `introduce` with another object.
- Use `bind` to create a new function with a different object and call it.

## Exercise 4
Define a function named `calculate` that takes three parameters: `a`, `b`, and a callback function `operation`. The function should execute the callback function with `a` and `b` as arguments and return the result.

- Create separate callback functions for addition, subtraction, multiplication, and division.
- Use `calculate` to perform each of these operations with two numbers and log the results.
- Additionally, use `bind` to create a new function for calculating the square of a number using the `calculate` function and log the result.
- Edit - Can create a new function `calculateSingle` to bind with the function to square a number.

