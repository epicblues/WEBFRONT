//Basic Types
let id: number = 5;
let company:string = "Traversy Media"; 
let isPublished:boolean=true;
let x :any = "hello";


let ids : number[] = [1,2,3,4];
let mixed : (string|number)[] = [1,2,3,'yaho'];

//Tuple
let person :[number, string, boolean]= [2,'muyaho',false];
console.log(person);
//Tuple Array
let persons: [number,string,boolean][] = [person,[3,'puy',true]];

//Union
let union : (string|number)[] = ['ya',2,3,4,5,'bal'];

//Enum (define a set of name of constants ; default ascending number from 0);
enum weekday {
    MON = "yaho",
    TUE = "keke",
    WED = "data",
    THU = "yo",
    FRI = "sub",
    SAT = "ka",
    SUN = "lol"
}


// Object 

type User = 
{ 
    id:number,
    name:string,
    friends?:User[]
}
   
type primitive = number|string;
const user : User= {
    id:1,
    name:'john'
}

// Type Assertion
let cid:any = 1;
let customerId:number = <number>cid;
let customerId2:string = cid as string;

//Functions
function addNum(x:number,y:number):number 
{
    return x+y;
}

//Functions return void
function log(x:string,y:number):void 
{
    Number.parseInt(x);
    console.log(x + y);
    return;
}


//Interfaces -> specific types to objects or functions. 
//Can't use with primitives or unions type can do it

interface UserInterface 
{
    readonly id:number; // cannot reallocate value in field
    name:string;
    age?:number;
    play(a:number, b:number):number; // function name, parameter types, return type -> must be implemented!
    
}

const user1:UserInterface = 
{
    id:2,
    name:'hello',
    play(a:number,b:number):number
    {
        console.log(this.id,this.name,`the answer is = ${a+b}`);
        return a*b;
    }
    
}
user1.play(2,6);

interface MathFunc
{
    (x: number,y:number) : number
}

const add:MathFunc = (a:number,b:number) => 0;

// Classes
class Hello 
{
    protected id:number;
    protected name:string;
    protected play(a:number,b:number) 
    {
        return a*b;
    }
    constructor(id:number,name:string)
    {
        this.id = id;
        this.name = name;
    }

    register()
    {
        return `${this.name} is now registered`
    }
}

class Employee extends Hello 
{
    private position:string;

    constructor(id:number,name:string,position:string) 
    {
        super(id,name);
        this.position = position;
    }

    register()
    {
        return `${this.name} is now registered as ${this.position}`
    }
}

const kms = new Employee(4,'muyaho','officer');
console.log(kms.register());

// Generics

function getArray<t>(items:t[]):t[] //Array<T>를 쓰는 것이 아니다!
{
    return new Array<t>().concat(items);
}

const a:number[] = [1,2,3,4,5];
const b:string[] = ['a','b','c','d','e'];
const c:number[] = getArray<number>(a);
const d:string[] = getArray<string>(b);


console.log(c);