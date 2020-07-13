import React,{useState} from 'react';
import {View, StyleSheet,Text, TextInput,Linking,Button,Image,FlatList} from 'react-native';
import posterMyWall from '../api/posterMyWall'
import SearchBar from '../components/SearchBar'
import { TouchableOpacity } from 'react-native-gesture-handler';

//import chalk from 'chalk'
const ctx = require('chalk')
const chalk = new ctx.Instance({level: 3});

const CreateFlyerScreen=()=>{
    const [searchTerm,setSearchTerm] = useState('')
    const [apiResults,setApiResults]=useState([])
    const searchApi =  () =>{
        const response =  posterMyWall.get(`${searchTerm}&type=image&limit=500`)
        .then((response)=>{
            setApiResults(response.data)    
        })
        .catch((error)=>{
            console.log(error)
        })      
    }
    return (
        <View>
            <SearchBar 
                term={searchTerm}
                onTermChange={setSearchTerm}
                onTermSubmit={searchApi}
                placeholder={'Search flyers by category'}
            />
            <FlatList
                data={apiResults}
                renderItem={({item}) => 
                    <TouchableOpacity
                        onPress={()=>{Linking.openURL(item.customize_url)}}
                    >
                        <Image 
                        style={styles.logo}
                        source={{uri:item.preview_url}}
                    />
                    </TouchableOpacity>
                }
            />
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
    logo: {
        width: 300,
        height: 300,
        borderWidth:5,
        borderColor:'white'
      },
});

export default CreateFlyerScreen;
