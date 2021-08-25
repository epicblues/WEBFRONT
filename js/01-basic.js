// 한 줄 주석
/*
    여러 줄 주석
    주석은 C나 자바와 동일하다*/

// 내장 객체 console
console.info('정보 메시지');
console.debug('디버그 메시지');
console.warn('경고 메시지');
console.error('에러 메시지');

console.log("Hello JavaScript");

// 연속으로 데이터를 출력할 때 -> ,로 구분

console.log('String',2021,true);

// 현재 플랫폼 정보 출력
console.log("Process Version : ", process.version);
console.log("Process Platform : ", process.platform);

// 객체의 속성 접근: .으로 구분
console.log(Math.PI);  // Math 객체의 속성인 PI;
console.log(Math.max(1,4,3,2,6,7,8));

// 자바스크립트 : 인터프리터 언어(먼저 해석을 하지 않는다. 실행해보지 않으면 에러를 확인할 수 없다. 내가 직접 확인해봐야 한다.)

console.log('-----------------------');

// var, let, const
var testVar = 10; // 전통적인 할당 방법, 가급적 사용 지양!
// let, const -> 변수의 scope는 블록 단위이다.
let testLet = 20; // let 변경 가능;
const TEST_CONST = 30; // const 변경 불가, 상수 처럼 활용 가능, 반드시 선언과 동시할당.

console.log("testVar:",testVar);
console.log("testLet:",testLet);
console.log("testConst:",TEST_CONST);

// 값의 변경 
testVar= 'changed';
testLet = 'changed';
// TEST_CONST = 'changed'; // 변경 할 수 없다.

console.log("testVar:",testVar);
console.log("testLet:",testLet);
console.log("testConst:",TEST_CONST);

console.log('-----------------------');

//JavaScript는 동적 타입 언어다.
// 데이터 타입이 고정되지 않고
// 데이터가 할당 되었을 때 그 타입이 결정된다.

let v = "This is string";
// 데이터 타입을 체크해야 한다.
console.log(v, '=>', typeof v);
v = 2021;
console.log(v, '=>', typeof v);

