import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {withNavigationFocus} from 'react-navigation';

class Camera extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: this.props.isFocused ? 'red' : 'black',
        }}>
        <Text> Camera </Text>
      </View>
    );
  }
}

export default withNavigationFocus(Camera);
