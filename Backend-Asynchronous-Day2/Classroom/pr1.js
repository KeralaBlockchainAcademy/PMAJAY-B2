let promise = new Promise(function (resolve, reject) {
    const x = "KBA";
    const y = "KBA"
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});


promise.
    then(function () {
        console.log('Success, You are a GEEK');
        console.log(promise);
    }).
    catch(function () {
        console.log('Some error has occurred');
        console.log(promise);
    }); 
    