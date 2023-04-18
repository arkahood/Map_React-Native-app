
import React from 'react';
import {View, Text , Button, StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../store/counterSlice';

import MapView, {Marker} from 'react-native-maps';
import { setLocation } from '../store/locationSlice';

const Home = ({navigation}) => {

    const location = useSelector((state:any) => state.location);
    const dispatch = useDispatch();

    const onRegionChange = (region) => {
        dispatch(setLocation({
            latitude : region.latitude,
            longitude : region.longitude
        }))
    }

    return (
        <View style={styles.container}>
          <MapView 
          style={styles.map}
          region= {{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onRegionChange={onRegionChange}
           >
            <Marker coordinate={ {latitude:location.latitude,
            longitude: location.longitude,} }/>
           </MapView>
           <View style={styles.button} >
           <Button title='Search For this Location' color={'black'} 
           onPress={()=>navigation.navigate('RESULT')}
           />
           </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      map: {
        flex:8,
        marginBottom:50,
        marginTop:50
      },
      button : {
        flex:2
      }
    });

export default Home;