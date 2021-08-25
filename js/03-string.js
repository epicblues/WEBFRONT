// JavaScript의 문자열

const s1 = "Modern JavaScript and Java"; //Literal
const s2 = String("Modern JavaScript"); // String 객체 이용

console.log(typeof s1, typeof s2);

//Property .length -> 문자열의 길이
//  모든 문자열의 내부 데이터는 인덱스로 접근 가능하다. + 변경 불가능

console.log(s1, "길이: ", s1.length);

//문자열 추출 메서드
console.log( s1.charAt(7)); // index 7의 문자
console.log(s1[7]); // 배열처럼 조회할 수 있다. 다만 참조용으로만 사용할 수 있고, 직접적인 변경은 불가능하다.
s1[7] = "s"; // 변경 안 되어 있음.
console.log(s1[7]);

console.log(s1.substr(7,10)); // 7번 인덱스 부터 10개의 문자열
console.log(s1.substring(7,17)); // 7번 인덱스 ~ 17번 인덱스 앞까지


// 중요 : 문자열 검색 메서드
console.log(s1.indexOf('boo',8));

let position = s1.indexOf('Java');
console.log(
    "1st Java", s1.indexOf("Java",position));
position += "JavaScript".length;
console.log("2nd Java" , s1.indexOf('Java',position));
position += "JavaScript".length;
console.log("No Keyword : " , s1.indexOf('Java',position)); // 찾는 검색어 없음 -1

// 문자열 치환 : replace
console.log(s1.replace("JavaScript", "JS")); // 실제  s1의 값이 바뀐 것이 아니다.
console.log(s1);

// 좌우 화이트 스페이스 제거 : trim
console.log("            Hello      ".trim());

// ---------------------- String 보충 -----------------------
// 이스케이프 문자
// " ' 상관 없으면 시작한 따옴표부터 다음 따옴표까지만 문자열로 파악
// 문자열 안의 특수문자를 포함하고자 할 경우 \를 사용할 수 있다. 
// \n 줄바꿈 \t 탭 \' \" 따옴표 \` 백틱(ES6에서 추가) \$(ES6에서 추가)

let message = "He said, \"Hello\"";
console.log(message);

let temp = 24;

console.log (`현재 온도는 \`${temp}\`도 입니다.`);

message = "예전에는 여러 줄 문자열 만드는 게 \n쉽지 않았습니다.";
console.log(message);
// ES6의 template 문자열 

// template string

message = `하지만 ES6에서는
아주 손쉽게
여러 줄
문자열을    만들 수
있습니다!`
console.log(message);