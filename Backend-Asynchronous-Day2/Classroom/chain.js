let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 1000);
});

p.then((result) => {
    console.log(result); // 10
    return result * 2;
}).then((r) => {
    console.log(r); // 20
    return r * 3;
}).then((result) => {
    console.log(result); // 60
    return result * 4;
});