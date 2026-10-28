// let arr = [1, 2, 3];
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// console.log(one, two, three);

// let arr = [1, 2, 3];
// let [one, two, three] = arr;
// console.log(one, two, three);
// 구조를 분해해서 각각의 요소에 할당을 해주는 것이 구조분해 할당임.
// 파이선의 언패킹과 동일함.

// let arr = [1, 2];
// let [one, two, three] = arr;
// console.log(one, two, three);

//배열의 길이가 넘는 변수는 undifined 처리함. 에러는 안남.

// let arr = [1, 2, 3];
// let [one, two] = arr;
// console.log(one, two);

//객체의 구조분해 할당

// let person = {
//   names: "kayD",
//   age: 35,
//   locations: "dg",
// };

// let { names, age, locations } = person;
// console.log(names, age, locations);

// function func({ names, age, locations }) {
//   // 실제로 let { names, age, locations } = person; 이게 들어간다고 보면 됨.
//   // func함수의 인수로 객체가 들어감.
//   console.log(names, age, locations);
// }

// let person = {
//   names: "kayD",
//   age: 35,
//   locations: "dg",
// };

// func(person);

function func({ names: n, age: a, locations: l }) {
  console.log(n, a, l);
}

let person = {
  names: "kayD",
  age: 35,
  locations: "dg",
};

func(person);
