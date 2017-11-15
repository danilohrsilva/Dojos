import {StackNavigator} from 'react-navigation';

import Gallery from './screens/Gallery';

const SimpleApp = StackNavigator({
  Home: {screen: Gallery},
});

export default SimpleApp;
