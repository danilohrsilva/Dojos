import { StackNavigator } from 'react-navigation';

import Gallery from './screens/Gallery';
import Details from './screens/Details';

const SimpleApp = StackNavigator({
  Home: { screen: Gallery },
  Details: { screen: Details },
});

export default SimpleApp;
