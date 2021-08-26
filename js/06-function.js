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

