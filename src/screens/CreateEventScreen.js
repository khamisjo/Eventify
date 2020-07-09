import React ,{useState}from 'react';
import {View, StyleSheet,Text,Button,TextInput} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const CreateEventScreen=({navigation})=>{
    const [eventTitle, setEventTitle] = useState('');
    const [eventStartTime, setEventStartTime] = useState('');
    const [eventEndTime, setEventEndTime] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
 
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
 
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
 
  const handleConfirm = (date) => {
   //if(!eventStartTime) setEventStartTime(date)
    setEventEndTime(date)
    hideDatePicker();
  };
  const dateParser=(date)=>{
      if(!date) return 
    let dateArray=date.split(" ")
    let time = dateArray[4]
    time=time.split(':')
    return dateArray[0]+' '+dateArray[1]+' '+ dateArray[2]+' '+dateArray[3]+' '+time[0]+":"+time[1]
  }
    return (
        <View>
            <TextInput
                style={styles.textInput}
                onChangeText={setEventTitle}
                value={eventTitle}
            />
            <Text onPress={showDatePicker}>Start Time: {dateParser(eventStartTime.toString())}</Text>
            <Text onPress={showDatePicker}>End Time: {dateParser(eventEndTime.toString())}</Text>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="datetime"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
         
      
    );
};

const styles = StyleSheet.create({
    textInput: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 4,
        paddingLeft:10
    },
  });

export default CreateEventScreen;
