import React from 'react';
import {View, StyleSheet,Text,Button} from 'react-native';

const HomeScreen=({navigation})=>{
    return (
        <View>
            <Text style={{fontSize:48}}> HomeScreen</Text>
            <Button 
                title="Go to EventDetails"
                onPress={()=>navigation.navigate('EventDetails')}
            />
            <Button 
                title="Go to CreateEvent"
                onPress={()=>navigation.navigate('CreateEvent')}
            />
            <Button 
                title="Go to Notifications"
                onPress={()=>navigation.navigate('Notifications')}
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default HomeScreen;
