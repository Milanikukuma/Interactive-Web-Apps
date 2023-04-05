const leoName = 'Leo';
const leoSurname = 'Musvaire  ';
const leoBalance = '9394';

const sarahName = 'Sarah';
const sarahSurname = 'Kleinhans';
const sarahBalance = '4582.21000111';

const divider = '----------------------------------';

// Only change below this line

const owed = (parseFloat(leoBalance) + parseFloat(sarahBalance)).toFixed(2);
const leo = `${leoName} ${leoSurname} (Owed: R ${(-parseFloat(leoBalance)).toFixed(2)})\n`;
const sarah = `${sarahName} ${sarahSurname} (Owed: R ${(-parseFloat(sarahBalance)).toFixed(2)})\n\n`;
const total = `  Total amount owed: R ${owed.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')}`;
const result = `${'\n' + leo + sarah + divider}\n${total.padStart(total.length + 2)}\n${divider}`;

console.log(result);
