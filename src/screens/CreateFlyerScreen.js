import React,{useState,useCallback} from 'react';
import {View, StyleSheet,Text, TextInput,Linking,Button} from 'react-native';
import NavLink from '../components/NavLink'
import posterMyWall from '../api/posterMyWall'
import SearchBar from '../components/SearchBar'
const supportedURL = "https://www.postermywall.com/index.php/posterbuilder/copy/a9aef45120f499ea940074cb271773b8?utm_source=api";
const unsupportedURL = "slack://open?team=123456";

/* 
    To do:-
    
    1- display 50 flyers' <preview_url> per search query 
    2- one the user clicks on a flyer's image, show the <customize_url> for it
    3- show option for the user to return to CreateFlyerPage
*/


//import chalk from 'chalk'
const ctx = require('chalk')
const chalk = new ctx.Instance({level: 3});
const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}+&type=image`);
      }
    }, [url]);
  
    return <Button title={children} onPress={handlePress} />;
  };
const CreateFlyerScreen=()=>{
    const [searchTerm,setSearchTerm] = useState('')
    const [apiResults,setApiResults]=useState([])
    const searchApi =  () =>{
        const response =  posterMyWall.get(`${searchTerm}`)
        .then((response)=>{
            console.log(chalk.blue(response.data.length))
            setApiResults(response.data[0].customize_url)
        })
        .catch((error)=>{
            console.log(error)
        })      
    }
    return (
        <View>
            <NavLink />
            <NavLink />
            <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
            <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton>
            <SearchBar 
                term={searchTerm}
                onTermChange={setSearchTerm}
                onTermSubmit={searchApi}
            />
            <Text style={{fontSize:48}}> CreateFlyerScreen</Text>
            <Text>We found: {apiResults}</Text>
        </View>
    )
};
  
const styles = StyleSheet.create({
    textInput: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 4,
        paddingLeft:10
    },
});

export default CreateFlyerScreen;
