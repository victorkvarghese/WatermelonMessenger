import React, {Component} from 'react';
import {FlatList} from 'react-native';

export default class WMList extends Component {
  render() {
    const {data, renderItem, keyExtractor, ...otherProps} = this.props;
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        {...otherProps}
      />
    );
  }
}
