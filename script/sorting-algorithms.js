const BubbleSort = async (arr) => {
  const size = numbers;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        await pause();
        compare(j, j + 1, arr);
      }
    }
  }
};

const InsertionSort = async (arr) => {
  const size = numbers;
  for (let i = 1; i < size; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (isGreater(j, j + 1, arr)) {
        await pause();
        compare(j, j + 1, arr);
      } else break;
    }
  }
};

const SelectionSort = async (arr) => {
  const size = numbers;
  for (let i = 0; i < size - 1; i++) {
    let min = i;
    for (let j = i + 1; j < size; j++) {
      if (isSmaller(j, min, arr)) min = j;
    }
    await pause();
    compare(i, min, arr);
  }
};
