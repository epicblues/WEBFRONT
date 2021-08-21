//Basic Types
let id = 5;
let company = "Traversy Media";
let isPublished = true;
let x = "hello";
let ids = [1, 2, 3, 4];
let mixed = [1, 2, 3, 'yaho'];
//Tuple
let person = [2, 'muyaho', false];
console.log(person);
//Tuple Array
let persons = [person, [3, 'puy', true]];
//Union
let union = ['ya', 2, 3, 4, 5, 'bal'];
//Enum (define a set of name of constants ; default ascending number from 0);
var weekday;
(function (weekday) {
    weekday["MON"] = "yaho";
    weekday["TUE"] = "keke";
    weekday["WED"] = "data";
    weekday["THU"] = "yo";
    weekday["FRI"] = "sub";
    weekday["SAT"] = "ka";
    weekday["SUN"] = "lol";
})(weekday || (weekday = {}));
const user = {
    id: 1,
    name: 'john'
};
// Type Assertion
let cid = 1;
let customerId = cid;
let customerId2 = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
//Functions return void
function log(x, y) {
    Number.parseInt(x);
    console.log(x + y);
    return;
}
const user1 = {
    id: 2,
    name: 'hello',
    play(a, b) {
        console.log(this.id, this.name, `the answer is = ${a + b}`);
        return a * b;
    }
};
user1.play(2, 6);
const add = (a, b) => 0;
// Classes
class Hello {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    play(a, b) {
        return a * b;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
class Employee extends Hello {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
    register() {
        return `${this.name} is now registered as ${this.position}`;
    }
}
const kms = new Employee(4, 'muyaho', 'officer');
console.log(kms.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
const a = [1, 2, 3, 4, 5];
const b = ['a', 'b', 'c', 'd', 'e'];
const c = getArray(a);
const d = getArray(b);
console.log(c);
//# sourceMappingURL=index.js.map