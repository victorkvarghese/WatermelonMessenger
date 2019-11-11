import React, {PureComponent} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Animated from 'react-native-reanimated';

const tabBarHeight = 110;
const {width} = Dimensions.get('window');

export default class Tabbar extends PureComponent {
  renderTab = (route, index, navigationState) => {
    const selectedColor =
      navigationState.index === index
        ? 'rgba(255,255,255,1)'
        : 'rgba(255,255,255,0.6)';
    if (index === 0) {
      return (
        <Image
          style={[
            {
              tintColor: selectedColor,
            },
            styles.icon,
          ]}
          source={require('../assets/camera.png')}
        />
      );
    }
    return (
      <TouchableOpacity
        style={{width: (width - 48) / 3}}
        onPress={() => this.setState({index})}>
        <Animated.Text
          style={[
            styles.tabText,
            {
              color: selectedColor,
            },
          ]}>
          {route.key.toUpperCase()}
        </Animated.Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {position, navigationState} = this.props;
    const translateY = Animated.interpolate(position, {
      inputRange: [0, 1, 2, 3],
      outputRange: [-1 * tabBarHeight, 0, 0, 0],
    });

    return (
      <Animated.View
        style={[
          styles.container,
          {
            height: tabBarHeight,
            transform: [{translateY}],
          },
        ]}>
        <View style={styles.main}>
          <View style={styles.header}>
            <Animated.Text style={styles.headerText}>WhatsApp</Animated.Text>
          </View>
          <View style={styles.tab}>
            {navigationState.routes.map((route, index) =>
              this.renderTab(route, index, navigationState),
            )}
          </View>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#075E54',
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    elevation: 3,
  },
  main: {flex: 1},
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 12,
    paddingLeft: 12,
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  tab: {
    flex: 1,
    backgroundColor: '#075E54',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 12,
  },
  tabText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
