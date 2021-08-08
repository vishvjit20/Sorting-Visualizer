const speed = document.querySelector(".speed-menu");
const algo = document.querySelector(".algo-menu");
const random = document.querySelector("#random");
let array = document.querySelector(".array");

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
  if (algoVal === 0) {
    alert("Please select a valid algorith to visualize");
    return;
  } else if (algoVal === 1) BubbleSort(list);
  else if (algoVal === 2) InsertionSort(list);
  else if (algoVal === 3) console.log("Selection sort");
  else if (algoVal === 4) console.log("Quick sort");
  else if (algoVal === 5) console.log("Merge sort");
});

const clearPreviousArray = () => {
  array.innerHTML = "";
};

// random.addEventListener("click", () => {
//   clearPreviousArray();
//   generateRandomArray();
// });
