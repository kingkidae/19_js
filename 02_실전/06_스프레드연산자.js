// let arrA = [1, 2, 3];
// let arrB = [...arrA, 4, 5, 6]; //이걸로 하면 1,2,3,4,5,6
// // let arrB = [arrA, 4, 5, 6]; //이걸로 하면 array(3),4,5,6
// console.log(arrB);
// / ...세개 붙여주면 풀어줌.

// let objA = {
//   a: 1,
//   b: 2,
// };

// let objB = {
//   ...objA,
//   c: 3,
//   d: 4,
// };

// console.log(objB);

// function func(a, b, c) {
//   console.log(a, b, c);
// }

// let arr = [1, 2, 3];
// // func(arr); // 1, 2, 3, 언디파인, 언디파인으로 뜸. 그러므로 스프레드 해줘야함.(스프레드: ...으로 풀어주는거)
// func(...arr);

// function func(...rest) {
//   console.log(rest);
// }
// func(1, 2, 3, 4);

// function func(param, ...rest) {//함수func에 인수를 넣을 때 넣은 인수에 숫자 다 지정하고, 레스트는 남은거가 레스트임.
//   console.log(param);
//   console.log(rest);
// }
// func(1, 2, 3, 4);

// function func(...rest, param) {
//     console.log(param);
//     console.log(rest);
// }
// func(1, 2, 3, 4);
// 레스트가 먼저 들어가면 오류남 꼭 마지막에 넣어줘야 함.
//무조건 레스트라고 적을 필요 없음. 변수이기 때문에 걍 아무 글자나 입력해도
//앞에 쩜쩜쩜 붙으면 레스트가 됨.
