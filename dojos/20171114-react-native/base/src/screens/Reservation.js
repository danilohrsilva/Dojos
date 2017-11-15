import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Card from '../components/Card';
import FormReservation from '../components/FormReservation';

class Gallery extends React.Component {
  static navigationOptions = {
    title: 'Hospedagens',
  };

  render() {
    const {place} = this.props.navigation.state.params;
    return (
      <FormReservation place={place}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
