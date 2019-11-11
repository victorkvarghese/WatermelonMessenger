import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Calls extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> {this.props.navigation.state.routeName + ' page'} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
