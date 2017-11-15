import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import PlacesServices from '../components/PlacesServices';
import FormReservation from '../components/FormReservation';

class Gallery extends React.Component {
  static navigationOptions = {
    title: 'Hospedagens',
  };

  state = {
    places: PlacesServices()
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.places.map(place =>
            <Card
              key={place.id}
              info={place}
              goToReservation={() => (this.props.navigation.navigate('Reservation', {place}))}
              />
            )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingHorizontal: 15
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  }
});

export default Gallery;
