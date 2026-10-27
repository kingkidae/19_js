// 함수가 필요한 이유
// 1. 반복되는 코드를 특정한 규칙에 의해 함수를 호출함을 통해 로직을 실행하는 것이 함수의 목적임

// 함수선언
// // 파이선
// def 함수명():
//     수행할코드
// 호출하는법
// 함수명()

// // 자바
// function 함수명(){
//     수행할 코드
// }
// 호출하는 법
// 함수명()

// function greeting() {
//   console.log("ㅎㅇ!");
// }
// console.log("함수시작 전");
// greeting();
// console.log("함수종료까지");

// function getArea() {
//   let width = 10;
//   let height = 20;
//   let area = width * height;

//   console.log(area);
// }
// function getArea(width, height) {
//   let area = width * height;
//   console.log(area);
// }
// getArea(100, 200);

// 함수반환
// function getArea(width, height) {
//   let area = width * height;
//   return area;
// }
// getArea(10, 20);
// let result = getArea(10, 20);
// console.log(result);

// function getArea(width, height) {
//   let area = width * height;
//   return area;
//   console.log("함수종료");
//   // 함수에서 리턴을 만나면 함수가 종료됨.
// }
// getArea(10, 20);
// let result = getArea(10, 20);
// console.log(result);

// 중첩함수
// function greeting() {
//   function greetingWithName(name) {
//     // 괄호 안의 name은 매개변수임
//     console.log(`hello! ${name}`);
//   }
//   let name = "김기대";
//   greetingWithName(name);
// }

// greeting();
// 여기서 함수를 호출하면 그리팅윗네임을 만드는 곳으로 올라감

// 함수와 호이스팅

// func();

// function func() {
//   console.log("hello");
// }
//파이썬에는 함수선언하기 전에 호출하면 에러가 나는데 자바스크립트는 에러가 발생하지 않는데 이를 호이스팅이라 함.

// // 함수 표현식
// let greeting = function () {
//   console.log("hello");
// };

// greeting();

// function greetFunc() {
//   console.log("hello dummie");
// }
// let greeting = greetFunc;
// // 괄호 치면 헬로 더미가 뜸. 괄호안치면 안뜨고 밑에 그리팅 괄호를 넣어야 헬로더미가 뜸.
// // 괄호안치면 즉시 실행, 괄호치면 함수를 실행
// greeting();

// //콜백 함수
// function parentFunction(callBack) {
//   // 페런트펑션(차일드펑크)는 let callBack = childFunc 라고 쓰는 것과 같음
//   console.log("parent");
//   callBack();
// }

// function childFunc() {
//   console.log("child");
// }

// parentFunction(childFunc);
//보통 괄호 안의 인수에 숫자나 변수를 넣었는데 이번에는 함수를 넣는다. 이것이 콜백함수임.

// function repeat(count) {
//   for (let idx = 0; idx < count; idx++) {
//     console.log(idx + 1);
//   }
// }

// repeat(5);
// function repeat(count) {
//   for (let idx = 0; idx < count; idx++) {
//     console.log(idx + 1);
//   }
// }

// function repeatDouble(count) {
//   for (let idx = 0; idx < count; idx++) {
//     console.log((idx + 1) * 2);
//   }
// }
// repeatDouble(5);

// function repeat(count, callBack) {
//   for (let idx = 0; idx < count; idx++) {
//     callBack(idx + 1);
//   }
// }

// function origin(count) {
//   console.log(count);
// }
// // repeat(5, origin);

// function repeat(count, callBack) {
//   for (let idx = 0; idx < count; idx++) {
//     callBack(idx + 1);
//   }
// }

// function origin(count) {
//   console.log(count);
// }

// function double(count) {
//   console.log(count * 2);
// }

// repeat(5, double);

// // //화살표 함수
// // let funcA = (매개변수) => {수행할 코드}
// // 한 줄인 경우는 중괄호 안해도 되긴 함.
// // function 함수이름() console.log()

// let greeting = (name) => `hello ${name}`;
// const greetingText = greeting("김기대");
// console.log(greetingText);

// let isConfirm = true;

// function confirm(onYes, onNo) {
//   // let onYes = () => console.log("승인")은 confirm(() => console.log("승인"), () => console.log("거부"))와 같음
//   if (isConfirm) onYes();
//   else onNo();
// }

// // if (isconfirm) {
// //   onYes();
// // } else {
// //   onNo();
// // }
// // 위와 같다

// confirm(
//   () => console.log("승인"),
//   () => console.log("거부"),
// );
