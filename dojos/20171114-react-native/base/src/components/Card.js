import React from 'react';
import {Text, View, Image, Button, TouchableOpacity, StyleSheet} from 'react-native';

export default Card = ({ info, goToReservation }) =>
  <View style={styles.vContainer}>
    <TouchableOpacity onPress={goToReservation}>
      <Image style={{width:null, height: 150}} source={{uri: info.image}}></Image>
      <Text>Name: {info.name}</Text>
      <Text>Price: {info.price}</Text>
      <Text>Detail: {info.detail}</Text>

      <Text style={styles.tDetails}>Ver Detalhes</Text>
    </TouchableOpacity>
  </View>


const styles = StyleSheet.create({
  vContainer: {
    marginBottom: 25
  },
  tDetails : {
    width: null,
    textAlign: 'center',
    fontSize: 16,
    color: "blue"
  }
})
