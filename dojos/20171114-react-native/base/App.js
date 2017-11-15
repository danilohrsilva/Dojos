import { StackNavigator } from 'react-navigation';

import Gallery from './src/screens/Gallery';
import Reservation from './src/screens/Reservation'

const SimpleApp = StackNavigator({
  Home: { screen: Gallery },
  Reservation: {screen: Reservation}
});

export default SimpleApp;
