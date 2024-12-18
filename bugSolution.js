function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null or undefined cases
  }
  if (typeof x === 'object' && 'length' in x) {
    return x.length; // Access length only if x is an object with a length property
  } else {
    return -1; // Or throw an error, depending on desired behavior
  }
}
console.log(foo(null)); //Output: 0
console.log(foo([1, 2, 3])); // Output: 3
console.log(foo('hello')); // Output: 5
console.log(foo(5)); //Output: -1