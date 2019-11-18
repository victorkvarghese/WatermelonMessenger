import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Appbar, TouchableRipple} from 'react-native-paper';

import WMText from './wm-text';

const fullWhite = 'rgba(255,255,255,1)';
const dullWhite = 'rgba(255,255,255,0.6)';

export default class TabItem extends Component {
  onTabPress = () => {
    const {navigation, route} = this.props;
    navigation.navigate(route.key);
  };

  render() {
    const {desiredWidth, navigationState, index, route} = this.props;
    const selectedColor =
      navigationState.index === index ? fullWhite : dullWhite;
    if (index === 0) {
      return (
        <TouchableRipple
          key={index}
          style={[styles.tabBtn, styles.camera]}
          onPress={this.onTabPress}
          rippleColor="rgba(255, 255, 255, .32)">
          <Icon name="camera-alt" size={24} color={selectedColor} />
        </TouchableRipple>
      );
    }
    return (
      <TouchableRipple
        key={index}
        style={[
          styles.tabBtn,
          {
            width: desiredWidth,
          },
        ]}
        onPress={this.onTabPress}
        rippleColor="rgba(255, 255, 255, .32)">
        <WMText
          style={[
            styles.tabText,
            {
              color: selectedColor,
            },
          ]}
          value={route.key.toUpperCase()}
        />
      </TouchableRipple>
    );
  }
}

const styles = StyleSheet.create({
  tabText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  tabBtn: {height: 50, justifyContent: 'center', alignItems: 'center'},
  camera: {width: 48},
});
