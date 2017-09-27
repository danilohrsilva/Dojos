import React from 'react';
import {
  View,
} from 'react-native';

import PlaceDetails from '../components/PlaceDetails';
import BookingForm from '../components/BookingForm';

class Details extends React.Component {
  static navigationOptions = {
    title: 'Detalhes',
  };

  state = {
    place: {},
    bookingForm: {},
  }

  componentDidMount() {
    const { id } = this.props.navigation.state.params;

    fetch(`http://localhost:7070/places/${id}`)
    .then((res) => res.json())
    .then(this.updatePlaceData);
  }

  updatePlaceData = (data) => {
    this.setState({
      place: {
        ...data
      }
    })
  }

  sendBookingRequest = () => {
    fetch('http://localhost:7070/bookings', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(this.state.bookingForm)
    });
  }

  render() {
    return (
      <View>
        <PlaceDetails data={this.state.place}/>
        <BookingForm
          handleCheckInChange={text => this.setState({ bookingForm: { ...this.state.bookingForm, checkIn: text } })}
          handleCheckoutChange={text => this.setState({ bookingForm: { ...this.state.bookingForm, checkOut: text } })}
          handleEmailChange={text => this.setState({ bookingForm: { ...this.state.bookingForm, email: text } })}
          handleSubmit={this.sendBookingRequest}
          values={this.state.bookingForm}
        />
      </View>
    );
  }
}

export default Details;
