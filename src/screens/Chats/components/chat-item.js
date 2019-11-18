import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Divider, TouchableRipple} from 'react-native-paper';

import WMText from 'src/components/wm-text';

export default class ChatItem extends Component {
  render() {
    const {item} = this.props;
    return (
      <View>
        <TouchableRipple
          onPress={() => console.log('Pressed')}
          rippleColor="rgba(0, 0, 0, .32)"
          style={styles.touchable}>
          <View style={styles.item}>
            <Avatar.Image
              size={50}
              source={{
                uri: item.picture.thumbnail,
              }}
            />
            <View style={styles.main}>
              <View style={styles.desp}>
                <WMText
                  style={styles.name}
                  value={item.name.first + ' ' + item.name.last}
                />
                <WMText style={styles.time} value={'6:13 am'} />
              </View>

              <WMText style={styles.msg} value={'Hi, Man, How are you?'} />
            </View>
          </View>
        </TouchableRipple>
        <Divider style={styles.divider} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  touchable: {paddingHorizontal: 10, paddingVertical: 2},
  item: {flex: 1, flexDirection: 'row', height: 70, alignItems: 'center'},
  main: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'center',
  },
  desp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 6,
  },
  name: {fontWeight: 'bold', fontSize: 18, color: 'black'},
  time: {fontSize: 14, color: 'grey'},
  msg: {fontWeight: '400', fontSize: 14, color: 'grey'},
  divider: {marginLeft: 72},
});
