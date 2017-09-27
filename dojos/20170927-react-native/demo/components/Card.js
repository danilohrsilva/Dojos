import React from 'react';
import {
  Button,
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

export default function Card(props) {
  const { data, navigate, } = props;
  const {
    image, name, price, detail, rating,
  } = data;

  return (
    <View>
      <Image
        source={{ uri: image }}
        style={styles.image} />
      <Text>{name}</Text>
      <Text>{price}</Text>
      <Text>{detail}</Text>
      <Text>{rating}</Text>

      <Button
        onPress={() => navigate('Details', { data })}
        title="Ver detalhes"
      />
    </View>
  )
}
