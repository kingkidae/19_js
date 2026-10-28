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
