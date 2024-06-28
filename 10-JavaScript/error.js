try{
    //code that might cause error
    let result = riskyOperation();
    console.log(result);
} catch(error){
    //code to handle error
    console.log('An error occurred: ' + error.message)
} finally {
    //code that runs regardless of error
    console.log('This will always run');
}

function riskyOperation(){
    let obj;
    return obj.property; //This will throw an error
}
