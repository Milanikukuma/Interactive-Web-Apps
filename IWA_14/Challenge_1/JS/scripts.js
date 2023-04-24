const firstName = 'John';
const age = 35;
//assigned hobby value to a string value ,as it was not defined but later then defined as a function that caused a naming conflict.
const hobby = 'Coding';


//The logTwice function then logs this string twice, resulting in the expected output:

const logTwice = (message) => {
  console.log(message);
  console.log(message);
}

/*I have passed the string "Hello, John (35). I love Coding!"
 to the logTwice function by calling it within the hobby function. */
function printHobby () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

printHobby();
