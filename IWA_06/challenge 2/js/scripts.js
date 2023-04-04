const rent = 400;
const tax = 12; // change tax to a number instead of a string
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0; // change hourOfDay to a number instead of a string
const minuteOfDay = 0; // change minuteOfDay to a number instead of a string

// Only change below this line

// add a check to make sure hourOfDay and minuteOfDay are not undefined
if (hourOfDay !== undefined && minuteOfDay !== undefined && hourOfDay === 0 && minuteOfDay === 0) {
  const taxAsDecimal = tax / 100; // divide by 100 to get the decimal representation of the percentage
  const startingAfterTax = salary * (1 - taxAsDecimal); // subtract tax from salary
  const balance = startingAfterTax - transport - food - rent; // subtract expenses from startingAfterTax
  console.log('R' + balance.toFixed(2)); // prefix the value with R and show only 2 decimal places
}
