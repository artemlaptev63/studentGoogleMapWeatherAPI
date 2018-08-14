import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'



class WeatherList extends Component {
  renderWeather(cityData) {
    const { lon, lat, name } = cityData.location
    const mintemps_c = cityData.forecast.forecastday.map(weather => weather.day.mintemp_c)
    const avgtemps_c = cityData.forecast.forecastday.map(weather => weather.day.avgtemp_c)
    const maxtemps_c = cityData.forecast.forecastday.map(weather => weather.day.maxtemp_c)
    return (
      <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td><Chart data={mintemps_c} color='blue' units='C' /></td>
        <td><Chart data={avgtemps_c} color='orange' units='C' /></td>
        <td><Chart data={maxtemps_c} color='red' units='C' /></td>
      </tr>
    )
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Min Temperature (C)</th>
            <th>Avg Temperature (C)</th>
            <th>Max Temperature (C)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(WeatherList)
