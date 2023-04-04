const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const isNumericString = (str) => /^\d+$/.test(str)

const primaryValid = isNumericString(primaryPhone)
const secondaryValid = isNumericString(secondaryPhone)

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )
