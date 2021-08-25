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

