import React from 'react';
import {Text, View, Image, Button, StyleSheet, TextInput} from 'react-native';
import Card from './Card';

export default FormReservation = ({place}) =>
  <View style={styles.vContainer}>
    <Card info={place} />
    {/* Reservation form: */}
    <TextInput></TextInput>
  </View>


const styles = StyleSheet.create({
  vContainer: {
    marginBottom: 25
  }
})
