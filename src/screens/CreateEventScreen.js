import React from 'react';
import {View, StyleSheet,Text,Button} from 'react-native';

const CreateEventScreen=({navigation})=>{
    return (
        <View>
            <Text style={{fontSize:48}}> CreateEventScreen</Text>
            <Button 
                title="Go to Create Flyer"
                onPress={()=>navigation.navigate('CreateFlyer')}
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default CreateEventScreen;
