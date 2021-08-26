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


function printStartsRae(numOfStar) {
    let str = '';
    for (let i = 0; i < numOfStar; i++) {
        str += '*';
    }

    for (let j = numOfStar; j>0; j--) {
        console.log(str.substr(0, j));
    }
}
printStartsRae(10);

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



