// 배열 생성: Array 객체로
const v1 = new Array(10); // 10개짜리 빈 배열;
const v2 = new Array(); // 0개 짜리 빈 배열;
const v3 = new Array(2021,true,"string"); // 어떤 객체든 집어 넣을 수 있다.

// .length 속성 : 요소의 갯수
console.log("v1 : ",v1,v1.length); 
console.log("v2 : ",v2,v2.length); 
console.log("v3 : ",v3,v3.length); 

// 리터럴로 생성(추천)

const v4 = [];
const v5 = [2021,"string",true];

// 배열 타입 확인 시 typeof 사용하면 안 된다.
console.log("v4 : ",v4,v4.length, typeof v4); 
console.log("v5 : ",v5,v5.length, typeof v5); 

// 배열 타입 확인: Array.isArray() 메서드 활용;
console.log("v4",Array.isArray(v4));
console.log("v5",Array.isArray(v5));

// 기본 값으로 채우기: fill 메서드

const v6= new Array(10).fill(null); //1o개짜리 1로 채워진 배열
console.log("v6 : ", v6);
v6.fill("default"); // 언제든지 활용할 수 있다. v6를 default로 덮어씌운다.
console.log("v6 : ", v6);

// C,Java의 배열보다 다양한 용도로 활용
const person = {
    name: '홍길동',
    age:28
}
const variable = 'na' + 'me'
// 객체의 속성 -> 배열처럼 접근 가능
console.log(person['na' + 'me']);
console.log(person['age']);

const arr = []; // 빈 배열
console.log(arr, arr.length);
arr[1+5] = 'muyaho';
arr[person.age] = 204;
console.log(arr, arr.length);

console.log('============== 배열 메서드')
const veges = ['배추','무',"쪽파"];
const sources = ['소금','고춧가루','새우젓'];

// 배열 합치기
console.log(veges, sources);
const items = veges.concat(sources);
console.log(items);

// 배열 요소 합치기
const foodStr = items.join(" / ");
console.log(foodStr);


// push: 배열 맨 뒤에 새 요소 추가
// pop: 배열 맨 뒤 요소를 추출 후 제거
// push + pop : Stack처럼 활용할 수 있다.

let fruits = ['banana','orange','apple','mango'];
console.log("STACK : ", fruits);
fruits.push('kiwi');
console.log("STACK : ", fruits);
console.log("POP : ",fruits.pop());
console.log("POP : ",fruits.pop());
console.log("STACK : ", fruits);

// shift : 배열 맨 앞 요소룰 추출 후 제거.
// push와 shift를 같이 활용하면 Queue 자료형 처럼 사용 가능.

fruits = ['banana','orange','apple','mango'];
console.log("QUEUE : ", fruits);
fruits.push('kiwi');
console.log("QUEUE : ", fruits);
console.log("SHIFT : ",fruits.shift());
console.log("SHIFT : ",fruits.shift());
console.log("QUEUE : ", fruits);


console.log("splice --------------------------");
// splice : 요소 삭제와 삽입 한 번에 할 수 있다.
fruits = ['banana','orange','apple','mango'];
console.log("원본 : ", fruits);
// 인수가 1개 : 해당 인덱스부터 끝까지 제거.
console.log("추출된 요소들 :", fruits.splice(2) );
console.log("추출된 이후 : ", fruits);


fruits = ['banana','orange','apple','mango'];
console.log("원본 : ", fruits);

// 인수가 2개 : 첫 번째 index부터 2 번째 인수 크기 만큼 추출 후 제거
console.log("SPLICE (2,1) :" ,fruits.splice(2,1));
console.log("원본 : ", fruits);

// 인수가 3개 : 첫 번째 index부터 2 번째 인수 크기만큼 추출 후 제거 
// 이후 3 번째 부터의 요소들을 첫 번째 index 자리에 넣는다.
fruits = ['banana','orange','apple','mango'];
console.log("원본 : ", fruits);
console.log("SPLICE (2,1,'boogie',true',1,2,3)", fruits.splice(2,1,'boogie',true,1,2,3));
console.log("원본 : ", fruits);

console.log("reverse ----------------------------");
// 배열의 순서를 뒤집는다.
fruits = ['banana','orange','apple','mango'];
console.log("원본 : ", fruits);
fruits.reverse();
console.log("reverse 이후 : ",fruits);

// slice : 추출된 내용으르 삭제하지 않는다. 두 번째 인수 index는 추출 대상에서 예외 this is exclusive.
let slices = fruits.slice(1,3);
console.log("원본 : ", fruits);
console.log("slice : ",slices);

fruits.sort();
console.log("sorted : ", fruits);
fruits.sort((a,b) => {
    // 반환 값이 0이면 순번이 같다.
    // 반환 값이 -면 오름차순 순번.
    // 반환 값이 +면 내림차순 순번.
    if(a==b) return 0;
    if(a>b) return -1;
    if(a<b) return 1;
}

)
console.log("reverseSorted : ", fruits);

// split: 특정 구분자를 기준으로 문자열을 분리, 배열 반환
const str = "Javascript is something stranger than other languages";
strArr = str.split(" ");

for(data of strArr) {
    console.log("strArr's data : ",data);
}


for(index in strArr) {
    console.log("strArr's index : ",index);
}