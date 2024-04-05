const getData = async() => {
const response = await axios.get('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline', {
    params: {
        api_key: 'NQY9HHF5X5KA6H39YKEGZTNP8',
        city: 'Bariloche'
    }
});

console.log(response)
}

getData()