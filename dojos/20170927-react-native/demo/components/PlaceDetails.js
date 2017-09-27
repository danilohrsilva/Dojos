import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 320,
  },
});

export default function PlaceDetails(props) {
  const {
    id, image, name, price, detail, rating,
  } = props.data;

  return (
    <View>
      <Text>ID: {id}</Text>
      <Image
        source={{ uri: image }}
        style={styles.image} />
      <Text>{name}</Text>
      <Text>{price}</Text>
      <Text>{detail}</Text>
      <Text>{rating}</Text>
    </View>
  )
};
