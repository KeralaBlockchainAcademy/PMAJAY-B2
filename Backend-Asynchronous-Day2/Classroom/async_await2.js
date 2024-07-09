async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    console.log(response)
    const data = await response.json();
    console.log(data);
  }

  getData();