const rent = 400;
const tax = 8; 
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0; 
const minuteOfDay = 0; 

// Only change below this line

// added a check to make sure hourOfDay and minuteOfDay are not undefined
if (hourOfDay !== undefined && minuteOfDay !== undefined && hourOfDay === 0 && minuteOfDay === 0) {
  const taxAsDecimal = tax / 100; // divide by 100 to get the decimal representation of the percentage
  const startingAfterTax = salary * (1 - taxAsDecimal); // subtract tax from salary
  const balance = startingAfterTax - transport - food - rent; // subtract expenses from startingAfterTax
  console.log('R' + balance.toFixed(2)); // prefix the value with R and show only 2 decimal places
}
