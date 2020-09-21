const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

const getRandomTime = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const run = horse => {
  return new Promise(resolve => {
    const time = getRandomTime(2000, 3500);
    setTimeout(() => {
      resolve({
        horse,
        time
      })
    }, time)
  })
}
console.log('start');
const promises = horses.map(run)



Promise.all(promises).then(results => {
  console.table(results);
}).catch(console.log)
Promise.race(promises).then(results => {
  console.log(results);
}).catch(console.log)

Promise.race(promises).then(({
  horse,
  time
}) => {
  console.log(`winner ${horse} time ${time}`);
}).catch(console.log)
