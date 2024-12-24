const search = document.getElementById('search');
const result = document.getElementById('result');

search.addEventListener('click', async () => {
    const city = document.getElementById('city').value;
    const request = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=EYZF4T9Z6RL9NLVZPZ73HQPKD&contentType=json`;
    const response = await fetch(request);
    const info = await response.json();
    result.textContent = `City: ${city}  Temp: ${info.currentConditions.temp}`;
})