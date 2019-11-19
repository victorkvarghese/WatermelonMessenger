import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import {FAB} from 'react-native-paper';

import TabBar from 'src/components/tabbar';
import CameraRoute from 'src/screens/Camera';
import ChatsRoute from 'src/screens/Chats';
import StatusRoute from 'src/screens/Status';
import CallsRoute from 'src/screens/Calls';

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

export default class TabNavigator extends Component {
  // static contextType = ThemeContext;

  static router = Tabs.router;

  renderFABonIndex = index => {
    switch (index) {
      case 0:
        return null;
      case 1:
        return (
          <FAB
            style={styles.fab}
            icon="android-messages"
            color="white"
            onPress={() => console.log('Pressed')}
          />
        );
      case 2:
        return (
          <View>
            <FAB
              small
              theme={{colors: {accent: 'white'}}}
              style={styles.editFab}
              icon="pencil"
              color="black"
              onPress={() => console.log('Pressed')}
            />
            <FAB
              style={styles.fab}
              icon="camera"
              color="white"
              onPress={() => console.log('Pressed')}
            />
          </View>
        );
      case 3:
        return (
          <FAB
            style={styles.fab}
            icon="phone-plus"
            color="white"
            onPress={() => console.log('Pressed')}
          />
        );
    }
  };
  render() {
    const {navigation} = this.props;
    const {index} = navigation.state;

    return (
      <View style={styles.container}>
        <Tabs navigation={navigation} />
        {this.renderFABonIndex(index)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  fab: {
    position: 'absolute',
    bottom: 32,
    right: 24,
  },
  editFab: {
    position: 'absolute',
    bottom: 100,
    right: 32,
  },
});
