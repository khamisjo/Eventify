import React from 'react';
import {View,StyleSheet} from 'react-native';
import NavLink from '../components/NavLink'
import AuthForm from '../components/AuthForm'
import {SocialIcon} from 'react-native-elements';
import {Facebook_logIn,Google_logIn} from '../components/ExternalAuth'

const SigninScreen=({navigation})=>{

    return (
        <View >
          <AuthForm
            signingOption="Sign In"
           // onSubmitFB={()=>FBlogIn(navigation.navigate)}
            onSubmit={()=>navigation.navigate('mainFlow')}
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
