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
    if (left < index - 1) await quickSort(items, left, index - 1);
    if (index < right) await quickSort(items, index, right);
  }
  return items;
};

merge_sort = async (list, start, mid, end) => {
  let low = start,
    high = mid + 1;

  let temp = [],
    k = 0;

  for (let i = start; i <= end; i++) {
    if (low > mid) temp[k++] = list[high++];
    else if (high > end) temp[k++] = list[low++];
    else if (list[low] < list[high]) temp[k++] = list[low++];
    else temp[k++] = list[high++];
  }

  for (let t = 0; t < k; t++) {
    await pause();
    list[start] = temp[t];
    arrHeights[start].style.height = `${temp[t]}px`;
    start++;
  }
};

merge_partition = async (list, start, end) => {
  if (start < end) {
    var mid = Math.floor((start + end) / 2);
    await merge_partition(list, start, mid);
    await merge_partition(list, mid + 1, end);
    await merge_sort(list, start, mid, end);
  }
};

function mergeSort() {
  merge_partition(list, 0, numbers - 1);
}
