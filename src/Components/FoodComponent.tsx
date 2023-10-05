import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../redux/cartReducer';

export default function FoodComponent({food, index}) {
  const [selected, setSelected] = useState(false);
  const [addItems, setAddItems] = useState(0);
  const dispatch = useDispatch();
  return (
    <>
      <View
        key={index}
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          justifyContent: 'space-between',
          paddingVertical: 16,
        }}>
        <View>
          <Text style={{fontSize: 17, fontWeight: '700', color: '#000'}}>
            {food.name}
          </Text>
          <Text style={{fontSize: 16, fontWeight: '700', color: '#000'}}>
            ₹{food.price}
          </Text>
          <Text>
            {[0, 0, 0, 0, 0].map((en, i) => (
              <IonIcon
                name={
                  i < Math.floor(food.rating) ? 'ios-star' : 'ios-star-half'
                }
                size={18}
                color={'#F7CD2E'}
              />
            ))}
          </Text>
          <Text style={{width: 180}}>
            {food.description.length > 30
              ? food.description.substr(0, 35) + ' ...'
              : food.description}
          </Text>
        </View>
        <View>
          <Image
            source={{uri: food.image}}
            style={{
              height: 120,
              width: 120,
              borderRadius: 10,
              marginEnd: 8,
            }}
          />
          {selected ? (
            <View
              style={{
                width: 90,
                height: 40,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                backgroundColor: '#FFF',
                position: 'absolute',
                bottom: -14,
                left: 15,
                borderRadius: 5,
                elevation: 3,
              }}>
              <Pressable
                onPress={() => {
                  if (addItems == 1) {
                    setAddItems(0);
                    setSelected(false);
                    dispatch(removeFromCart(food));
                  } else {
                    setAddItems(addItems - 1);
                    dispatch(decrementQuantity(food));
                  }
                }}>
                <Text
                  style={{fontSize: 28, color: '#6EC72D', fontWeight: '500'}}>
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{fontSize: 20, color: '#6EC72D', fontWeight: '500'}}>
                  {addItems}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  setAddItems(c => c + 1);
                  dispatch(incrementQuantity(food));
                }}>
                <Text
                  style={{fontSize: 20, color: '#6EC72D', fontWeight: '500'}}>
                  +
                </Text>
              </Pressable>
            </View>
          ) : (
            <TouchableOpacity
              style={{
                width: 90,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FFF',
                position: 'absolute',
                bottom: -14,
                left: 15,
                borderRadius: 5,
                elevation: 3,
              }}
              onPress={() => {
                setSelected(true);
                if (addItems === 0) {
                  setAddItems(1);
                }
                dispatch(addToCart(food));
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '900',
                  color: '#6EC72D',
                  letterSpacing: 0.7,
                }}>
                ADD
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <Text
        style={{
          borderWidth: 0.7,
          height: 1,
          borderColor: '#C0C0C0',
          marginTop: 10,
        }}></Text>
    </>
  );
}

const styles = StyleSheet.create({});
