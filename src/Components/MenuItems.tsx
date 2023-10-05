import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {data} from '../data/hotels';
import {useNavigation} from '@react-navigation/native';
import MenuItem from '../screens/MenuItem';

const MenuItems = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{margin: 10, flexDirection: 'row'}}
      onPress={() => {
        navigation.navigate('MenuItem', {
          id: item.id,
          name: item.name,
          rating: item.rating,
          time: item.time,
          adress: item.adress,
          ratings: item.ratings,
          cost_for_two: item.cost_for_two,
          cuisines: item.cuisines,
          menu: item.menu,
        });
      }}>
      <ImageBackground
        style={{aspectRatio: 4 / 5, height: 170}}
        imageStyle={{
          borderRadius: 7,
          marginRight: 8,
        }}
        source={{uri: item.image}}
      />
      <View>
        <Text
          style={{
            marginLeft: 3,
            fontSize: 18,
            fontWeight: '700',
            color: '#000',
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
        <Text style={{marginLeft: 3, letterSpacing: 0.5, fontSize: 15}}>
          {item.adress}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              marginTop: 3,
              height: 26,
              width: 26,
              borderRadius: 13,
              backgroundColor: '#F8C8DC',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontWeight: '800'}}>₹</Text>
          </View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '700',
              color: '#000',
              marginLeft: 7,
            }}>
            {item.cost_for_two} for two
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 3}}>
          <IonIcon name="ios-bicycle-outline" size={28} color={'black'} />
          <Text
            style={{
              marginLeft: 7,
              letterSpacing: 0.8,
              fontWeight: '600',
              fontSize: 15,
            }}>
            FREE DELIVERY
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItems;

const styles = StyleSheet.create({});
