// 함수 선언식

function sum(a, b) { // 매개 변수 a, b를 입력으로 받는다.
    return a + b;
    // return 함수 종료, 출력 데이터를 반환할 수 있음.
}

// 함수 호출

console.log(sum(1, 2));

// 함수 표현식: 이름이 없는 함수 -> 익명 함수
// 익명 함수는 그 자체로 독립된 객체
const aSum = function (a, b) {
    return a + b;
};

console.log(typeof aSum, aSum(1, 2));


// 익명 함수의 활용 1. 즉시 실행 함수
// 
let initText;
((number) => {
    let textList = ["홀수", "짝수"];
    if (number % 2 === 0) {
        initText = textList[1];
    } else {
        initText = textList[0];
    }
    console.log(`인수 ${number}를 이용해서 즉시 실행했음`);
})(6); // 즉시 실행
console.log(initText);
// console.log(textList) -> error 발생, 익명 함수 stack에서 사용되고 삭제된 변수.

// 함수의 매개 변수
// JavaScript는 선언부의 매개 변수 개수와 상관 없이 
// 모든 매개 변수가 arguments라는 이름의 배열로 전달.
console.log('-------------------arguments---------------------------');
function getNumberTotal() { // 매개 변수를 선언하지 않음
    console.log(arguments, arguments.length);
    let total = 0;
    for (argument of arguments) {
        if (typeof argument === 'number') {
            total += argument; // type checking
        } else {
            console.log(`${argument}는 number가 아니라 ${typeof argument}입니다!`);
        }
    }
    console.log(total);
}


getNumberTotal();
getNumberTotal(1, 2, 3);
getNumberTotal(1, 2, 3, '3', 4, 5);


console.log('callback -------------------------');

// 함수는 문법적 기능이 아니고 그 자체로 독립된 객체다.
function usingCallBack(val1, val2, func) {
    // 기능을 미정 상태로 두고 
    // 함수 호출 시 외부로부터 실행 로직을 전달
    // 거꾸로 호출. -> Callback 방식.
    if (typeof func === 'function') {
        // 매개변수 func는 함수다!
        func(val1, val2);
    } 

}

usingCallBack(1, 2, function(val1, val2)  {
    console.log(val1 + val2); // 실행 로직을 호출시 주입
});

usingCallBack(7, 5, function (v1, v2) {
    console.log(v1 * v2);
})

// 화살표 함수 => 
const f1 = function () { return 'hello' };
const f2 = () => 'hello';
console.log(typeof f1, f1(), typeof f2, f2());

((a) => console.log(a))('bowwow');

// 매개변수 한개

const f3 = function (name) { return `hello ${name}, ${this}` };
const f4 = name => `hello ${name}, ${this}`;
console.log(f3('kms'), f4('kkms'));

// 매개변수 여러개
const f5 = function (a, b) { return a + b; }
const f6 = (a, b) => a + b;
console.log(f5(1, 3), f6(1, 3));

// 콜백함수를 전달할 때 활용

usingCallBack(2, 3, (a, b) => console.log(a+b));


