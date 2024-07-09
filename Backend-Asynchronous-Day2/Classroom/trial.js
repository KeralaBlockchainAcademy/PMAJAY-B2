const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Success', 2000));
  });
  
  console.log(promise); // Immediately log the promise
  
  promise.then((result) => {
    console.log(result); // Logs 'Resolved!' after 2 seconds
    console.log(promise); // Logs the promise again after it is fulfilled
  });