import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import {isIphoneX} from 'src/utils/isIphoneX';

export default class TabPadding extends Component {
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: isIphoneX() ? 154 : 140,
  },
});
