import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

class Card extends React.Component {


  render() {
    const {name, price, detail, image, rating} = this.props.place;
    return (
      <View>
        <Text>{name}</Text>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: image}}
        />
        <Text>Detalhes: {detail}</Text>
        <Text>Valor: {price}</Text>
        <Text>Avaliacao: {rating}</Text>



      </View>
    );
  }
}

export default Card
