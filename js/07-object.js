// 객체의 생성(설계도 없는 ver)

const person = new Object(); // 빈 객체 생성

// 필요할 때 동적으로 속성을 추가할 수 있다.

person.name = "김민성"; // 문자열 데이터 (프로퍼티)
person.age = 30; // 숫자 데이터 (프로퍼티)
person.showInfo = function ()  { // 메서드
    let message = `name : ${this.name} age : ${this.age}`;
    console.log(message);
}

person.showInfo(); // 속성에 접근시 .으로 구분


// JSON 활용(JavaScript Object Notation) 매우 중요
// key : value
// 속성은 ,로 구분
const person2 = {
    name: "김민성",
    age: 30,
    showInfo: function() {
        let message = `name : ${this.name} age : ${this.age}`;
        console.log(message);
    }
}

person2.showInfo();

// Prototype 방식

const Member = function (name, position) {
    this.name = name;
    this.position = position;
} // 함수를 생성자로 활용하기



const m1 = new Member('강백호', 'PF');
const m2 = new Member('서태웅', 'SF');

console.log("m1 : ", m1, "m2 : ", m2);

m1.sayHi = function ()  {
    console.log(`${this.name}이(가) 당신을 부른다!`);
}
// 자바스크립트는 동적으로 속성과 메서드르 추가할 수 있다.
// m2.sayHi(); error 발생, m1에만 메서드를 설정했다.
// 동적 추가된 속성, 메서드는 해당 객체에서만 활용.
m1.sayHi();

// 원래 객체의 prototype(공유영역)을 이용하면
// 해당 객체를 비롯한 모든 객체들이 속성을 공유할 수 있다.
// OOP의 상속 개념을 구현할 수 있다.

console.log(m1.constructor);
console.log(m2.constructor);
console.log(Member.prototype); // 따로 설정을 안 하면 빈 객체.

//Prototype 영역에 속성을 추가한다.

Member.prototype.introduce =  function() {
    console.log("Name : " + this.name + " Position : " + this.position);
}

Member.prototype.team = "상북";
m1.introduce();
m2.introduce();

// 기존 객체들에도 동적으로 속성 추가 가능
// 

String.prototype.sayHello = function () {
    return "Hello, " + this;
}

console.log("둘리".sayHello());







