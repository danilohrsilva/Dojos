import React from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class Detail extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.id}</Text>
      </View>
    );
  }
}
