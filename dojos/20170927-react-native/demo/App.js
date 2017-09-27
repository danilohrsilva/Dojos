import React from 'react';
import { StackNavigator } from 'react-navigation';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import PlaceDetails from './components/PlaceDetails';
import Card from './components/Card';

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

class Gallery extends React.Component {
  static navigationOptions = {
    title: 'Hospedagens',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Card data={rooms[0]} navigate={navigate}></Card>
        <Card data={rooms[1]} navigate={navigate}></Card>
      </View>
    );
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
        <PlaceDetails data={data}></PlaceDetails>
      </View>
    );
  }
}

export default SimpleApp = StackNavigator({
  Gallery: { screen: Gallery },
  Details: { screen: Details },
});
