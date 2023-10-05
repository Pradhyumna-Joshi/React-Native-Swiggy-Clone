import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
