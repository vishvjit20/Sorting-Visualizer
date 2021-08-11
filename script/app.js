const speed = document.querySelector(".speed-menu");
const algo = document.querySelector(".algo-menu");
const random = document.querySelector("#random");
let array = document.querySelector(".array");
let slider = document.querySelector("#slider");

let time = 100;

speed.addEventListener("change", function (e) {
  let timeConst = Number(e.currentTarget.value);
  if (timeConst !== 0) {
    time = 100 / timeConst;
    console.log(time);
  }
});

algo.addEventListener("change", function (e) {
  const algoVal = Number(e.currentTarget.value);
  console.log(algoVal);
  if (algoVal === 0) {
    alert("Please select a valid algorith to visualize");
    return;
  } else if (algoVal === 1) BubbleSort(list);
  else if (algoVal === 2) InsertionSort(list);
  else if (algoVal === 3) SelectionSort(list);
  else if (algoVal === 4) quickSort(list, 0, numbers - 1);
  else if (algoVal === 5) mergeSort();
});

const clearPreviousArray = () => {
  array.innerHTML = "";
};

let sliderVal = 10;
