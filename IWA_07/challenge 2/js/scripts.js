const nickname = "Timmy";
const firstname = "Timothy";

if (nickname && firstname) {
  console.log(`Good morning, ${nickname}!`);
} 

else if (nickname) {
  console.log(`Good morning, ${nickname}!`);
} 

else if (firstname) {
  console.log(`Good morning, ${firstname}!`);
} 
else { 
  console.log("Good morning!");
}
