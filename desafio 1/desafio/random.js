
function fillArrayWithRandomNumbers(array) {
  for (let i = 0; i < 10; i++) {
      array.push(Math.floor(Math.random() * 100)); 
  }
}

function sortArray(array, order) {
  const startTime = new Date();

  if (order === 'asc') {
      array.sort((a, b) => a - b);
  } else if (order === 'desc') {
      array.sort((a, b) => b - a);
  }

  const endTime = new Date();
  const totalTime = endTime - startTime;

 
  console.log(`Array ordenado ${order === 'asc' ? 'crescentemente' : 'decrescentemente'}:`, array);
  console.log(`Tempo total gasto: ${totalTime}`);
}
module.exports = {fillArrayWithRandomNumbers, sortArray}


