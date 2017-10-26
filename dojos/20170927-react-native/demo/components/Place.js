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

class Place extends React.Component {
  render() {
    const { id, image, name, price, detail, rating } = this.props.data;
    const { navigate } = this.props;
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
          onPress={() => navigate('Details', { id })}
          title="Ver detalhes"
        />
      </View>
    )
  }
}

export default Place;
