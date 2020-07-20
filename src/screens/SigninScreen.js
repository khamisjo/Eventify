import React,{useContext,useEffect} from 'react';
import {View,StyleSheet} from 'react-native';
import NavLink from '../components/NavLink'
import AuthForm from '../components/AuthForm'
import {NavigationEvents} from 'react-navigation'
import {SocialIcon} from 'react-native-elements';
import {Facebook_logIn,Google_logIn} from '../components/ExternalAuth'
import {Context as AuthContext} from '../context/AuthContext'

const SigninScreen=({navigation})=>{
  const { state, signin , clearErrorMessage} = useContext(AuthContext);
  
    return (
        <View >
          <NavigationEvents   
            onWillBlur={clearErrorMessage}
            onWillFocus={clearErrorMessage}
          />
          <AuthForm
            signingOption="Sign In"
            onSubmit={signin}
            errorMessage={state.errorMessage}
          />
          <NavLink
            routeName ="Signup"
            text="Don't have an account? Sign up!"
          />
          <SocialIcon
                title={`Sign in With Facebook`}
                button
                type='facebook' 
                onPress={()=>{Facebook_logIn(navigation.navigate)}}
            />
            <SocialIcon
                title={`Sign in With Google`}
                button
                type='google' 
                onPress={()=>{Google_logIn(navigation.navigate)}}
            />
        </View>
    )
};
// Hide navigation header
SigninScreen.navigationOptions = () => {
    return {
      header: () => false,
    };
  };
const styles = StyleSheet.create({});

export default SigninScreen;
