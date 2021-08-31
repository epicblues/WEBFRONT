function logicA() {
    console.log("begin logicA");

    setTimeout(() => {
        console.log("callback called");
        console.log("begin logicB");
        setTimeout(() => {
            console.log("callbackB called");
        }, 2000)
        console.log("end logic");
    }, 2000) // 2초 후에 콜백 함수 수행
    
    console.log("end logicA");
}

// logicA();

function logicPromise() {
    console.log("begin logicPromise");

    // 비동기 처리를 위한 Promise 객체
    return new Promise( (resolve, reject) =>{
        // resolve : 성공했을 때 값을 전달
        // reject : 실패했을 때 값을 전달
        setTimeout(() => {
            // resolve("Success"); // 비동기 처리에 성공하면 resolve 함수를 실행한다.
            reject(new Error('ERRORRRRRR'));
        }, 2000) // 2초 대기
        console.log("end logicPromise");
        
    })
}

function testLogicPromise() {
    console.log("Test logic Promise");
    logicPromise()
        .then(value => {
            // 성공했을 때
            console.log(value);
        })
        .catch(value => {
            // 실패했을 때
            console.error(value.message);
        })
}

// testLogicPromise()

// async/await : async는 Promise를 좀 더 쉽게 다룰 수 있게 해준다.
async function async() {
    await setTimeout(() => console.log('booya'), 3000);
    console.log("async function");
    return "SUCCESS";
}

//async 함수는 항상 Promise를 리턴한다.
async().then(value => {
    console.log(value);
})