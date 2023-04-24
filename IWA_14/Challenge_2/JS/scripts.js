 // Define a function that adds two numbers
const add = (a, b) => { return a + b; }

// Define a function that multiplies two numbers
const multiply = (a, b) => { return a * b; }

// Define a function that performs some calculations using add and multiply
function internal() {
  const added = this.add(this.internal.a, this.internal.b);
  const multiplied = this.multiply(this.internal.a, this.internal.b);
  return multiplied;
}

// Not allowed to change below this

const example1 = {
  internal: {
    a: 2,
    b: 4,
    c: 8,
  },
  add,
  multiply,
  calculate: internal
};

const example2 = {
  internal: {
    a: 2,
    b: 2,
    c: 3,
  },
  add,
  multiply,
  calculate: internal
};

console.log(example1.calculate()); // Output: 48
console.log(example2.calculate()); // Output: 12

  