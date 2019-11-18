import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import {isIphoneX} from 'src/utils/isIphoneX';

export default class TabContainer extends Component {
  render() {
    return <View style={styles.container}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isIphoneX() ? 130 : 124,
  },
});
