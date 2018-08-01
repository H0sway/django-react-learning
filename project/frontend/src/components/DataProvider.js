import React, { Component } from "react";
import PropTypes from "prop-types";

// Instantiate the DataProvider component
class DataProvider extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired
  };
  state = {
      data: [],
      loaded: false,
      placeholder: "Loading..."
    };
  // When the component mounts this function calls for the data from the server. Once fetched, it will save the data to state and re-render the component
  componentDidMount() {
    // API Call to Django backend
    fetch(this.props.endpoint)
      .then(response => {
        // Error response
        if (response.status !== 200) {
          return this.setState({ placeholder: "Something went wrong" });
        }
        return response.json();
      })
      .then(data => this.setState({ data: data, loaded: true }))
      .catch(err => res.send("DataProvider componentDidMount error", err));
  }
  render() {
    const { data, loaded, placeholder } = this.state;
    return loaded ? this.props.render(data) : <p>{placeholder}</p>;
  }
}

// Export the component
export default DataProvider;
