// JavaScript의 Number

// int, floor를 가리지 않음, 산술 연산 가능.
let n1 = 2021;
let n2 = Number(2021);

console.log(n1, "==", n2, "?", typeof n1 == 'number');
console.log(typeof n1, typeof n2);

const hex = 0xFF0000; // 16진수 : 0x
const oct = 0o10; //8진수 : 0o 를 붙인다.

console.log(hex, oct);

// Math 객체 활용: 수학을 위한 내장객체
console.log("Math --------------");
console.log("PI 상수: ", Math.PI);
console.log("최대값 : ", Math.max(1,5,4,3,24,5,232,42,523));
console.log("최소값 : ", Math.min(1,5,4,3,24,5,232,42,523));
console.log(Math.round(3.567), Math.trunc(3.567), Math.floor(3.567));

// 그 외 Number 객체가 갖고 있는 상수들
console.log("표현할 수 있는 최대 정수 : ", Number.MAX_SAFE_INTEGER);
console.log("표현할 수 있는 가장 큰 수  : ", Number.MAX_VALUE); // 정밀도가 높지 않다.
console.log("표현할 수 있는 최소 정수 : ", Number.MIN_SAFE_INTEGER);
console.log("표현할 수 있는 가장 작은 수  : ", Number.MIN_VALUE); // 정밀도가 높지 않다.

console.log("------------------- Casting : 타입 변환");
// 중간에 데이터 타입이 변경될 수 있다.
// 중간에 형 변환이 필요한 경우가 많다.
// parse계열 메서드 : parseInt, parseFloat 활용
console.log("011", parseInt('011')); // 10진수로 분석하고 알아서 11로 바꾼다
console.log("011", parseInt('011', 2)); // 2진수 011 변환
console.log("0xFF", parseInt("0xFF", 16)); // 16진수 FF를 변환  // 컬러 값 전달 받을 때 필요!
console.log("123.456", parseInt("123.456"));
console.log("123.456", parseFloat("123.456"));

// parse 계열 메서드 단순히 string -> Number,
// 다른 타입으로 변경도 가능하다.
console.log("PI", parseInt(Math.PI)); // float -> int 변환

// 중요 : NaN - 숫자로 변환할 수 없는 문자열
// 변환하면 NaN return;
let v = parseInt('abc1234567');
console.log(v, typeof v);

// NaN가 포함된 산술 연산 -> 무조건 NaN return
console.log(2 + v);
console.log(isNaN(v));

// Infinity
let s = 1 / 0;
console.log("1 / 0 == ", 1 / 0);

console.log(s + 10);

// 유한수치인지 확인 isFinite 활용
console.log("is 1 / 0 finite ? " , isFinite(1 / 0));
console.log("is 2021 finite ? " , isFinite(2021));
console.log("is NaN finite ? " , isFinite(parseInt("abc123")));