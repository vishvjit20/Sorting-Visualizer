const speed = document.querySelector(".speed-menu");

let time = 100;

speed.addEventListener("change", function (e) {
  let timeConst = Number(e.currentTarget.value);
  if (timeConst !== 0) {
    time = 100 / timeConst;
    console.log(time);
  }
});
