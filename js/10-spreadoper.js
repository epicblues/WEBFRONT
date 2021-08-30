console.log("============= 배열 전개 연산");

let arr1 = ['홍길동', '장길산'];
let arr2 = ['임꺽정', '전우치'];
console.log(arr1,arr2);



// 기존 방식 합치기
// let combined = []; // 빈 배열
combined = [arr1[0],arr1[1],arr2[0],arr2[1]];
console.log(combined);

// 두 번째 방법
combined = arr1.concat(arr2);
console.log(combined);

// 세 번쨰 방법 (빈 배열을 리터럴을 통해 생성하고 거기에 concat 사용.)
combined = [].concat(arr1,arr2);
console.log(combined);

// ES6 Ver 네 번째 방법(스프레드 연산자);
combined = [...arr1,...arr2];
console.log(combined);

console.log('배열의 전개 =====================')
console.log("원본 배열 : ",arr1);

let [first,second,third="empty",...others] = arr1;
console.log(first,second,third,others);
console.log("원본 배열 : ", combined);

[first,second,third="응 없어",...others] = combined;
console.log(first,second,third,others);

console.log("\n======== 객체 전개 연산==================");
var obj1 = {one : 1, two : 2, other : 0};
var obj2 = {three:3, four:4, other : -1};

//Object Class를 이용하기 (지금도 많이 이용하는 방법) 한꺼번에 무작위로 진행 X 순서대로 값이 들어간다.
combined = Object.assign({},obj1,obj2);
console.log(combined);
// 연결 순서 바꾸기
combined = Object.assign({},obj2,obj1);
console.log(combined); // obj1의 other가 obj2의 other 를 덮어씌웠다.


// ES6 way (순서 중요, 중복값 가정)
var obj3 = {
    ...obj1,
    ...obj2
}
console.log(obj3);
obj3 = {
    ...obj2,
    ...obj1
}
console.log(obj3);

// 객체의 전개

let {one,two,other,three,...kms} = obj3; // 객체 안의 속성명과 변수 명과 일치해야 한다.
console.log(one,two,other,kms);

