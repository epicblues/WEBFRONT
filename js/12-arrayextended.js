
function testForEach() {
    // forEach 메서드 : 배열의 요소를 하나씩 콜백에 전달한다.
    let source = ["banana",'orange','apple','mango'];
    console.log("===========forEach");
    source.forEach(data => {
        // 콜백 함수의 인자가 1개: 개별 요소
        console.log(data);
    })

    source.forEach((item,index) => {
        // 콜백 함수 인자가 2개:
        // 개별 요소와 그 요소의 index
        console.log(`${item}은 ${index}번째 요소`);
    })

    source.forEach((item,index,array) => {
        // 콜백 함수 인자가 3개
        // 개별 요소, 인덱스, 원본 배열 자체;
        // 실제 배열까지 조작하고 싶을 경우(불안정하게 this 같은 것을 사용할 필요가 없다?)
        console.log(`배열 ${array}의 ${index}번째 요소 : ${item}`);
    })
}

// testForEach();
console.log(this);
function testEverySome() {
    console.log(this);
    let data = [
        {name:"홍길동", age:28},
        {name:"장길산", age:35},
        {name:"전우치", age:40}
    ]
    let result = data.every((item) => {
        console.log(item);
        return item.age <34;
    })
    console.log(result);
}

testEverySome();


function testFilter() {
    let data = [
        {name:"홍길동", age:28},
        {name:"장길산", age:35},
        {name:"전우치", age:40}
    ]
    let result = data.filter((item) => {
        return item.name <= "홍길동";
    })
    console.log(testFilter.name,result);
    
}

testFilter();

function testMap() {
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let calculated = data.map(item => { return { result: item * 2 + 4, babo: 'kms', date:new Date(2012,item,10) } });
    console.log(calculated);
}

testMap();

function testReduce() {
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let sum = data.reduce((a, b, index) => {
        a["kmsobject" + index] = b
        return a;
    }, {})
    
    console.log(sum);
}
testReduce();

function testReduce2() {
    let source = [12, 4, 19, 33, 86];
    let sum = source.reduce((acc, value, idx, arr) => {
        // callback
        // acc -> 직전까지의 누산값
        // value -> 현재요소의 값
        // idx -> 현재요소의 인덱스
        // arr -> 누산에 사용되는 배열 자체
        console.log(`이전 값은 ${acc}`);
        console.log(`${arr}의 ${idx}번째 요소는 ${value}`);

        // 직전 누산값과 현재 누산값을 연산하여 리턴
        return acc + value;
    }, 0);

    console.log("원본 : ", source);
    console.log("누계값(reduce): ", sum);
}
testReduce2();

function testReduce3() {
    // map 함수를 reduce 함수로 시뮬레이션
    let source = [12, 4, 19, 33, 86];
    // 요소를 받아와서 짝수면 짝수, 홀수면 홀수
    // 내부 요소를 변경

    let mapped = source.reduce((a,b,idx) => {
        a[idx] = (b % 2 == 0) ? "짝수" : "홀수";
        return a
    }, [])
    console.log(mapped);
}

testReduce3();