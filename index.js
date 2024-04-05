const cityName = document.querySelector("#cityName");
const lowerTemperature = document.querySelector('.lower-temp');
const temperature = document.getElementById('temperature');
const highTempToday = document.querySelector('.high-temp');
const lowTempToday = document.querySelector('.low-temp');
const todayName = document.querySelector('#todayName');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const rain = document.getElementById('rainChance');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const airQualityName = document.querySelector('#airQualityName');


//forecast

const tableTittleOne = document.querySelector('.table-title--one');
const tableIconOne = document.querySelector('.table-icon--one');
const tableHighOne = document.querySelector('.table-h-temp--one');
const tableLowOne = document.querySelector('.table-l-temp--one');

const tableTittleTwo = document.querySelector('.table-title--two');
const tableIconTwo = document.querySelector('.table-icon--two');
const tableHighTwo = document.querySelector('.table-h-temp--two');
const tableLowTwo = document.querySelector('.table-l-temp--two');

const tableTittleThree = document.querySelector('.table-title--three');
const tableIconThree = document.querySelector('.table-icon--three');
const tableHighThree = document.querySelector('.table-h-temp--three');
const tableLowThree = document.querySelector('.table-l-temp--three');

const tableTittleFour = document.querySelector('.table-title--four');
const tableIconFour = document.querySelector('.table-icon--four');
const tableHighFour = document.querySelector('.table-h-temp--four');
const tableLowFour = document.querySelector('.table-l-temp--four');

const tableTittleFive = document.querySelector('.table-title--five');
const tableIconFive = document.querySelector('.table-icon--five');
const tableHighFive = document.querySelector('.table-h-temp--five');
const tableLowFive = document.querySelector('.table-l-temp--five');


const getWeatherData = async(city) => {
    const response = await fetch  (`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=NQY9HHF5X5KA6H39YKEGZTNP8&contentType=json`)
    const data = await response.json();
    console.log({data})
    
    //header section
    cityName.innerText = data.address;
    temperature.innerHTML = Math.ceil(data.currentConditions.temp) + "°";
    highTempToday.innerText = "High " + Math.ceil(data.days[0].tempmax) + "°";
    lowTempToday.innerText = "Low " + Math.ceil(data.days[0].tempmin) + "°";
    var nameDay = data.days[4].datetimeEpoch;
    var fecha = new Date(nameDay);
    var nombreDelDia = fecha.toLocaleDateString('en-EN', {weekday: 'long'});
    todayName.innerHTML = nombreDelDia;
    console.log(nombreDelDia);



    //average section
    sunrise.innerText = data.days[0].sunrise;
    sunset.innerText = data.days[0].sunset;
    rain.innerText = Math.ceil(data.days[0].precip) + "%";
    humidity.innerText = Math.ceil(data.days[0].humidity) + "%";
    wind.innerText = data.days[0].windspeed + "/h";
}

    //forecast for the next 5 days
const getForecastData = async(city) => {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}&${icons1}&${icons2}&?unitGroup=metric&key=NQY9HHF5X5KA6H39YKEGZTNP8&contentType=json`);
    const data = await response.json();
    console.log(data.currentConditions.icon)
    // Add code for forecasting the next 5 days here

     let icons1 = data.currentConditions.icon
    
    //day one
    tableTittleOne.innerText = data.days[1].datetime;
    tableIconOne.innerHTML (function () {
        var icono = URL('https://unpkg.com/css.gg@2.0.0/icons/css/add.css');
        var image = document.createElement('img');
        image.src = icono;
        return image;
    })
    tableHighOne.innerText = Math.ceil(data.days[1].tempmax) + "°";
    tableLowOne.innerText = Math.ceil(data.days[1].tempmin) + "°";

    //day two
    tableTittleOne.innerText = data.days[2].datetime;
    tableIconOne.innerHTML = data.days[2].icon
    tableHighOne.innerText = data.days[2].tempmax + "°";

    //day three
    tableTittleOne.innerText = data.days[3].datetime;
    tableIconOne.innerHTML = data.days[3].icon
    tableHighOne.innerText = data.days[3].tempmax + "°";

    //day four
    tableTittleOne.innerText = data.days[4].datetime;
    tableIconOne.innerHTML = data.days[4].icon
    tableHighOne.innerText = data.days[4].tempmax + "°";

    //day five
    tableTittleOne.innerText = data.days[5].datetime;
    tableIconOne.innerHTML = data.days[5].icon
    tableHighOne.innerText = data.days[5].tempmax + "°";

}
    

searchSubmit.addEventListener('click', (event) => {
    event.preventDefault()   
    getWeatherData(searchInput.value);
    getForecastData(searchInput.value)

})


window.onload = () => {
    getWeatherData("Jose C. Paz");
    getForecastData("Buenos Aires")
}

// Pronóstico del tiempo

document.addEventListener('DOMContentLoaded', function () {
    // Obtén la barra de progreso y el elemento de progreso
    var barra = document.querySelector('.air-quality--barra');
    var progreso = document.getElementById('progreso');

    // Establece un valor inicial de progreso (ejemplo: 50%)
    var valorInicial = 50;
    actualizarProgreso(valorInicial);

    // Función para actualizar el progreso
    function actualizarProgreso(valor) {
        // Asegúrate de que el valor esté entre 0 y 100
        valor = Math.min(100, Math.max(0, valor));
        
        // Actualiza el ancho del elemento de progreso
        progreso.style.width = valor + '%';
    }

    // Ejemplo: actualiza el progreso después de un cierto tiempo
    setTimeout(function () {
        var nuevoValor = 67;
        actualizarProgreso(nuevoValor);
    }, 2000);
});


