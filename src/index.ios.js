import { Navigation } from 'react-native-navigation';
import { ListEvents } from './components';

Navigation.registerComponent('ListEvents', () => ListEvents);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'ListEvents',
    title: 'SchedWall',
      navigatorStyle: {
      navBarBackgroundColor: '#FF7043',
      navBarTextColor: '#fff'
    }
  }
});
