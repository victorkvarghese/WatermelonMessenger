import React, {PureComponent} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import {Appbar} from 'react-native-paper';

import {isIphoneX} from 'src/utils/isIphoneX';
import GeneralStatusBar from './status-bar';
import TabItem from './tab-item';

const tabBarHeight = isIphoneX() ? 154 : 140;

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
    return (
      <TabItem
        index={index}
        route={route}
        key={index}
        navigationState={navigationState}
        navigation={this.props.navigation}
        desiredWidth={this.state.desiredWidth}
      />
    );
  };

  renderHeader = () => {
    return (
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Watermelon" titleStyle={styles.headerText} />
        <Appbar.Action icon="magnify" onPress={this.toggleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={this.handleMore} />
      </Appbar.Header>
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
            transform: [{translateY}],
          },
        ]}>
        <View style={styles.main}>
          <GeneralStatusBar backgroundColor="#075E54" />
          {this.renderHeader()}
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
  header: {elevation: 0},
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
  indicator: {
    height: 3,
    backgroundColor: 'white',
    elevation: 2,
    top: 0,
  },
});
