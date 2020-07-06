import React from 'react';
import {View, StyleSheet,Text,Button} from 'react-native';

const ProfileScreen=({navigation})=>{
    return (
        <View>
            <Text style={{fontSize:48}}> ProfileScreen</Text>
            <Button 
                title="Go to Signout Screen"
                onPress={()=> navigation.navigate('Signout')}
            />
        </View>
    )
};
const styles = StyleSheet.create({});

export default ProfileScreen;
