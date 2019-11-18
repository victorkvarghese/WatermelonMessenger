import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, TouchableRipple} from 'react-native-paper';

import WMList from 'src/components/wm-list';
import WMText from 'src/components/wm-text';
import TabPadding from 'src/components/tab-padding';
import ChatItem from './components/chat-item';

import {users} from 'src/assets/fake_data';

export default class Chats extends Component {
  keyExtractor = item => item.login.uuid;

  renderHeader = () => {
    return <TabPadding />;
  };

  renderItem = ({item}) => <ChatItem item={item} />;

  render() {
    return (
      <WMList
        data={users.results}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        ListHeaderComponent={this.renderHeader}
      />
    );
  }
}

const styles = StyleSheet.create({});
