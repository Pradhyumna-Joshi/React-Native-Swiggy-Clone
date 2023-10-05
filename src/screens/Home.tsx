import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Carousel from '../Components/Carousel';
import FoodTypes from '../Components/FoodTypes';
import QuickItems from '../Components/QuickItems';
import {data} from '../data/hotels';
import MenuItems from '../Components/MenuItems';

export default function Home() {
  return (
    <>
      <StatusBar backgroundColor={'#000'} />
      <ScrollView>
        {/* searhbox */}
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderColor: '#C0C0C0',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput
            placeholder="Search for restaurant, item or more"
            style={{
              fontSize: 16,
            }}
          />
          <Icon name="search" size={28} color={'red'} />
        </View>

        {/* imageslider */}

        <Carousel />

        {/* foodtypes */}
        <FoodTypes />

        {/* quickitems */}
        <QuickItems />

        {/* filter  */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: '#C0C0C0',
              padding: 10,
              marginHorizontal: 10,
              borderRadius: 20,
              width: 120,
            }}>
            <Text style={{marginRight: 10, fontSize: 15, fontWeight: '700'}}>
              Filter
            </Text>
            <IonIcon name="ios-filter" size={20} color={'#000'} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: '#C0C0C0',
              padding: 8,
              marginHorizontal: 10,
              borderRadius: 20,
            }}>
            <Text style={{fontSize: 15, fontWeight: '400'}}>
              Sort by Rating
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: '#C0C0C0',
              padding: 8,
              marginHorizontal: 10,
              borderRadius: 20,
            }}>
            <Text style={{fontSize: 15, fontWeight: '400'}}>Sort By Price</Text>
          </TouchableOpacity>
        </View>

        {data.map((item, index) => (
          <MenuItems key={index} item={item} />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
