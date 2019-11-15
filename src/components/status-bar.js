import React from 'react';
import {View, Platform, StatusBar, StyleSheet} from 'react-native';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 24 : StatusBar.currentHeight;

const GeneralStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <StatusBar
      translucent
      backgroundColor={backgroundColor}
      {...props}
      barStyle="light-content"
    />
  </View>
);

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

export default GeneralStatusBar;
