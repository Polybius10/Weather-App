

const getForecastData = async (city) => {
    const response = await fetch  (`http://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${city}&lang=es`)
    const data = await response.json();

    console.log({data})
}

// window.onload = () => {
//     getForecastData("Buenos Aires")
// }

export {getForecastData}