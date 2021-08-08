const pause = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

let list = [];

let numbers = Math.trunc(900 / sliderVal);

const randomList = () => {
  for (let i = 0; i < numbers; i++) {
    let randomNo = Math.trunc(Math.random() * 450 + 1);
    list.push(randomNo);
  }
};

randomList();

for (let i = 0; i < list.length; i++) {
  let div = document.createElement("div");
  div.classList.add("array-vals");
  array.appendChild(div);
}
let arrHeights = document.querySelectorAll(".array-vals");
numbers = Math.trunc(900 / sliderVal);
for (let i = 0; i < numbers; i++) {
  arrHeights[i].style.height = `${list[i]}px`;
  arrHeights[i].style.width = `${sliderVal}px`;
}

slider.addEventListener("change", function (e) {
  sliderVal = e.currentTarget.value;
  numbers = Math.trunc(900 / sliderVal);
  for (let i = 0; i < list.length; i++) {
    numbers = Math.trunc(900 / sliderVal);
    if (i >= numbers) arrHeights[i].style.display = "none";
    else {
      arrHeights[i].style.display = "block";
      arrHeights[i].style.width = `${sliderVal}px`;
    }
  }
});

const compare = (i, j, arr) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arrHeights[i].style.height = `${list[j]}px`;
  arr[j] = temp;
  arrHeights[j].style.height = `${temp}px`;
};

const isGreater = (i, j, arr) => {
  if (arr[i] > arr[j]) return true;
  return false;
};

const isSmaller = (i, j, arr) => {
  if (arr[i] < arr[j]) return true;
  return false;
};
