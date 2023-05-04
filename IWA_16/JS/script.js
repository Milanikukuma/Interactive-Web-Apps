// scripts.js

//created an onjects that includes details of both athletes.
const data = {
  NM372: {
    firstName: 'Nwabisa',
    surname: 'Masiko',
    races: [
      { date: new Date('2021-11-12'), time: 780 },
      { date: new Date('2022-12-02'), time: 840 },
    ],
  },
  SV782: {
    firstName: 'Schalk',
    surname: 'Venter',
    races: [
      { date: new Date('2022-06-03'), time: 900 },
      { date: new Date('2022-08-11'), time: 840 },
      { date: new Date('2022-10-20'), time: 840 },
      { date: new Date('2022-12-09'), time: 960 },
    ],
  },
};

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

const createHtml = (athlete) => {
  const { firstName, surname, races } = data[athlete];
  //used to check the latest race from the races array, instead of accessing it using races[0].
  const [latestRace] = races.slice().reverse();
  const { date, time } = latestRace;

 
  const fragment = document.createDocumentFragment();

  const title = document.createElement('h2');
  title.textContent = athlete;
  fragment.appendChild(title);

  const list = document.createElement('dl');

  const day = date.getDate();
  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();

  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  list.innerHTML = /* html */ `
    <dt>Athlete</dt>
    <dd>${firstName} ${surname}</dd>

    <dt>Total Races</dt>
    <dd>${races.length}</dd>

    <dt>Event Date (Latest)</dt>
    <dd>${day} ${month} ${year}</dd>

    <dt>Total Time (Latest)</dt>
    <dd>${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}</dd>
  `; //The padStart() method was used to ensure that it takes the exact  hours and minutes of the latest race.

  fragment.appendChild(list);

  return fragment;
};

const NM372 = document.querySelector('[data-athlete="NM372"]');
NM372.appendChild(createHtml('NM372'));

const SV782 = document.querySelector('[data-athlete="SV782"]');
SV782.appendChild(createHtml('SV782'));


