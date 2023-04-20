let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

const logCalc = () => { 
  const isString = typeof calculated === 'string'; // Make use of === for comparison; check if calculated is a string
  const calculatedAsNumber = isString ? parseInt(calculated) : calculated; // used parseInt() to convert the "calculated "value to a number if it's a string; if not then I'll use calculated as it is.
  calculated = calculatedAsNumber + 1; // assign calculated the new value of calculatedAsNumber plus 1
}

const calcUser = () => {
  logCalc(); // call logCalc()
  if (calculated > 2) user = 'John'; // if calculated is greater than 2, assign user to 'John'
  if (calculated > 2) state = 'requesting'; // if calculated is greater than 2, assign state to 'requesting'
  if (calculated > 3) state = 'idle'; // if calculated is greater than 3, assign state to 'idle'
}

const checkUser = () => {
  if (user && state === 'requesting') { // The function uses an if statement to check if two conditions are true.
    console.log(`User: ${user} (${calculated})`); // and then it logs the user and calculated values
  }
}

// Only allowed to change code above

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();
