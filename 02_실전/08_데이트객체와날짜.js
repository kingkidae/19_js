// // 데이트 객체 생성하기
// let date = new Date(); //new는 객체를 생성하는 생성자임.
// console.log(date);

// let jan01_1970 = new Date(0); // 인수 0을 넣었을 때 어
// console.log(jan01_1970);

// let jan02_1970 = new Date(1); // 인수 0을 넣었을 때 어
// console.log(jan02_1970);

// let jan02_1970 = new Date(1000); // 인수 1000을 넣었을 때 1초

// let jan02_1970 = new Date(60 * 1000); // 인수 60000을 넣었을 때 1분
// console.log(jan02_1970);

// let jan02_1970 = new Date(60 * 60 * 1000); // 인수 3600000을 넣었을 때 1시간
// console.log(jan02_1970);

// let jan02_1970 = new Date(24 * 60 * 60 * 1000); // 인수 86400000을 넣었을 때 1일
// console.log(jan02_1970.getTime());

// let date = new Date();
// console.log(date.getTime());

//문자열로 특정날짜 전달하기
// let date1 = new Date("2000-10-10/00:00:00");
// let date2 = new Date("2000.10.10/00:00:00");
// let date3 = new Date("2000/10/10/00:00:00");
// let date4 = new Date("2000 10 10 00:00:00");
// console.log(date1);
// console.log(date2);
// console.log(date3);
// console.log(date4);
// //

// let date1 = new Date(2000, 10 - 1, 10, 0, 0, 0, 0); // 월만 마이너스 1해줘야 됨.
// console.log(date1);

// //타임스탬프로 날짜 생성하기
// new Date(2000, 8 + 1, 10);
// let timeStamp = Date.getTime();
// console.log(timeStamp);
// let dateClone = new Date(timeStamp);
// console.log(dateClone);

// let date = new Date(2000, 9, 10);
// console.log(date);

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// //set
// let date = new Date(2000, 9, 10);
// date.setFullYear(2021);
// date.setMonth(10);
// date.setDate(11);
// console.log(date);

//toString
// const today = new Date(2000, 9, 10, 22);
// console.log(today.toString()); // 시간까지 다 나옴

// //toDateString
// const today = new Date(2000, 9, 10, 22);
// console.log(today.toDateString()); // 시간 제외하고 나옴

//toLocaleString, toLocalDateString
// const today = new Date(2000, 9, 10, 22); // 한국어로 됨.
// console.log(today.toLocaleString());
// console.log(today.toLocaleDateString()); // 시간은 안나옴 한국어로 일자 나옴.

//date 객체 응용하기
function moveMonth(date, moveMonth) {
  const curTimestamp = date.getTime();
  const curMonth = date.getMonth();
  const resDate = new Date(curTimestamp);
  resDate.setMonth(curMonth + moveMonth);
  return resDate;
}

const dateA = new Date("2000-10-10");
console.log("A: ", dateA);

const dateB = moveMonth(dateA, 1);
console.log("B", dateB);

const dateC = moveMonth(dateA, -1);
console.log("C", dateC);
