import React ,{useState}from 'react';
import {View, StyleSheet,Text,Button} from 'react-native';
import {Header,Card,Icon} from 'react-native-elements'
import HomeHeaders from '../components/HomeHeaders'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import SearchBar from '../components/SearchBar'

const HomeScreen=({navigation})=>{
    const [term,setTerm] = useState('')

    return (
        <View>
            <Header
                leftComponent={
                    <HomeHeaders
                        onSubmit={()=>navigation.navigate('Notifications')}
                        IconName='bell'
                    />
                }
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                 rightComponent={
                    <HomeHeaders 
                         onSubmit={()=>navigation.navigate('CreateEvent')}
                         IconName='plus'
                    />
                }
            />
            <SearchBar 
                term={term}
                onTermChange={newTerm=>setTerm(newTerm)}
                onTermSubmit={()=>console.log('Fetch requestd event from my API')}
                placeholder={'Search Events'}
            />
            <Card
                title='HELLO WORLD'
                image={require('../../Design/Logo/logo_main.jpg')}>
                <Text style={{marginBottom: 10}}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' 
                    onPress={()=>navigation.navigate('EventDetails')}
                />
            </Card>
            <Card
                title='HELLO WORLD'
                image={require('../../Design/Logo/logo_main.jpg')}>
                <Text style={{marginBottom: 10}}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' 
                    onPress={()=>navigation.navigate('EventDetails')}
                />
            </Card>
        </View>
    )
};

HomeScreen.navigationOptions = () => {
    return {
      header: () => false,
    };
  };

const styles = StyleSheet.create({
    text:{
        borderColor:'red',
        margin:55
    }

});

export default HomeScreen;
