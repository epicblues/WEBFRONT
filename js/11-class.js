// 원래 JavaScript는 Object - based Language
//  공유 영역인 Prototype 기반 상속 방식.
// ES6에서는 Class 문법이 추가되어서 객체 지향 프로그래밍 방식 일부 구현 가능.

class Shape {
    // 정적 메서드 static
    //      -> new 하지 않고도 class명 method명으로 접근 가능
    static create(x,y) {
        return new Shape(x,y);
    }
    // 생성자 constructor
    constructor(x,y) {
        this.name = "Shape"; // 속성 : 앞에는 this 키워드
        this.move(x,y);
    }

    // 메서드들
    move(x,y) {         
        this.x = x;
        this.y = y;
    }

    area() {
        return 0;
    }
}

// 클래스의 사용
let s = new Shape(0,0); // new를 이용한 인스턴스 생성
let s2= Shape.create(10,20); // static 메서드는 new 없이 사용할 수 있다.
console.log(s);
console.log(s.area());

console.log(s2);
console.log(s2.area());

// 부모 클래스 상속
class Circle extends Shape {
    constructor(x,y,radius) {
        super(x,y);// 부모 생성자 호 출
        this.radius = radius; // 자식만의 속성 설정
    }
    area() {
        if(this.radius ===0) {
            return super.area(); // 부모의 메서드 호출
        }
        return this.radius ** 2 * Math.PI;
    }
}

let s3 = new Circle(2,2,3);
console.log(s3,s3.area());