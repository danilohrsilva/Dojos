import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const BookingForm = props => (
  <View>
    <Text style={styles.title}>Fazer reserva</Text>

    <Text style={styles.label}>Check-in</Text>
    <TextInput
      style={styles.input}
      onChangeText={props.handleCheckInChange}
      value={props.values.checkIn}
    />

    <Text style={styles.label}>Checkout</Text>
    <TextInput
      style={styles.input}
      onChangeText={props.handleCheckoutChange}
      value={props.values.checkout}
    />

    <Text style={styles.label}>Email</Text>
    <TextInput
      style={styles.input}
      onChangeText={props.handleEmailChange}
      value={props.values.email}
    />

    <Button
      onPress={props.handleSubmit}
      title="Enviar"
      accessibilityLabel="Enviar dados de reserva"
    />
  </View>
)

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    marginTop: 5,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});

export default BookingForm;
