// console.log("1번");
// console.log("2번");
// console.log("3번");
// js에서는 기본적으로 작성 순서에 따라 출력됨.

// setTimeout(function () {
//   console.log("1번");
// }, 3000); //3초 뒤에 출력을 하라는 뜻.

// console.log("2번");

// setTimeout(() => {
//   console.log("1!");
// }, 3000);

// console.log("2!");

// function orderCoffee(coffee, time) {
//   setTimeout(() => {
//     console.log(`${coffee} 제조 완료`);
//   }, time);
// }

// orderCoffee("달콤커피", 4000);
// orderCoffee("레몬티", 2000);
// orderCoffee("시원커피", 3000);

// function double(num) {
//   setTimeout(() => {
//     const doubleNum = num * 2;
//     console.log(doubleNum);
//   }, 1000);
// }

// double(10);

// function double(num) {
//   return setTimeout(() => {
//     const doubleNum = num * 2;
//     return doubleNum;
//   }, 1000);
// }
// const res = double(10);
// console.log(res);

function double(num, cb) {
  setTimeout(() => {
    const doubleNum = num * 2;
    cb(doubleNum);
  }, 1000);
}

double(10, (res) => {
  console.log(res);
});

console.log("마지막");
