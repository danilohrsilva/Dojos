import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

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
      <View>
        <Image
          source={{ uri: this.state.place.image }}
          style={styles.image} />
        <Text>{this.state.place.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 320,
  },
});

export default Details;
