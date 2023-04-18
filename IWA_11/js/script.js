//fixed all the incorrected assignments and placed them with the correct assignment (=)
const order1 = document.getElementById("order1");
const order2 = document.getElementById("order2");
const order3 = document.getElementById("order3");

const biscuits1 = order1.getElementById("biscuits"); //Variable names cannot start with a number. Therefore, 1-root, 1-biscuits, etc. are invalid variable names.
const donuts1 = order1.getElementById("donuts");    //meaning 1-root, 1-biscuits, etc. are invalid variable names.
const pancakes1 = order1.getElementById("pancakes");
let status1;

/* document() function should take a string parameter 
that specifies the ID of the element to be re introduced from the document.*/
if (order1.getElementById("status").checked) {
  status1 = "Delivered";
} else {
  status1 = "Pending";
}                                    //used the if statements to check the value of the status property.
const biscuits2 = order2.getElementById("biscuits");
const donuts2 = order2.getElementById("donuts");
const pancakes2 = order2.getElementById("pancakes");
let status2;

if (order2.getElementById("status").checked) {
  status2 = "Delivered";
} else {
  status2 = "Pending";
}

const biscuits3 = order3.getElementById("biscuits");
const donuts3 = order3.getElementById("donuts");
const pancakes3 = order3.getElementById("pancakes");
let status3;
if (order3.getElementById("status").checked) {
  status3 = "Delivered";
} else {
  status3 = "Pending";
}
