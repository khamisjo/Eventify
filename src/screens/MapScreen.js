import React from 'react';
import {View, StyleSheet,Text,Button} from 'react-native';

const MapScreen=({navigation})=>{
    return <>
        <Text style={{fontSize:48}}> MapScreen</Text>
        <Button
           title="Create Flyer"
           onPress={()=>navigation.navigate('CreateEventScreen')}
         />
        </>
};

const styles = StyleSheet.create({});

export default MapScreen;
