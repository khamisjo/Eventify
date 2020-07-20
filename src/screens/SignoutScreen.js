import React,{useContext} from 'react';
import {View, StyleSheet,Text,Button} from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
const SignoutScreen=({navigation})=>{
    const {signout} = useContext(AuthContext)
    return (
        <View>
            <Text style={{fontSize:48}}> SignoutScreen </Text>
            <Button 
                title="Go to Sign in/out "
              //  onPress={()=>navigation.navigate('Signin')}
                onPress={signout}
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default SignoutScreen;
