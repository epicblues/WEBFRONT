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

function testEverySome() {
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

// testEverySome();

function testFilter() {
    let data = [
        {name:"홍길동", age:28},
        {name:"장길산", age:35},
        {name:"전우치", age:40}
    ]
    let result = data.filter((item) => {
        return item.age <30;
    })
    console.log(testFilter.name,result);
    
}

testFilter();