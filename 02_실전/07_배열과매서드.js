// let food = ["jajang", "pizza", "chicken"];
// const newLength = food.push("ss pork");

// console.log(food);
// console.log(`새로운 배열의 길이 : ${newLength}`);

// let food = ["jajang", "pizza", "chicken"];
// const newLength = food.push("sspork", "lasagna");
// console.log(food);
// console.log(`새로운 배열의 길이 ${newLength}`);

// let food = ["jajang", "pizza", "chicken"];
// const removedItem = food.pop();
// console.log(removedItem);
// console.log(food);
// //마지막에 있는 요소가 빼는 메소드가 pop임.

// let food = ["jajang", "pizza", "chicken"];
// removedItem = food.shift();

// console.log(removedItem);
// console.log(food);
//shift는 앞의 요소부터 지움

// let food = ["jajang", "pizza", "chicken"];
// const newLength = food.unshift("galbi");

// console.log(food);
// console.log(`새로운 배열의 길이 ${newLength}`);

//unshift는 배열의 맨 앞에 추가를 함.

//슬라이스
//arr.slice(start값, end값)
// let arr = [1, 2, 3];
// const sliced = arr.slice(0, 2);
// console.log(arr);
// console.log(sliced);

//슬라이스는 인덱스도 가능함.
// let arr = [1, 2, 3];
// console.log(arr[2]); //여기선 파이선처럼 마지막요소 가지고 올 때처럼 -1 쓰면 언디파 뜸.
// console.log(arr.slice(2));
// console.log(arr.slice(1));
// console.log(arr.slice(-1));
// console.log(arr.slice(-2));

//concat
//서로 다른 배열을 이어 붙여서 새 배열을 반환하는 메소드
// let arrA = [1, 2];
// let arrB = [3, 4];
// let arrC = arrA.concat(arrB);
// console.log(arrC);

// //객체 concat
// let arrA = [1, 2];
// let arrB = { a: 1, b: 2 };
// let arrC = arrA.concat(arrB);
// console.log(...arrC);

//순회 매소드
// 기본 구조
// function cb(item, index, array) {
//     //수행할 코드
// }
// arr.foreach(cb)

// function cb(item, idx) {
//   console.log(`${idx + 1}번째 요소: ${item}`);
// }
// const arr = [3, 7, 2];
// arr.forEach(cb);

//탐색 메소드 배열에서 찾으려는 요소의 인덱스를 반환하는 메소드
//arr.indexOf(item, fromIndex);

// let arr = [1, 3, 5, 7, 1];
// console.log(arr.indexOf(1, 0));
// console.log(arr.indexOf(1, -1));
// console.log(arr.indexOf(4, 0)); //없을 때에는 -1을 리턴함.
// console.log(arr.indexOf(7, 9)); //없을 때에는 -1을 리턴함.
// console.log(arr.indexOf("3", 0)); //없을 때에는 -1을 리턴함.

// //includes 포함 여부를 알려주는 매소드
// let arr = [1, 3, 5, 7, 1];
// console.log(arr.includes(3));
// console.log(arr.includes("생선"));

//find index 인덱스 넘버를 가져오는 매소드
// function datemine(item, idx, arr) {
//   //   console.log(idx);
//   //   console.log(arr);
//   if (item % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let arr = [1, 3, 5, 6, 8];
// let index = arr.findIndex(datemine);
// console.log(index);

// let arr = [1, 3, 5, 6, 8];
// arr.findIndex((item) => (item % 2 === 0 ? true : false));
// // let datetime = (item) => (item % 2 == 0 ? true : false); // 이 두개는 서로 강음
// console.log(item);

// let arr = [
//   { name: "이종원" },
//   { name: "이장환" },
//   { name: "신다민" },
//   { name: "김효빈" },
// ];

// let index = arr.findIndex((item) => {
//   return item.name === "이종원";
// });

// console.log(index);

//find 메소드

// let arr = [
//   { name: "이종원" },
//   { name: "이장환" },
//   { name: "신다민" },
//   { name: "김효빈" },
// ];

// let element = arr.find((item) => item.name === "이종원");
// console.log(element);

// let arr = [
//   { name: "이종원", hobby: "축구" },
//   { name: "이정환", hobby: "영화" },
//   { name: "신다민", hobby: "축구" },
//   { name: "김효빈", hobby: "노래" },
// ];
// //아이템이 객체, 프로퍼티는 하비 //앞에가 배열일 때 쓰는 함수
// let filtered = arr.filter((item) => item.hobby === "축구");

// console.log(filtered);

// //map

// let arr = [1, 2, 3, 4];

// let newArr = arr.map((item) => item * 3);
// console.log(newArr);

// let arr = [
//   { name: "이종원", hobby: "축구" },
//   { name: "이정환", hobby: "영화" },
//   { name: "신다민", hobby: "축구" },
//   { name: "김효빈", hobby: "노래" },
// ];

// let newArr = arr.map((item) => item.name);
// console.log(newArr);

// sort 정렬

// let arr = ["b", "a", "c"];
// arr.sort();
// console.log(arr);

//join method
// let arr = ["hi", "i'm", "kay."];
// console.log(arr.join());
// console.log(arr.join("-"));

//reduce
// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce(
//   (acc, item) => acc + item,
//   0, //acc:이전값(=누적된 값이 저장되는 공간) / item:현재값 /0: 초기값
// );
// console.log(result);
