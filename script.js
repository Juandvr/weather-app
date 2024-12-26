const search = document.getElementById('search');
const result = document.getElementById('result');

search.addEventListener('click', async () => {
    const city = document.getElementById('city').value;
    const request = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=EYZF4T9Z6RL9NLVZPZ73HQPKD&contentType=json`;
    try {
        const response = await fetch(request);
        const info = await response.json();
        const temp = info.currentConditions.temp;
        const description = info.currentConditions.conditions;
        result.textContent = `City: ${city} | Temp: ${temp}°C | Weather: ${description}`;
        updatePageStyle(description);
    } catch (error) {
        console.error(error);
        result.textContent = 'Could not fetch weather data. Please try again.';
    }
});

function updatePageStyle(description) {
    const body = document.body;

    // Reset existing classes
    body.className = "";

    // Add a class based on the weather description
    if (description.toLowerCase().includes("snow")) {
        body.classList.add("snowy");
        showWeatherAnimation("snow");
    } else if (description.toLowerCase().includes("rain")) {
        body.classList.add("rainy");
        showWeatherAnimation("rain");
    } else if (description.toLowerCase().includes("clear")) {
        body.classList.add("sunny");
        showWeatherAnimation("sun");
    } else if (description.toLowerCase().includes("cloud")) {
        body.classList.add("cloudy");
        showWeatherAnimation("cloud");
    } else if (description.toLowerCase().includes("overcast")) {
        body.classList.add("overcast");
        showWeatherAnimation("overcast");
    } else {
        body.classList.add("default");
    }
}

function showWeatherAnimation(type) {
    const container = document.getElementById('weather-animation');
    container.innerHTML = ""; // Clear existing animations

    if (type === "snow") {
        container.innerHTML = `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'></circle><line x1='12' y1='2' x2='12' y2='22'></line><line x1='2' y1='12' x2='22' y2='12'></line></svg>`;
    } else if (type === "rain") {
        container.innerHTML = `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><line x1='8' y1='19' x2='8' y2='21'></line><line x1='16' y1='19' x2='16' y2='21'></line><path d='M12 2a7 7 0 0 1 7 7c0 3-3 6-7 6s-7-3-7-6a7 7 0 0 1 7-7z'></path></svg>`;
    } else if (type === "sun") {
        container.innerHTML = `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='5'></circle><line x1='12' y1='1' x2='12' y2='3'></line><line x1='12' y1='21' x2='12' y2='23'></line><line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line><line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line><line x1='1' y1='12' x2='3' y2='12'></line><line x1='21' y1='12' x2='23' y2='12'></line><line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line><line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line></svg>`;
    } else if (type === "cloud") {
        container.innerHTML = `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M16 16a4 4 0 0 0-8 0'></path><path d='M3 16a4 4 0 0 1 8 0'></path></svg>`;
    } else if (type === "overcast") {
        container.innerHTML = `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M12 18a6 6 0 0 0 6-6'></path><path d='M6 12a6 6 0 0 1 6 6'></path></svg>`;
    }
}
