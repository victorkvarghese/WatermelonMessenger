import React, {Component} from 'react';
import {Text, View, StatusBar} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {withNavigationFocus} from 'react-navigation';

class Camera extends Component {
  render() {
    const {isFocused} = this.props;
    if (isFocused) {
      StatusBar.setHidden(true);
    } else {
      StatusBar.setHidden(false);
    }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: 'black',
        }}>
        {!isFocused ? null : (
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={{flex: 1, flexDirection: 'column', backgroundColor: 'black'}}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={
              'We need your permission to use your camera phone'
            }
          />
        )}
      </View>
    );
  }
}

export default withNavigationFocus(Camera);
