import React, {useContext,useEffect} from 'react';
import {View,StyleSheet} from 'react-native';
import NavLink from '../components/NavLink'
import AuthForm from '../components/AuthForm'
import {Context as AuthContext} from '../context/AuthContext'
import { NavigationEvents } from 'react-navigation';
const SignupScreen=({navigation})=>{
  const { state, signup,clearErrorMessage,tryLocalSignin } = useContext(AuthContext);
    return (
        <View >
          <NavigationEvents
            onWillFocus={clearErrorMessage}
          />
          <AuthForm
            signingOption="Sign up"
            onSubmit={signup}
            errorMessage={state.errorMessage}
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
