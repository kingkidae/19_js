// let age = 25. 30;
// // 파이썬에서는 튜플 자료형으로 가능했으나, 자바에서는 변수 하나에 하나의 값만 사용할 수 있다
// console.log(age);

// 숫자형
// let age = 25;
// let tall = 175.9;
// let minus = -20;

// console.log(age);
// console.log(tall);
// console.log(minus);

// console.log(typeof age);
// console.log(typeof tall);
// console.log(typeof minus);

// 사칙연산;
// console.log(1 + 2);
// console.log(1 - 2);
// console.log(1 * 2);
// console.log(1 / 2);
// console.log(1 % 2);

// let inf = Infinity;
// // 중간에 대문자나 나왔다는 것은 m뒤에 inf가 붙었다는 의미임. 왜냐하면 카멜 케이스이니까. 인피니티는 무한대를 의미
// let mInf = -Infinity;
// let nan = NaN;
// console.log(inf);
// console.log(mInf);
// console.log(nan);
// //not a number라는 뜻
// console.log(1 / 0);
// console.log(1 / 0);
// console.log("hello" + 2);
// console.log("hello" - 2);
// console.log("hello" * 2);
// console.log("hello" / 2);
// 더하기 제외 다른 값은 모두 NaN으로 나옴.

// 문자형
// let myName = "이정환";
// let welcomeText = "ㅎㅇ";
// let resultWelcomeText = myName + welcomeText;
// console.log(resultWelcomeText);
// 어떻게 쓸지 예상이 가는 변수명이 좋은 변수명임.
// 옛날에는 var을 많이 썼음. let처럼 이건 변경이 됨. 변경안되는거 하려면 콘스트 ㄱㄱ

// let names = "jh lee";
// let locations = "yokgok";
// let introduce = `${names}is livin in ${locations}.`;
// let introduse2 = "j lee is livin in yk";
// 파이선에서는 f"{names}는 {locations}에 살고 있다." 라고 쓰면 됨
// ` <<<<이거는 백틱이라는 거임.
// console.log(introduce);
// console.log(introduce2);

// 불리언, null, undefined
// let emptyVar = null;
// 널은 아무것도 없다는 뜻임
// console.log(emptyVar)

// let realEmptyVar;
// console.log(realEmptyVar);
//정의되지 않았음.

// let isSwitchOn1 = false;
// let isSwitchOn2 = true;

// console.log(isSwitchOn1);
// console.log(isSwitchOn2);

// 형 변환

// let number = 10;
// let string = "20";
// const result = number + string;
// console.log(result);

// let strA = "10";
// let strB = "10개";
// let numA = Number(strA);
// let number = Number(strB);
// console.log(numA);
// console.log(numB);

// let numA = parseInt(strA, 10);
// let numB = parseInt(strB, 10);
// 팔스인트(변수명, n진수)

// let num = 2022;
// let str = String(num);
// 숫자였다가 문자로 바뀜
// // console.log(str);
// // console.log(typeof str);

// let varA;
// let varB = null;
// let varC = true;

// // console.log(typeof varA);
// // console.log(typeof varB);
// // console.log(typeof varC);

// let strA = String(varA);
// let strA = String(varB);
// let strA = String(varC);

// console.log(strA);
// console.log(strB);
// console.log(strC);

// let varA = "하이";
// let varB = 0;
// let varC = "";

// let boolA = Boolean(varA);
// let boolB = Boolean(varB);
// let boolC = Boolean(varC);

// console.log(boolA);
// console.log(boolB);
// console.log(boolC);

// 비교연산자
// let numberA = 2;
// let numberB = 2;
// let numberC = "2";
// console.log(numberA === numberB);
// console.log(numberB === numberC);
// console.log(numberB !== numberC);

// console.log(numberA == numberB)
// console.log(numberB == numberC)
// // 등호 2개면 데이터 타입을 따지지않고 같은지 다른지만 봄
// console.log(numberA !== numberB);
// console.log(numberA > numberB);
// console.log(numberA >= numberB);

// null 병합 연산자

// let varA = 10;
// let varB = 20;
// let varC;

// console.log(varA ?? varB);
// console.log(varC ?? varB);
// or과 ?? 이 두개가 같다.

// 삼항 조건 연산자

// const varA = '안녕하세요'
// typeof varA === "string" ?
// ? console.log("문지지료형"), console.log(문자자료형이 아님.)

// let num = 1;
// num % 2 === 0 ? "짝수" : "홀수"
// //
