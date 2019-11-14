import React, {PureComponent} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Animated from 'react-native-reanimated';

import {isIphoneX} from 'src/utils/isIphoneX';

const tabBarHeight = isIphoneX() ? 130 : 110;

export default class Tabbar extends PureComponent {
  state = {
    width: Dimensions.get('window').width,
  };
  componentDidMount() {
    Dimensions.addEventListener('change', e => {
      const {width} = e.window;
      this.setState({width});
    });
  }

  renderTab = (route, index, navigationState) => {
    const {width} = this.state;
    const selectedColor =
      navigationState.index === index
        ? 'rgba(255,255,255,1)'
        : 'rgba(255,255,255,0.6)';
    if (index === 0) {
      return (
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate(route.key);
          }}>
          <Image
            style={[
              {
                tintColor: selectedColor,
              },
              styles.icon,
            ]}
            source={require('../assets/camera.png')}
          />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        style={{width: (width - 48) / 3}}
        onPress={() => {
          this.props.navigation.navigate(route.key);
        }}>
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
    const {width} = this.state;
    const {position, navigationState} = this.props;
    /** Tabbar transition hide/show */
    const translateY = Animated.interpolate(position, {
      inputRange: [0, 1, 2, 3],
      outputRange: [-1 * tabBarHeight, 0, 0, 0],
    });

    /** Indicator transition */
    const indicatorTranslateX = Animated.interpolate(position, {
      inputRange: [0, 1, 2, 3],
      outputRange: [
        0,
        48,
        48 + (width - 48) / 3,
        48 + (width - 48) / 3 + (width - 48) / 3,
      ],
    });

    /** Indicator width */
    const indicatorWidth = Animated.interpolate(position, {
      inputRange: [0, 1, 2, 3],
      outputRange: [48, (width - 48) / 3, (width - 48) / 3, (width - 48) / 3],
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
            <Animated.Text style={styles.headerText}>Watermelon</Animated.Text>
          </View>
          <View style={styles.tab}>
            {navigationState.routes.map((route, index) =>
              this.renderTab(route, index, navigationState),
            )}
          </View>
          <Animated.View
            style={[
              styles.indicator,
              {
                width: indicatorWidth,
                left: indicatorTranslateX,
              },
            ]}
          />
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
    justifyContent: 'flex-end',
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
  indicator: {
    height: 3,
    backgroundColor: 'white',
    elevation: 2,
    top: 0,
  },
});
