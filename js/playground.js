'use strict'
const account = {
    owner: "황기태",
    code : "111",
    balance : 350000,


    getBalance : function (){return this.balance},
    getOwner : (...args) => args,
    withdraw : function(subtract) {return this.balance - subtract}  

};

console.log(account.getOwner(1,2,3,[42,33,'boogie'],{id:'stupid',age:42},false,undefined,null));
// const {owner, code, withdraw,...others} = account;
// console.log(others.getBalance());

// console.log(owner,code,withdraw.call(account,50000)); // withdraw 함수의 functionInvocation화 즉 this 가  {}로 바뀌었다.

// const array = [1,2,true,'kimchi',account,{a:'vergil'}];

// const [z,x,c,v,...gimoring] = array;

// console.log(z,x,c,v,gimoring);


// const array2 = [...array,5,6,7,'booya!',false];

// console.log(array2);


// class Bus {
//     static createBus(id, size) {
//         return new Bus(id, size)
//     }

//     constructor (id,size) {
//         this.id = id;
//         this.size = size;
//         this.wheels = 4;
//     }

//     ride(speed) {
//         console.log(`${this.id} - ${this.size}호 버스가 ${this.wheels}WD ${speed}km만큼 달립니다.`);
//     }


// }

// const Pong = Bus.createBus(1,40);
// Pong.ride(40);

// class SUV extends Bus {
//     constructor (id, size) {
//         super(id,size);
//         this.wheels = 6
//     }

//     ride(speed) {
//         super.ride(speed===undefined ? 0 : speed);
//         console.log('이 차는 SUV입니다.');
//     }
// }

// const Bong = new SUV(3,2);
// Bong.ride();

