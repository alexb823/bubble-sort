//Solution 1 using while with a for loop
// function bubbleSort(array) {
//   const arrayCopy = [...array];
//   let lastUnsortedIndex = arrayCopy.length - 1;
//   let sorted = false;

//   while (!sorted) {
//     sorted = true;
//     for (let i = 0; i < lastUnsortedIndex; ++i) {
//       const currentVal = arrayCopy[i];
//       const nextVal = arrayCopy[i + 1];
//       if (currentVal > nextVal) {
//         arrayCopy[i] = nextVal;
//         arrayCopy[i + 1] = currentVal;
//         sorted = false; //if swapped, array was not sorted
//       }
//     }
//     lastUnsortedIndex -= 1;
//   }
//   return arrayCopy;
// }

//Solution 2 using nested for loops
function bubbleSort(array) {
  const arrayCopy = [...array];

  for(let i = arrayCopy.length - 1; i > 0; --i) {
    let sorted = true;
    for(let j = 0; j < i; ++j) {
      let currentVal = arrayCopy[j];
      let nextVal = arrayCopy[j + 1];
      if (currentVal > nextVal) {
        arrayCopy[j] = nextVal;
        arrayCopy[j + 1] = currentVal;
        sorted = false; //if swapped, array was not sorted
      }
    }
    if(sorted) return arrayCopy;
  }
  return arrayCopy;
}
