// 어떤 함수가 생성자인가?


function Fake(a, b, c) {
    console.log(`im fake!!!!!!`);
}

const f1 = new Fake(1, 2, 3);
console.log(f1.constructor);
Fake.prototype.name = "fake prototype name";
Fake.prototype.age = 40;
Fake.prototype.showInfo = function () {
    console.log(`${this.name}은 ${this.age}만큼 허리가 구부러졌습니다`);
}

f1.showInfo();
Fake.staticFunction = function () {
    console.log(`${this.name}의 prototype의 주소 : ${this.prototype}`);
}

Fake.staticFunction();

for (key in Fake) {
    console.log(key, Fake[key]);
}

const crazy = new Fake.prototype.showInfo();
crazy.constructor();



console.log(undefined || null);

// anonymous function activate asap

((a, b, c) => {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(f1);
}).call(f1, 2, 3, 4);

const a = "abcdef";
const b = {
    json: 'json!',
    num: 2,
    
}

const c = [1, 2, 3, 4, 5];




