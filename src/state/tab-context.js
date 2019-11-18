import React, {Component} from 'react';

export const TabContext = React.createContext({});

export default class TabProvider extends Component {
  state = {
    position: null,
  };
  setPosition = position => {
    this.setState({
      position,
    });
  };
  render() {
    const {
      props: {children},
      state: {position},
      setPosition,
    } = this;
    return (
      <TabContext.Provider
        value={{
          position,
          setPosition,
        }}>
        {children}
      </TabContext.Provider>
    );
  }
}
