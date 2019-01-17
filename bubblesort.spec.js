describe('Bubble Sort', function() {
  const numArr = [1, 3, 5, 2, 4, 6, 10, 7, 8, 9];
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('sorts an array of numbers', function() {
    expect(bubbleSort(numArr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
