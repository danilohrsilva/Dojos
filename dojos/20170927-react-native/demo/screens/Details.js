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

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Hospedagem id: {params.id}</Text>
      </View>
    );
  }
}

export default Details;
