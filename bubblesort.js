function bubbleSort(array) {
  const arrayCopy = [...array];
  let lastUnsortedIndex = arrayCopy.length - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < lastUnsortedIndex; ++i) {
      const currentVal = arrayCopy[i];
      const nextVal = arrayCopy[i + 1];
      if (currentVal > nextVal) {
        arrayCopy[i] = nextVal;
        arrayCopy[i + 1] = currentVal;
        sorted = false; //if swapped array was not sorted
      }
    }
    lastUnsortedIndex -= 1;
  }
  return arrayCopy;
}
