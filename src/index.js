import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import TabBar from './components/tabbar';
import CameraRoute from './screens/Camera';
import ChatsRoute from './screens/Chats';
import StatusRoute from './screens/Status';
import CallsRoute from './screens/Calls';

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

export default createAppContainer(Tabs);
