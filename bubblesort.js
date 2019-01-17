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
// function bubbleSort(array) {
//   const arrayCopy = [...array];

//   for(let i = arrayCopy.length - 1; i > 0; --i) {
//     let sorted = true;
//     for(let j = 0; j < i; ++j) {
//       let currentVal = arrayCopy[j];
//       let nextVal = arrayCopy[j + 1];
//       if (currentVal > nextVal) {
//         arrayCopy[j] = nextVal;
//         arrayCopy[j + 1] = currentVal;
//         sorted = false; //if swapped, array was not sorted
//       }
//     }
//     if(sorted) return arrayCopy;
//   }
//   return arrayCopy;
// }

//Solution 3 using a for loops and recursion
function bubbleSort(array) {
  const arrayCopy = [...array];
  let sorted = true;

  for (let i = 0; i < arrayCopy.length - 1; i++) {
    const currentVal = arrayCopy[i];
    const nextVal = arrayCopy[i + 1];
    if (currentVal > nextVal) {
      arrayCopy[i] = nextVal;
      arrayCopy[i + 1] = currentVal;
      sorted = false;
    }
  }
  if (!sorted) {
    return [...bubbleSort(arrayCopy.slice(0, -1)), ...arrayCopy.slice(-1)];
  }
  return arrayCopy;
}


//Solution 4 added comparator
let arrToSort = [{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }];
function ageComparator(a, b) {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
}

function bubbleSortBonus(array, comparator) {
  const arrayCopy = [...array];
  let sorted = true;

  for (let i = 0; i < arrayCopy.length - 1; i++) {
    const currentVal = arrayCopy[i];
    const nextVal = arrayCopy[i + 1];
    if (comparator) {
      if (comparator(currentVal, nextVal) > 0) {
        arrayCopy[i] = nextVal;
        arrayCopy[i + 1] = currentVal;
        sorted = false;
      }
    } else if (currentVal > nextVal) {
      arrayCopy[i] = nextVal;
      arrayCopy[i + 1] = currentVal;
      sorted = false;
    }
  }
  if (!sorted) {
    return [...bubbleSortBonus(arrayCopy.slice(0, -1), comparator), ...arrayCopy.slice(-1)];
  }
  return arrayCopy;
}

console.log(bubbleSortBonus(arrToSort, ageComparator));
