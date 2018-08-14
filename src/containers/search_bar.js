import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }
  onInputChange(event) {
    this.setState({ term: event.target.value })
  }
  onFormSubmit(event) {
    event.preventDefault()
    this.props.fetchWeather(this.state.term)
    this.setState({ term: '' })
  }
  render() {
    return (
      <form onSubmit={(event) => this.onFormSubmit(event)} className="input-group">
        <input
          value={this.state.term}
          placeholder="Get a five-day forecat in your favorite cities"
          className="form-control"
          onChange={(event) => this.onInputChange(event)}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

const mapDispatchToProps = {
  fetchWeather
}

export default connect(null, mapDispatchToProps)(SearchBar)
