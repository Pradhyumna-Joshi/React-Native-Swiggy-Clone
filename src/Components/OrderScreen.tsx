import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import moment from 'moment';
import MapView, {Marker, Polyline} from 'react-native-maps';

const OrderScreen = () => {
  const time = moment().format('LT');
  const mapView = useRef(null);

  const [coordinates] = useState([
    {
      latitude: 12.9716,
      longitude: 77.5964,
    },
    {
      latitude: 13.0451,
      longitude: 77.6269,
    },
  ]);

  useEffect(() => {
    mapView.current.fitToCoordinates(coordinates, {
      edgePadding: {
        top: 50,
        left: 50,
        right: 50,
        bottom: 50,
      },
    });
  }, []);

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 16,
          height: 80,
          backgroundColor: '#fc8019',
        }}>
        <View>
          <Text style={{color: 'white', fontWeight: '600', fontSize: 17}}>
            Delivery in 20 mins
          </Text>
          <Text style={{color: 'white', fontWeight: '600', fontSize: 17}}>
            Order placed at {time}
          </Text>
        </View>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 17}}>
          HELP
        </Text>
      </View>
      <MapView
        ref={mapView}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{height: 400, width: '100%'}}>
        <Marker coordinate={coordinates[0]} />
        <Marker coordinate={coordinates[1]} />
        <Polyline
          coordinates={coordinates}
          strokeColor="black"
          strokeWidth={1}
          lineDashPattern={[4]}
        />
      </MapView>
    </>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
