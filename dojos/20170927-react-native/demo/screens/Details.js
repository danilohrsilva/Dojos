import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import PlaceDetails from '../components/PlaceDetails.js';

class Details extends React.Component {
  static navigationOptions = {
    title: 'Detalhes',
  };

  state = {
    place: {}
  }

  componentDidMount() {
    const { id } = this.props.navigation.state.params;

    fetch(`http://localhost:7070/places/${id}`)
    .then((res) => res.json())
    .then(this.updatePlaceData);
  }

  updatePlaceData = (data) => {
    this.setState({
      place: {
        ...data
      }
    })
  }

  render() {
    return (
      <PlaceDetails data={this.state.place}/>
    );
  }
}

export default Details;
