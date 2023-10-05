import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {quickItems} from '../data/quickfood';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function QuickItems() {
  return (
    <View style={{margin: 10}}>
      <Text
        style={{
          fontSize: 17,
          fontWeight: '800',
          color: 'black',
          letterSpacing: 0.3,
        }}>
        Get it Quickly
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {quickItems.map((item, index) => (
          <View key={index} style={{margin: 10}}>
            <ImageBackground
              source={{uri: item.image}}
              style={{aspectRatio: 5 / 6, height: 170}}
              imageStyle={{
                borderRadius: 7,
                opacity: 0.98,
              }}>
              <Text
                style={{
                  position: 'absolute',
                  bottom: 10,
                  left: 10,
                  fontSize: 27,
                  color: 'white',
                  fontWeight: '900',
                }}>
                {item.offer} OFF
              </Text>
            </ImageBackground>
            <Text
              style={{
                marginTop: 3,
                fontSize: 16,
                fontWeight: '500',
                color: 'black',
                letterSpacing: 0.2,
              }}>
              {item.name}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="stars" size={24} color={'green'} />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '700',

                  marginLeft: 3,
                }}>
                {item.rating}
              </Text>
              <Text style={{marginLeft: 3}}>•</Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '800',

                  marginLeft: 3,
                }}>
                {item.time}mins
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
