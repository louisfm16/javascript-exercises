const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	let sum = 0;

  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

const multiply = function(...args) {
  let multSum = 1;

  for(let i = 0; i < args.length; i++) {
    multSum *= args[i];
  }

  return multSum;
};

const power = function(n, pwr) {
	let num = 1;

  for (let i = 0; i < pwr; i++) {
    num *= n;
  }

  return num;
};

const factorial = function(n) {
	if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
