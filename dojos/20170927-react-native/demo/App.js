import React from 'react';
import { StackNavigator } from 'react-navigation';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const rooms = [{
  id: 1,
  name: 'Zen Forest House',
  price: 'R$ 221',
  detail: 'Casa inteira · 2 camas',
  image: 'https://a0.muscache.com/im/pictures/7d2d4a99-70d8-434c-9f42-a100c4de42c5.jpg?aki_policy=large',
  rating: '5'
}, {
  id: 2,
  name: 'Doce Lar - Suíte 5',
  price: 'R$ 275',
  detail: 'Flat inteiro · 2 camas',
  image: 'https://a0.muscache.com/im/pictures/8c6121a8-094e-424e-bae0-60bf37126cfd.jpg?aki_policy=large',
  rating: '4.5'
}];

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 320,
  }
})

class Room extends React.Component {
  render() {
    const { id, image, name, price, detail, rating } = this.props.data;
    const { data, navigate } = this.props;
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
}

class Gallery extends React.Component {
  static navigationOptions = {
    title: 'Hospedagens',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Room data={rooms[0]} navigate={navigate}></Room>
        <Room data={rooms[1]} navigate={navigate}></Room>
      </View>
    );
  }
}

class RoomDetail extends React.Component {
  render() {
    const { id, image, name, price, detail, rating } = this.props.data;
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
  }
}

class Details extends React.Component {
  static navigationOptions = {
    title: 'Detalhes',
  };
  render() {
    const { data } = this.props.navigation.state.params;
    return (
      <View>
        <RoomDetail data={data}></RoomDetail>
      </View>
    );
  }
}

export default SimpleApp = StackNavigator({
  Gallery: { screen: Gallery },
  Details: { screen: Details },
});
