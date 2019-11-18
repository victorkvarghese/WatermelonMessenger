import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import TabBar from './components/tabbar';
import CameraRoute from './screens/Camera';
import ChatsRoute from './screens/Chats';
import StatusRoute from './screens/Status';
import CallsRoute from './screens/Calls';

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
    accent: 'yellow',
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

const AppContainer = createAppContainer(Tabs);

export default class Entrypoint extends React.Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <AppContainer />
      </PaperProvider>
    );
  }
}
