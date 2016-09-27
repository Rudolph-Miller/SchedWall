/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry, View, NavigatorIOS, StyleSheet
} from 'react-native';
import { ListEvents } from './src/components';

function wrap(klass) {
  return (props) => {
    return (
      <View style={styles.wrapper}>
        {React.createElement(klass, props)}
      </View>
    );
  };
}

class SchedWall extends Component {
  render() {
    return (
      <NavigatorIOS
        ref='nav'
        initialRoute={{
          component: wrap(ListEvents),
          title: 'SchedWall'
        }}
        barTintColor='#FF5722'
        tintColor='#fff'
        titleTextColor='#fff'
        style={styles.container} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
    paddingTop: 64
  },
});

AppRegistry.registerComponent('SchedWall', () => SchedWall);
