import React, {PureComponent} from 'react';
import {View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {isIphoneX} from 'src/utils/isIphoneX';
import GeneralStatusBar from './status-bar';
import WLText from './wl-text';

const tabBarHeight = isIphoneX() ? 128 : 120;

const fullWhite = 'rgba(255,255,255,1)';
const dullWhite = 'rgba(255,255,255,0.6)';

export default class Tabbar extends PureComponent {
  state = {
    desiredWidth: (Dimensions.get('window').width - 48) / 3,
  };
  componentDidMount() {
    Dimensions.addEventListener('change', e => {
      const {width} = e.window;
      this.setState({desiredWidth: (width - 48) / 3});
    });
  }

  renderTab = (route, index, navigationState) => {
    const {desiredWidth} = this.state;
    const selectedColor =
      navigationState.index === index ? fullWhite : dullWhite;
    if (index === 0) {
      return (
        <TouchableOpacity
          key={index}
          style={[styles.tabBtn, styles.camera]}
          onPress={() => {
            this.props.navigation.navigate(route.key);
          }}>
          <Icon name="camera-alt" size={24} color={selectedColor} />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.tabBtn,
          {
            width: desiredWidth,
          },
        ]}
        onPress={() => {
          this.props.navigation.navigate(route.key);
        }}>
        <WLText
          style={[
            styles.tabText,
            {
              color: selectedColor,
            },
          ]}
          value={route.key.toUpperCase()}
        />
      </TouchableOpacity>
    );
  };

  render() {
    const {desiredWidth} = this.state;
    const {position, navigationState} = this.props;

    /** Tabbar transition hide/show */
    const translateY = Animated.interpolate(position, {
      inputRange: [0, 1, 2, 3],
      outputRange: [-1 * tabBarHeight, 0, 0, 0],
    });

    /** Indicator transition */
    const indicatorTranslateX = Animated.interpolate(position, {
      inputRange: [0, 1, 2, 3],
      outputRange: [0, 48, 48 + desiredWidth, 48 + desiredWidth + desiredWidth],
    });

    /** Indicator width */
    const indicatorWidth = Animated.interpolate(position, {
      inputRange: [0, 1, 2, 3],
      outputRange: [48, desiredWidth, desiredWidth, desiredWidth],
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
          <GeneralStatusBar backgroundColor="#075E54" />
          <View style={styles.header}>
            <WLText style={styles.headerText} value="Watermelon" />
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
  tabBtn: {height: 50, justifyContent: 'center', alignItems: 'center'},
  camera: {width: 48},
});
