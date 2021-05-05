import React, { useState } from 'react';
import './weather.scss';
import {
  Form,
  Card,
  CardImg,
  CardText,
  Button
} from 'reactstrap';
import getWeather from './helpers/data/WeatherData';

function Weather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  async function getWeatherData() {
    await getWeather(city)
      .then((response) => setWeatherData(response));
  }

  return (
    <div className='Weather'>
      <Card id="forecastCard">
      {weatherData ? <><CardImg id="image" src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
        <CardText tag="h4">{weatherData.name}</CardText>
        <CardText>{weatherData.main.temp} Degrees | {weatherData.weather[0].description}</CardText>
        <CardText>{weatherData.weather[0].main}</CardText>
        <CardText>Wind Speed: {weatherData.wind.speed}</CardText>
        </> : null }
        </Card>
      <Form onSubmit={(e) => {
        e.preventDefault();
        getWeatherData();
      }}>
        <h1>See Forecast</h1>
        <input
        name= "zip"
        type="text"
        placeholder="City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}>
        </input>
        <Button type="submit">Submit City</Button>
      </Form>
    </div>
  );
}

export default Weather;
