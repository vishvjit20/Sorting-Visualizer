const pause = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

let list = [];

const randomList = () => {
  for (let i = 0; i < 100; i++) {
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
for (let i = 0; i < list.length; i++) {
  arrHeights[i].style.height = `${list[i]}px`;
}

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
