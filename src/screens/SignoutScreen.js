import React from 'react';
import {View, StyleSheet,Text,Button} from 'react-native';

const SignoutScreen=({navigation})=>{
    return (
        <View>
            <Text style={{fontSize:48}}> SignoutScreen </Text>
            <Button 
                title="Go to Sign in/out "
                onPress={()=>navigation.navigate('Signup')}
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default SignoutScreen;
