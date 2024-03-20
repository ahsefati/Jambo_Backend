// Fetch the city's weather
import axios from 'axios';

export const getCityCurrentWeather = async (req, res) => {
    const {cityName} = req.body
    const apiKey = process.env.WEATHER_API_KEY

    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=7&aqi=yes&alerts=no`);
        res.send(response.data);
    } catch (error) {
        console.error('Error fetching city weather:', error);
        res.status(404).json({ message: "City not found on WeatherAPI." });
    }

}