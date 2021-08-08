const BubbleSort = async (arr) => {
  const size = arr.length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        await pause();
        compare(j, j + 1, arr);
      }
    }
  }
};

BubbleSort(list);
