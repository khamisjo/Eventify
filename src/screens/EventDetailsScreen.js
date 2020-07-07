import React from 'react';
import {View, StyleSheet,Text,Image} from 'react-native';
import {Card,ListItem, Button, Icon} from 'react-native-elements';
const users = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name: 'dsad',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
     },
   ]
   
const EventDetailsScreen=()=>{
 return (
    <Card title="CARD WITH DIVIDER">
  {
    users.map((u, i) => {
      return (
        <View key={i} style={styles.user}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: u.avatar }}
          />
          <Text style={styles.name}>{u.name}</Text>
        </View>
      );
    })
  }
</Card>

 )
};

const styles = StyleSheet.create({});

export default EventDetailsScreen;
