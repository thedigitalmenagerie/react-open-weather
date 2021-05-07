import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

const weatherDBUrl = 'https://api.openweathermap.org/data/2.5/weather';
const weatherApiKey = firebaseConfig.apiKey;

const getWeather = (city) => new Promise((resolve, reject) => {
  axios.get(`${weatherDBUrl}?q=${city}&appid=${weatherApiKey}&units=imperial`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getWeather;
