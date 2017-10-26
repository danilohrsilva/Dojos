import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import Card from '../components/Card';
import getPlaces from '../services/Places';

class Gallery extends React.Component {
  static navigationOptions = {
    title: 'Hospedagens',
  };

  constructor(props) {
    super(props);
    console.log(props)
    this.state = {cards: []};
  }

  onPressButton() {
    console.log(this.props);
    // this.props.navigation.navigate('Detail', { this.props.place.id })
  }

  async componentDidMount() {
    var cards = await getPlaces();
    this.setState({cards: cards});
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.cards.map(function(place){
          return (

              <View key={place.id}>
                <Card  place={place} />
                <Button onPressButton={this.onPressButton} title="Detail"/>

              </View>


          )

        })}
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
