// 논리형 true or false
// 비교 연산 / 논리 연산의 결과
// 논리 조합: AND(논리곱 : &&), OR (논리합 : ||), NOT(논리 부정 : !)


let v1; // 선언 하되 초기화 되지 않았다(조회하면 undefined)
let v2 = null; // 선언하고 null로 초기화되었다.

console.log(typeof v1, typeof v2);

// undefined : 자바스크립트 엔전에 허용된 데이터
// null : 개발자에게 허락된 type

// null 체크;

console.log(v1, typeof v1, v1 == null);
console.log(v2, typeof v2, v2 == null);

// 개발자가 임의로 undefined를 할당할 수 있다.
v2 = undefined;
console.log(v2, typeof v2, v2 === undefined);


// == 데이터 타입과 관계 없이 값 자체를 비교한다.
// === 값과 함께 타입도 비교한다.

let boogie = null;
console.log("내가 참이면" && "뒤의 값을 출력한다?");
console.log(null || "앞이 거짓이면 여기를 출력한다고! WTF");

// JavaScript는 string, number type이 비어있으면 false, 데이터가 있으면 true 반환.

console.log(Boolean(0));
console.log(Boolean(''));

let contents = "CONTENTS";
let punch = null;
console.log('ya 내가 true여도 출력 안 됩니다' && 0); // 0
console.log((punch + 'yaho') && (punch + 'yaho')); // nullyaho
console.log('' + null + 's' || false); // false



