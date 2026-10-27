"use strict";
// let objA = {}
// let objB = new Object()

// 파이선에서는 중괄호를 딕셔너리, 자스에서는 객체라고 함

// let person = {
//   name: "김기대",
//   age: 25,
//   age: 30,
// };

// console.log(person);

// let person = {
//   name: "김기대",
//   age: 25,
//   age: 30,
//   "like cat": true,
// };
// console.log(person);

// 프로퍼티 = 객체의 변수를 속성이라고 함.
// 메소드 = 객체의 함수를 메소드라고 함.

// console.log(person.name);
// // 속성을 가져올 때는 대괄호 없이 점찍고 가져오면 됨
// console.log(person["name"]);
// console.log(person["like cat"])

// 프로퍼티 추가
// let person = {
//   name: "김기대",
//   age: 25,
//   age: 30,
//   "like cat": true,
// };

// person.gender = "male";
// // 숫자 문자열에는 쩜 못찍음.
// person["nickname"] = "winterlood";

// console.log(person);

// 프로퍼티 수정
// let cat = {
//   name: "고앵이",
//   age: 4,
// };

// cat.name = "고맴미";
// cat["age"] = 5;

// console.log(cat);

// 프로퍼티 삭제
// let cat = {
//   name: "고앵이",
//   age: 4,
// };

// delete cat.name;
// delete cat["age"];
// console.log(cat);

// //상수 객체의 프로퍼티
// const obj = {
//   a: 1,
//   b: "text",
// };

// obj.a = 2;
// obj.c = undefined;

// console.log(obj);
// 오브젝트를 가르키는 주소 const건 let이건 자유롭게 추가, 삭제, 수정 가능

//in 연산자
// let obj = {
//   a: 1,
// };

// // console.log(obj.b);
// // 속성명 a만 있는데 b를 호출해서 undefined가 뜸

// // console.log(obj.b === undefined);
// let isPropertyExist = obj.b !== undefined;
// console.log(isPropertyExist);

// let person = {
//   age: 10,
// // };

// // let isNameExist = "name" in person;
// // console.log(isNameExist);

// //매서드 : 객체의 함수  객체에는 변수와 함수가 있음.
// let person = {
//   name: "김기대",
//   sayHi: function () {
//     // => () => console.log("hi")로도 쓸 수 있음.
//     console.log("hi");
//   },
// };
// person.sayHi();
