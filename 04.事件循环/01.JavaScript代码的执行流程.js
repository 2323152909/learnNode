const message = 'Hello World';

console.log(message);

function sum(num1, num2) {
  return num1 + num2;
}

function foo() {
  const result = sum(20, 10);
  console.log(result);
}

foo();