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

const partition = async (items, left, right) => {
  let pivot = items[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (items[i] < pivot) i++;
    while (items[j] > pivot) j--;

    if (i <= j) {
      await pause();
      compare(i, j, items);
      i++;
      j--;
    }
  }
  return i;
};

quickSort = async (items, left, right) => {
  var index;
  if (items.length > 1) {
    index = await partition(items, left, right);
    if (left < index - 1) {
      await quickSort(items, left, index - 1);
    }
    if (index < right) {
      await quickSort(items, index, right);
    }
  }
  return items;
};
