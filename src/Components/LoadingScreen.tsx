import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import OrderScreen from './OrderScreen';

const LoadingScreen = () => {
  const animation = useRef(null);
  const navigation = useNavigation();
  //   useEffect(() => {
  //     setTimeout(() => {
  //       navigation.navigate('Order');
  //     }, 2000);
  //   }, []);
  return (
    <SafeAreaView>
      <LottieView
        source={require('../lottie/thumbs.json')}
        ref={animation}
        style={{
          height: 260,
          width: 300,
          alignSelf: 'center',
          marginTop: 40,
          justifyContent: 'center',
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />
      <Text
        style={{
          marginTop: 20,
          fontSize: 16,
          fontWeight: '600',
          textAlign: 'center',
        }}>
        Your order has been recieved
      </Text>

      <LottieView
        source={require('../lottie/sparkle.json')}
        ref={animation}
        style={{
          height: 300,
          width: 300,
          position: 'absolute',
          top: 100,
          alignSelf: 'center',
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />
    </SafeAreaView>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({});
