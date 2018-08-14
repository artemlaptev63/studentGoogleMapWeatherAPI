import axios from 'axios'

import { WEATHER_KEY } from '../../api-weather-key'
import { FETCH_WEATHER } from '../actionTypes'


const ROOT_URL = `https://api.apixu.com/v1/forecast.json?key=${WEATHER_KEY}`

export const fetchWeather = city => dispatch => {
  const url = `${ROOT_URL}&q=${city}&days=5`
  const request = axios.get(url)

  dispatch({
    type: FETCH_WEATHER,
    payload: request
  })
}