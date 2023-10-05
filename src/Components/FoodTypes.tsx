import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {types} from '../data/foodtypes';
import React from 'react';

export default function FoodTypes() {
  return (
    <View>
      <Text
        style={{
          marginTop: 12,
          fontSize: 17,
          fontWeight: '800',
          color: 'black',
          paddingHorizontal: 10,
        }}>
        What's on your mind?
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {types.map((item, index) => (
          <View style={{margin: 10}} key={index}>
            <Image
              source={{uri: item.image}}
              style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                resizeMode: 'contain',
              }}
            />
            <Text style={{textAlign: 'center', marginTop: 5}}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
