for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(`${i}*${j} = ${i * j}`);
    }
}
console.log('-----------------------------------------');

let i = 2;
while (i <= 9) {
    let j = 1;
    while (j <= 9) {
        console.log(`${i}*${j} = ${i * j}`);
        j++;
    }
    i++;
}

console.log('-----------------------------------------');

function printStars(numOfStar) {
    for (let i = numOfStar; i > 0; i--) {
        let str = '';
        for (let j = 1; j <= i; j++) {
            str += '*';
        }
        console.log(str);
    }
}
console.log('-----------------------------------------');


function printStarRaeVer(numOfStar) {
    let str = '';
    for (let i = 0; i < numOfStar; i++) {
        str += '*';
    }

    for (let j = numOfStar; j>0; j--) {
        console.log(str.substring(0, j));
    }
}
printStarRaeVer(5);

let p = 5;
while (p > 0) {
    let str = '';
    let k = 1;
    while (k <= p) {
        str += '*';
        k++;
    }
    p--;
    console.log(str);
}


// ES6 : for ... in
// 객체의 Property를 순회한다.
let obj = {
    name: "홍길동",
    age: 28,
    job: '도적',
    gender:'남성'
}

let array = ['kms', 2, 4, 'wtf', obj,true,null,undefined];


for (let key in obj) {
    console.log(key, obj[key]);
}


for (let key in array) {
    console.log(key, array[key]);
}

// for of 는 반복 가능 객체의 요소를 하나씩 끄집어낸다.
// for of 는 순회 객체 에서만 사용할 수 있다.
// Error : obj는 순환 객체가 아니다.

for (let value of array) {
    console.log(value);
}