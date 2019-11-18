import React, {Component} from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
  FAB,
} from 'react-native-paper';

import TabBar from './components/tabbar';
import CameraRoute from './screens/Camera';
import ChatsRoute from './screens/Chats';
import StatusRoute from './screens/Status';
import CallsRoute from './screens/Calls';

import TabProvider from './state/tab-context';

import COLORS from './utils/colors';

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'Roboto-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Roboto-Bold',
      fontWeight: 'normal',
    },

    thin: {
      fontFamily: 'Roboto-Thin',
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.primary,
    accent: COLORS.accent,
  },
  fonts: configureFonts(fontConfig),
};

const Tabs = createMaterialTopTabNavigator(
  {
    Camera: {screen: CameraRoute},
    Chats: {screen: ChatsRoute},
    Status: {screen: StatusRoute},
    Calls: {screen: CallsRoute},
  },
  {
    initialRouteName: 'Chats',
    tabBarComponent: props => <TabBar {...props} />,
  },
);

const TabContainer = createAppContainer(Tabs);

class TabsView extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <TabContainer />
        <FAB
          style={{
            position: 'absolute',
            bottom: 48,
            right: 16,
          }}
          icon="plus"
          onPress={() => console.log('Pressed')}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: TabsView,
    navigationOptions: {header: null},
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default class Entrypoint extends React.Component {
  render() {
    return (
      <TabProvider>
        <PaperProvider theme={theme}>
          <AppContainer />
        </PaperProvider>
      </TabProvider>
    );
  }
}
