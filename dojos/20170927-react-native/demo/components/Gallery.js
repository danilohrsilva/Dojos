import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';

export class Gallery extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', { id: 123 })}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}
