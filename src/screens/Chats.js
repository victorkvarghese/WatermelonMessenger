import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import WMList from 'src/components/wm-list';
import WMText from 'src/components/wm-text';
import TabContainer from 'src/components/tab-container';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
export default class Chats extends Component {
  keyExtractor = item => item.id;

  renderItem = ({item}) => <WMText value={item.title} />;

  render() {
    return (
      <TabContainer>
        <WMList
          data={DATA}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </TabContainer>
    );
  }
}

const styles = StyleSheet.create({});
