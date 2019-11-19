import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TabNavigator from './tab-navigator';

const AppNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: {header: null},
  },
});

export const AppContainer = createAppContainer(AppNavigator);
