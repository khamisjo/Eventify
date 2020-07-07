import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeHeaders = ({onSubmit,IconName}) => {
    return (
        <Button
        icon={
          <Icon
            name={IconName}
            size={15}
            color="white"
          />
        }
        onPress={onSubmit}
      />
    );
  };

const styles =StyleSheet.create({})
export default HomeHeaders