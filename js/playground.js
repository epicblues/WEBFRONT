'use strict'
const account = {
    owner: "황기태",
    code : "111",
    balance : 350000,


    getBalance : function (){return this},
    getOwner : () => this.owner,
    withdraw : (subtract) => this.balance - subtract 
};


console.log(account.getBalance());
