// let a = 1;

// function foo() {
//   console.log(a);
// }

// function bar() {
//   console.log(a);
// }

// foo();
// bar();
// console.log(a);
// 함수 밖에서 a가 계속 값이 나옴.
// 이것이 전역변수이다.

// function foo() {
//   let a = 1;
// }
// console.log(a);
// 함수 안에서 정의한 변수는 함수 안에서만
// 쓸 수 있음.
// 그 함수가 지역 변수임.

// if (true) {
//   let a = 1;
// }

// console.log(a);
// 조건문 안에서(=블록 안에서) a를 설정했기 때문에 밖에서는 안됨.

// for (let i = 0; i < 10; i++) {
//   let a = 1;
// }

// console.log(a);
// console.log(i);
// i나 a 모두 반복문 안에서만 쓸 수 있음.
// 밖에서는 실행되지 않는다.

// function foo() {
//   console.log("foo");
// }

// function bar() {
//   foo();
//   console.log("bar");
// }
// bar();

// function foo() {
//   console.log("foo");
//   function bar() {
//   console.log("bar");
// }
// "use strict"; 이걸 쓰면 엄격한 모드 적용돼서 일반모드(슬로피 모드)에서는 봐줘서 되는 것도 안되게 됨.
// // bar();

// if (true) {
//   function foo() {
//     console.log("bar");
//   }
// }

// foo();

// // for (let i = 1; i < 10; i++) {
// //   function bar() {
// //     console.log("bar");
// //   }
// // }

// // bar();

// if (true) {
//   var a = 1;
//   //var은 지역변수 개념이 없고, 전역적으로 사용가능.
//   //    파이썬에서는 global a 로쓰면 됨,
// }

// console.log(a);
