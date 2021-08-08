let list = [];
const randomList = () => {
  for (let i = 0; i < 100; i++) {
    let randomNo = Math.trunc(Math.random() * 450 + 1);
    list.push(randomNo);
  }
};

randomList();

let array = document.querySelector(".array");

for (let i = 0; i < list.length; i++) {
  let div = document.createElement("div");
  div.classList.add("array-vals");
  array.appendChild(div);
}

let arrHeights = document.querySelectorAll(".array-vals");
for (let i = 0; i < list.length; i++) {
  arrHeights[i].style.height = `${list[i]}px`;
}

const pause = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

const compare = (i, j, arr) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arrHeights[i].style.height = `${list[j]}px`;
  arr[j] = temp;
  arrHeights[j].style.height = `${temp}px`;
};
