import {Alert} from 'react-native';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
const FB_API_KEY="123"
const Google_API_KEY="234"
export async function Google_logIn(navigateTo) {
  console.log("good")

  try {
    const result = await Google.logInAsync({
      androidClientId: "",
      iosClientId: {Google_API_KEY},
      scopes: ['profile', 'email'],
    });
    if (result.type === 'success') {
      //return result.accessToken;
      //Alert.alert('AccessToken: ', `${result.accessToken}`);
      Alert.alert(`Hi ${result.user.givenName}`)
      navigateTo('mainFlow')
    } else {
      //Alert.alert('Sign in please');
      console.log(result)
    }
  } catch (e) {
    console.log("error",e)
  }
}

export async function Facebook_logIn(navigateTo) {
    try {
      await Facebook.initializeAsync({FB_API_KEY},'Eventify');
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        navigateTo('mainFlow')
      } else {
        // type === 'cancel'
        alert(`Come on bro sign in`);
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }



