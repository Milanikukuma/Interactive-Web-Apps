const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;

let shipping;
let currency;
let shoes = 300 *2;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;
let _location = 'RSA';
let customers = 2;

// Calculate shipping and currency based on user location
if (_location === 'RSA') {
  shipping = 400;
  currency = 'R';
} else if (_location === 'NAM') {
  shipping = 600;
  currency = '$';
} else {
  shipping = 800;
  currency = '$';
}

// Calculate total cost and cost without shipping
let totalCost = shoes + toys + shirts + batteries + pens;


// Check if user is from North Korea
if (_location === 'NK') {
  console.log(BANNED_WARNING);
} else {
  // Check if free shipping applies
  if (totalCost >= 1000 && customers === 1 && (_location === 'NAM' || _location === 'RSA')) {
    shipping = 0;
  } else if (customers !== 1) {
    console.log(FREE_WARNING);
  }
}

// Display total price with currency
console.log('Price:', currency, totalCost + shipping);


//

console.log(shipping)
console.log (totalCost)