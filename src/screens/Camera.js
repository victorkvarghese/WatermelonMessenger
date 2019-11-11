import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {withNavigationFocus} from 'react-navigation';

class Camera extends Component {
  state = {
    isCameraShown: false,
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: 'black',
        }}>
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
      </View>
    );
  }
}

export default withNavigationFocus(Camera);
