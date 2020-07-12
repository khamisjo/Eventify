import React, {useState} from 'react';
import { Text,StyleSheet,Image} from 'react-native';
import {Input,Button,SocialIcon} from 'react-native-elements';
import Spacer from '../components/Spacer';
const FB_API_KEY="123"
const Google_APP_ID_KEY="234"
const AuthForm=({signingOption,onSubmit})=>{
    const [email,setEmail] = useState('');
    const [password,setPassword]= useState('');

    return (
        <>
              <Image 
                style={styles.titleLogo}
                source={require('../../Design/chopsic.png')}
            />
           <Spacer/>
           <Text style={styles.text}> {`${signingOption} for Eventify`}
           </Text>
           <Input
             label="Email"
             value={email}
             onChangeText={setEmail}  
             autoCapitalize="none"
             autoCorrect={false}  
           />
           <Input
            label="Password" 
            value={password}
            onChangeText={setPassword}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
           />
           <Button 
                title={signingOption}
                style={styles.button}
                onPress={onSubmit}
           />
           <Spacer/>
           
        </>
    )

}

const styles = StyleSheet.create({
    button:{
        margin:16,
    },
    titleLogo: {
        marginLeft:8,
        marginTop:130,
        marginBottom:60,
        width: 400,
        height: 40,
        overflow: 'visible',
        resizeMode:'cover'
      },
    touchableText:{
        fontSize:15,
        textAlign:'center',
        fontWeight:'400',
        fontFamily:'Courier-BoldOblique',
        color:'blue'
    },
    text:{
        fontSize:33,
        textAlign:'center',
        fontWeight:'bold',
        fontFamily:'Courier',
        color:'#4a8ad9'
    },
    container:{
        flex:1
    }
});

export default AuthForm