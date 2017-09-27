import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Gallery extends React.Component {
  static navigationOptions = {
    title: 'Hospedagens',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Dojo #8</Text>
        <Text>Campinas Front-End</Text>
        <Text>Vamos começar editando <Text style={styles.bold}>/screens/Gallery.js</Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  }
});

export default Gallery;
