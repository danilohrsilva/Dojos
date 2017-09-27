import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Place from '../components/Place';

class Gallery extends React.Component {
  static navigationOptions = {
    title: 'Hospedagens',
  };

  state = {
    places: [],
  }

  componentDidMount() {
    fetch('http://localhost:7070/places')
    .then((res) => res.json())
    .then(this.updatePlacesList);
  }

  updatePlacesList = (places) => {
    this.setState({
      places
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style=>
        {this.state.places.map((place) => (
          <Place key={place.id} data={place} navigate={navigate}></Place>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default Gallery;
