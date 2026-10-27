//AND 단락 평가(=&&)
// 둘중에 하나만 거짓이어도 false가 되는 게 and
// function calcA() {
//   console.log("a");
//   return false;
// }

// function calcB() {
//   console.log("b");
//   return true;
// }
// console.log(calcA() && calcB());

// // 이거 실행 안됨. 왜냐하면 calcA랑 B모두 참이 나와야 실행을 반환해야 하는데 이미 A가 False라서 앤드 라서 B가 반환안됨..

// //and 단락 평가를 이용하여 오류 방지하기

// function calcA() {
//   console.log("a");
//   return undefined;
// }

// function calcB() {
//   console.log("b");
//   return true;
// }

// console.log(calcA() && calcB());

// function getName(person) {
//   return person.name;
// }

// let person;
// let name = getName(person);

// console.log(name);
// 퍼슨이 아무것도 없는 상태에서 네임 속성을 반환하라고 하니까 에러가 남.

// function getName(person) {
//   if (person !== undefined) {
//     return person.name;
//   } else {
//     return "not mediator";
//   }
// }

// let person;
// let name = getName(person);
// console.log(name);

// function getName(person) {
//     if (person !== undefined) {
//         return person.name;
//     }
// } else {
//     return "not mediator"
//     }
// }

// let person = null;
// let name = getName(person);

// console.log(name);

// function getName(person) {
//   return person && person.name;
// }

// let person = {
//   name: "kayD", // 퍼슨은 속성명과 값이 있는 객체임.
// };

// let name1 = getName(undefined); //언디파인드는 펄시한 값이니까 뒤에 펄슨 네임까지 안감.
// let name2 = getName(null); // 널도 펄시한 값이라 펄슨 네임까지 안감.
// let name3 = getName(person); // 지금 현재 퍼슨이 있기 때문에 참이라서 kayD가 나옴.

// console.log(name1);
// console.log(name2);
// console.log(name3);

// or 단락평가 (= ||)

// function calcA() {
//   console.log("a");
//   return true;
// }

// function calcB() {
//   console.log("b");
//   return false;
// }

// console.log(calcA() || calcB());

// const name = "kayD" || undefined; //참은 아니지만 트루디한 값이기 떄문에 굳이 뒤까지 넘어가지 않음.
// console.log(name);

const varA = 0;
const varB = "kayD";

const resultA = varA || varB; // a는 펄지한값, b는 트루디한 값이라 or연산의 결과로 kayD라는 값을 리절트 a에 저장
const resultB = varA ?? varB;

console.log(resultA);
console.log(resultB);
