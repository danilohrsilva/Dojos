import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class PlaceDetail extends React.Component {
  static navigationOptions = {
    title: 'Detalhes da Hospedagem',
  };

  constructor() {
    super();
    this.state()
  }

  render() {
    return (
      <View style={styles.container}>
        <Card place={this.props.place}/>
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

export default PlaceDetail;
