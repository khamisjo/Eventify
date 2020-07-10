import React ,{useState}from 'react';
import {View, StyleSheet,Text,Button,TextInput} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const CreateEventScreen=({navigation})=>{
    const [eventTitle, setEventTitle] = useState('');
    //states for Start/End times
    const [flag,setFlag]=useState('')
    const [eventStartTime, setEventStartTime] = useState('');
    const [eventEndTime, setEventEndTime] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
 
  const showDatePicker = (flag) => {
    setDatePickerVisibility(true);
    setFlag(flag)
  };
 
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
 
  const handleEndConfirm = (date) => {
    setEventEndTime(date)
    hideDatePicker();
  };
  const handleStartConfirm = (date) => {
 
     if(flag==='start'){
         setEventStartTime(date)
         setFlag('')
     }
     if (flag ==='end'){
         setEventEndTime(date)
        setFlag('')
     }
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
            <Text onPress={date=>showDatePicker('start',date)}>Start Time: {dateParser(eventStartTime.toString())}</Text>
            <Text onPress={date=>showDatePicker('end',date)}>End Time: {dateParser(eventEndTime.toString())}</Text>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="datetime"
                onConfirm={handleStartConfirm}
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
