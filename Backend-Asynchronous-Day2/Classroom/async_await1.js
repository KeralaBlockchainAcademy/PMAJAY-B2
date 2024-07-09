let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('hello');
}

function hello() {
    console.log("Will I come befor async or not ? Guess !!")
}

// calling the async function
asyncFunc();
hello()