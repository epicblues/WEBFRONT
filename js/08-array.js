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

items.splice(3,[a,b,c]);
