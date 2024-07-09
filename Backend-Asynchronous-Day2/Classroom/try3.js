async function fetchResource(url) {
    try {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      const tempCelsius = result.main.temp;
      console.log("Current temperature in Celsius:", tempCelsius);
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Operation finished!");
    }
  }

fetchResource("https://api.openweathermap.org/data/2.5/weather?lat=8.1667&lon=77.4333&appid=//Replace your API KEY here&units=metric");