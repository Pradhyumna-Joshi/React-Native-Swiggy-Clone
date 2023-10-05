import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrementQuantity,
  incrementQuantity,
  clearCart,
} from '../redux/cartReducer';

// import LoadingScreen from './LoadingScreen';
import OrderScreen from './OrderScreen';

export default function CartScreen({route}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const instructions = [
    {
      id: '0',
      name: 'Avoid Ringing',
      icon: 'bell',
    },
    {
      id: '1',
      name: 'Leave at the door',
      icon: 'door-open',
    },
    {
      id: '2',
      name: 'Directions to reach',
      icon: 'directions',
    },
    {
      id: '3',
      name: 'Avoid Calling',
      icon: 'phone-alt',
    },
  ];

  const cart = useSelector(state => state.cart.cart);
  const total = cart
    .map(item => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  return (
    <>
      <ScrollView>
        {total > 0 ? (
          <View>
            <View
              style={{
                flexDirection: 'row',
                margin: 10,
                alignItems: 'center',
              }}>
              <IonIcon
                onPress={() => {
                  navigation.goBack();
                }}
                name="chevron-back"
                size={28}
                color={'#000'}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: '#000',
                  marginLeft: 5,
                }}>
                {route.params.name}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 16,
                marginVertical: 10,
                backgroundColor: 'white',
                padding: 14,
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 14, fontWeight: '600'}}>
                Ordering for someone else?
              </Text>
              <Text style={{fontSize: 15, color: '#ff4500', fontWeight: '600'}}>
                Add details
              </Text>
            </View>

            <View
              style={{
                marginHorizontal: 16,
                marginTop: 20,
                backgroundColor: 'white',
                borderRadius: 12,
              }}>
              {cart.map((item, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 16,
                  }}>
                  <Text style={{fontSize: 15, fontWeight: '600', width: 120}}>
                    {item.name}
                  </Text>
                  <View
                    style={{
                      width: 96,
                      height: 40,
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      alignItems: 'center',
                      backgroundColor: '#FFF',
                      borderRadius: 5,
                      borderWidth: 0.2,
                    }}>
                    <Pressable
                      onPress={() => {
                        dispatch(decrementQuantity(item));
                      }}>
                      <Text
                        style={{
                          fontSize: 28,
                          color: '#6EC72D',
                          fontWeight: '500',
                        }}>
                        -
                      </Text>
                    </Pressable>

                    <Pressable>
                      <Text
                        style={{
                          fontSize: 20,
                          color: '#6EC72D',
                          fontWeight: '500',
                        }}>
                        {item.quantity}
                      </Text>
                    </Pressable>

                    <Pressable
                      onPress={() => {
                        dispatch(incrementQuantity(item));
                      }}>
                      <Text
                        style={{
                          fontSize: 22,
                          color: '#6EC72D',
                          fontWeight: '500',
                        }}>
                        +
                      </Text>
                    </Pressable>
                  </View>
                  <Text
                    style={{
                      fontWeight: '600',
                      fontSize: 15,
                      width: 60,
                      textAlign: 'right',
                    }}>
                    ₹{item.quantity * item.price}
                  </Text>
                </View>
              ))}
            </View>

            <View style={{marginHorizontal: 16, marginTop: 16}}>
              <Text style={{fontSize: 15, fontWeight: '600'}}>
                Delivery Instructions
              </Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{marginTop: 10}}>
                {instructions.map((item, index) => (
                  <Pressable
                    style={{
                      padding: 16,
                      marginRight: 10,
                      borderRadius: 10,
                      backgroundColor: 'white',
                      elevation: 1,
                    }}>
                    <View>
                      <FontAwesome5 name={item.icon} size={22} color={'gray'} />
                      <Text
                        style={{width: 75, color: '#383838', marginTop: 14}}>
                        {item.name}
                      </Text>
                    </View>
                  </Pressable>
                ))}
              </ScrollView>
            </View>

            <View style={{marginHorizontal: 16, marginTop: 16}}>
              <Text style={{fontSize: 15, fontWeight: '600'}}>
                Billing Details
              </Text>
              <View
                style={{
                  marginTop: 10,
                  backgroundColor: 'white',
                  padding: 14,
                  borderRadius: 10,
                  borderStyle: 'dashed',
                  borderWidth: 1,
                  borderColor: '#C0C0C0',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin: 4,
                  }}>
                  <Text style={{fontWeight: '500', fontSize: 15}}>
                    Item Total
                  </Text>
                  <Text style={{fontWeight: '600'}}>₹{total}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin: 4,
                  }}>
                  <Text style={{fontWeight: '500', fontSize: 15}}>
                    Delivery fee | 1.2 Kms
                  </Text>
                  <Text style={{fontWeight: '500', color: '#ff4500'}}>
                    FREE
                  </Text>
                </View>
                <Text
                  style={{
                    margin: 4,
                    color: '#45ff00',
                    fontWeight: '500',
                    letterSpacing: 0.5,
                  }}>
                  Hurray!! Free Delivery on your order
                </Text>
                <Text
                  style={{
                    height: 0.6,
                    borderWidth: 0.6,
                    borderColor: '#C0C0C0',
                    margin: 10,
                  }}></Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin: 4,
                  }}>
                  <Text style={{fontWeight: '500', fontSize: 15}}>
                    Delivery Tip
                  </Text>
                  <Pressable>
                    <Text style={{fontWeight: '500', color: '#ff4500'}}>
                      Add Tip
                    </Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin: 4,
                  }}>
                  <Text style={{fontWeight: '500', fontSize: 15}}>
                    Taxes and Charges
                  </Text>
                  <Text style={{fontWeight: '500', color: '#ff4500'}}>
                    ₹67.5
                  </Text>
                </View>
                <Text
                  style={{
                    height: 0.6,
                    borderWidth: 0.6,
                    borderColor: '#C0C0C0',
                    margin: 10,
                  }}></Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin: 4,
                  }}>
                  <Text style={{fontWeight: 'bold', color: 'black'}}>
                    To Pay
                  </Text>
                  <Text style={{fontWeight: 'bold', color: 'black'}}>
                    ₹{total + 67.5}
                  </Text>
                </View>
              </View>
            </View>

            <View></View>
          </View>
        ) : (
          <View
            style={{
              marginVertical: 10,
              marginHorizontal: 16,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                padding: 16,
                color: 'black',
                textAlign: 'center',
              }}>
              Cart is Empty!!😞
            </Text>
          </View>
        )}
      </ScrollView>
      {total === 0 ? null : (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            padding: 18,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            elevation: 1,
            marginTop: 10,
          }}>
          <View>
            <Text style={{fontWeight: 'bold', color: 'black', fontSize: 17}}>
              ₹{total + 67.5}
            </Text>
            <Text style={{color: '#45FF00', fontWeight: '600'}}>
              View Deatailed Bill
            </Text>
          </View>
          <TouchableOpacity
            style={{
              padding: 16,
              backgroundColor: '#00A877',
              width: 200,
              borderRadius: 8,
            }}>
            <Text
              style={{fontWeight: 'bold', color: 'white', textAlign: 'center'}}>
              Proceed to Pay
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
