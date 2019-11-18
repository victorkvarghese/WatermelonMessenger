import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

export default class WLText extends Component {
  render() {
    const {style, value, ...otherProps} = this.props;
    return (
      <Text style={[styles.font, style]} {...otherProps}>
        {value}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  font: {
    fontFamily: 'Roboto-Regular',
  },
});
