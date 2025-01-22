function foo(a, b) {
  a = a === undefined || a === null ? 0 : a;
  b = b === undefined || b === null ? 0 : b;  
  return a + b;
}

console.log(foo(undefined, 1)); // Output: 1
console.log(foo(1, undefined)); // Output: 1
console.log(foo(1, 2)); // Output: 3
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined, null)); //Output: 0