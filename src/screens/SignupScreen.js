import React from 'react';
import {View,StyleSheet} from 'react-native';
import NavLink from '../components/NavLink'
import AuthForm from '../components/AuthForm'
const SignupScreen=({navigation})=>{

    return (
        <View >
          <AuthForm
            signingOption="Sign up"
            onSubmit={()=>navigation.navigate('mainFlow')}
          />
          <NavLink
            routeName ="Signin"
            text="Already have an account? Sign in instead!"
          />
        </View>
    )
};
// Hide navigation header
SignupScreen.navigationOptions = () => {
    return {
      header: () => false,
    };
  };
const styles = StyleSheet.create({});

export default SignupScreen;
