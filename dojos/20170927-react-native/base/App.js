import { StackNavigator } from 'react-navigation';
import Gallery from './screens/Gallery';
import PlaceDetail from './screens/PlaceDetail';

const SimpleApp = StackNavigator({
  Home: { screen: Gallery },
  Detail: { screen: PlaceDetail }
});

export default SimpleApp;
