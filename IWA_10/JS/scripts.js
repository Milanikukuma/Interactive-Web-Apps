const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: 'Day of Reconciliation',
    date: `16 December ${currentYear}`,
  },
  1: {
    id: 1,
    name: 'Workers Day',
    date: new Date(`1 April ${currentYear}`),
  },
  2: {
    id: 2,
    name: 'Day of Goodwill',
    date: new Date(`26 December ${currentYear}`),
  },
  3: {
    id: 3,
    name: 'New Year Day',
    date: new Date(`1 January ${currentYear}`),
  },
  4: {
    id: 4,
    name: 'Womens Day',
    date: new Date(`9 August ${currentYear}`),
  },
  5: {
    id: 5,
    name: 'Heritage Day',
    date: new Date(`24 September ${currentYear}`),
  },
  6: {
    id: 6,
    name: 'Christmas',
    date: new Date(`25 December ${currentYear} 13:25`),
  },
  7: {
    id: 7,
    name: 'Youth Day',
    date: new Date(`16 June ${currentYear}`),
  },
  8: {
    id: 8,
    name: 'Human Rights Day',
    date: new Date(`21 March ${currentYear}`)
  },
};

const christmas = holidays[6];
const futureId = 9;

// Check if ID 9 exists
if (holidays[futureId]) {
  console.log(holidays[futureId].name);
} else {
  console.log(`ID ${futureId} not created yet`);
}

// Copy Christmas holiday and make changes
const copied = Object.assign({}, christmas);
copied.name = 'X-mas Day';
copied.date.setHours(0, 0, 0, 0);
const isEarlier = copied.date.getTime() < christmas.date.getTime();
console.log('New date is earlier:', isEarlier);
if (isEarlier) {
  christmas.name = copied.name;
  christmas.date = copied.date;
}

// Check changes
console.log('ID change:', holidays[6].id !== christmas.id);
console.log('Name change:', holidays[6].name !== christmas.name ? christmas.name : false);
console.log('Date change:', holidays[6].date.getTime() !== christmas.date.getTime() ? christmas.date.toLocaleDateString() : false);


// Calculate first and last holiday dates
const holidayTimestamps = Object.values(holidays).map(holiday => holiday.date.getTime());
const firstHolidayTimestamp = new Date(Math.min(...holidayTimestamps));
const lastHolidayTimestamp = new Date(Math.max(...holidayTimestamps));
const firstHolidayDate = `${firstHolidayTimestamp.getDate()}/${firstHolidayTimestamp.getMonth() + 1}/${currentYear}`;
const lastHolidayDate = `${lastHolidayTimestamp.getDate()}/${lastHolidayTimestamp.getMonth() + 1}/${currentYear}`;

console.log(`First holiday: ${firstHolidayDate}`);
console.log(`Last holiday: ${lastHolidayDate}`);

// Get a random holiday date
const randomHolidayIndex = Math.floor(Math.random() * Object.keys(holidays).length);
const randomHolidayDate = holidays[randomHolidayIndex].date;
const randomHolidayFormattedDate = `${randomHolidayDate.getDate()}/${randomHolidayDate.getMonth() + 1}/${currentYear}`;
console.log(`Random holiday: ${randomHolidayFormattedDate}`);
