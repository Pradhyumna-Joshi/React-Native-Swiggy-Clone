import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import FoodComponent from '../Components/FoodComponent';
import ReactNativeModal from 'react-native-modal';
import {useSelector} from 'react-redux';

export default function MenuItem({route}) {
  const [selected, setSelected] = useState(['Recommended']);
  const [menu, setMenu] = useState([]);
  const [isModalVisible, setIsModalVisisble] = useState(false);

  const navigation = useNavigation();
  const cart = useSelector(state => state.cart.cart);

  useEffect(() => {
    setMenu(route.params.menu);
  }, []);
  const total = cart
    .map(item => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);

  const toggleModal = () => {
    setIsModalVisisble(!isModalVisible);
  };

  const handlePressItem = text => {
    const selectedItem = selected.find(txt => txt === text);
    if (selectedItem) {
      setSelected(selected.filter(item => item !== text));
    } else {
      setSelected([...selected, text]);
    }
  };
  return (
    <>
      <ScrollView>
        <View
          style={{
            height: 300,
            backgroundColor: '#B0C4DE',
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
              marginHorizontal: 10,
            }}>
            <IonIcon
              onPress={() => {
                navigation.goBack();
              }}
              name="chevron-back"
              size={30}
              color={'#000'}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <IonIcon name="search" size={28} color={'#000'} />
              <Text style={{marginLeft: 7}}>Search</Text>
            </View>
          </View>
          <View
            style={{
              height: 200,
              backgroundColor: '#FFF',
              paddingHorizontal: 15,
              paddingVertical: 10,
              marginHorizontal: 20,
              marginVertical: 20,
              borderRadius: 16,
              elevation: 5,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 18, fontWeight: '600', color: '#000'}}>
                {route.params.name}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <IonIcon name="share-social" size={28} />
                <IonIcon
                  name="heart-outline"
                  size={28}
                  style={{marginLeft: 5}}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="stars" size={24} color={'green'} />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '700',

                  marginLeft: 3,
                }}>
                {route.params.rating}
              </Text>
              <Text style={{marginLeft: 3}}>•</Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '800',

                  marginLeft: 3,
                }}>
                {route.params.time}mins
              </Text>
            </View>
            <Text style={{fontSize: 15, marginTop: 4}}>
              {route.params.cuisines}
            </Text>
            <View style={{flexDirection: 'row', marginTop: 4}}>
              <Text style={{fontSize: 15, fontWeight: '800'}}>Outlet : </Text>
              <Text style={{fontSize: 15, fontWeight: '500'}}>
                {route.params.adress}
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 4}}>
              <Text style={{fontSize: 15, fontWeight: '800'}}>22 mins</Text>
              <Text style={{fontSize: 15, marginLeft: 8, fontWeight: '500'}}>
                Home
              </Text>
            </View>
            <Text
              style={{
                height: 1,
                borderWidth: 0.6,
                borderColor: '#C0C0C0',
                marginTop: 8,
              }}></Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <IonIcon name="ios-bicycle-outline" size={30} color={'#E07C24'} />
              <Text style={{fontSize: 15, fontWeight: '600', marginLeft: 10}}>
                0-3 kms
              </Text>
              <Text
                style={{
                  borderWidth: 0.8,
                  marginHorizontal: 8,
                  borderColor: '#C0C0C0',
                }}></Text>
              <Text style={{fontSize: 15, fontWeight: '700'}}>
                35 delivery fee will apply
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 16,
            fontSize: 15,
            fontWeight: '500',
          }}>
          MENU
        </Text>
        <Text
          style={{
            borderWidth: 0.7,
            height: 1,
            marginVertical: 10,
          }}></Text>

        {route.params.menu.map((item, index) => (
          <>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: 10,
              }}
              onPress={() => {
                handlePressItem(item.name);
              }}
              key={index}>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: 'bold',
                  color: '#000',
                }}>
                {item.name} ({item.items.length})
              </Text>

              <IonIcon name="chevron-down" size={28} />
            </TouchableOpacity>
            {selected.includes(item.name)
              ? item.items.map((food, index) => (
                  <FoodComponent food={food} index={index} />
                ))
              : null}
          </>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={{
          height: 70,
          width: 70,
          borderRadius: 35,
          backgroundColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 20,
          right: 20,
          borderWidth: 1,
          borderColor: '#FFF',
          elevation: 10,
        }}
        onPress={toggleModal}>
        <IonIcon name="ios-menu" size={30} color={'#FFF'} />
        <Text style={{color: '#FFF', fontSize: 12}}>MENU</Text>
      </TouchableOpacity>

      <ReactNativeModal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}>
        <View
          style={{
            height: 190,
            width: 250,
            backgroundColor: '#000',
            position: 'absolute',
            bottom: 40,
            right: 20,
            opacity: 1,
            borderRadius: 10,
            padding: 10,
          }}>
          {menu.map((item, index) => (
            <View
              key={index}
              style={{
                margin: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: '#FFF', fontSize: 17, fontWeight: '700'}}>
                {item.name}
              </Text>
              <Text style={{color: '#FFF', fontSize: 17, fontWeight: '700'}}>
                {item.items.length}
              </Text>
            </View>
          ))}
          <Image
            source={{
              uri: 'https://5.imimg.com/data5/ANDROID/Default/2021/5/EZ/FT/GZ/130133306/product-jpeg-500x500.jpg',
            }}
            style={{height: 80, width: 80, alignSelf: 'center'}}
          />
        </View>
      </ReactNativeModal>

      {total !== 0 ? (
        <View
          style={{
            width: '90%',
            backgroundColor: '#00A877',
            position: 'absolute',
            left: 20,
            bottom: 20,
            padding: 14,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#FFF'}}>
              {cart.length} items | ₹{total}
            </Text>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#FFF'}}>
              Extra charges may apply!
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CartScreen', {
                name: route.params.name,
              });
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                color: '#FFF',
                paddingRight: 8,
              }}>
              View Cart
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({});
