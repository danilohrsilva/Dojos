import { StackNavigator } from 'react-navigation';

import Gallery from './src/screens/Gallery';

const SimpleApp = StackNavigator({
  Home: { screen: Gallery },
});

export default SimpleApp;
