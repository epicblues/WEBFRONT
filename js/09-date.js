// Date: 날짜와 시간
let now = new Date(); // 현재 시간
console.log(now);
console.log(now.getMonth() + 1);
let time = new Date(2021,7,30); // 월은 0부터 즉 2021 년 8월 30일
console.log("time :  ", time);
time = new Date(2012,8,24,13,30,0x20); // 년월일시분초
console.log(time);

console.log("년도 : " , time.getFullYear());
console.log("월 : " , time.getMonth() +1);
console.log("일 : " , time.getDate());
console.log("요일 : " , time.getDay());
console.log("시 : " , time.getHours());

time.setFullYear(2021);
console.log("변경된 time : ",time.getFullYear());
// 이 날은 무슨 요일?
console.log("무슨 요일 ? : ", time.getDay());