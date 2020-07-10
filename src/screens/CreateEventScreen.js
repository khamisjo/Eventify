import React ,{useState}from 'react';
import {View, StyleSheet,Text,Button,TextInput,Switch} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from 'react-native-picker-select';

const categories = [
  {
    label: 'Entertainment',
    value: 'Entertainment',
  },
  {
    label: 'Food',
    value: 'Food',
  },
  {
    label: 'Religous',
    value: 'Religous',
  },
  {
    label: 'Academic',
    value: 'Academic',
  },
  {
    label: 'Other',
    value: 'Other',
  },
];
const CreateEventScreen=({navigation})=>{
    const [switchState, setSwitch] = useState(false);
    const [categoryState,setCategoryState]=useState('')
    const [eventTitle, setEventTitle] = useState('Event Title');
    const [eventDescription, setDescription] = useState('Event Description');
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
           <RNPickerSelect
            items={categories}
            onValueChange={value => {
            setCategoryState(categoryState)}}
          />
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={switchState ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setSwitch}
            value={switchState}
          />
          <TextInput
                style={styles.textInput}
                onChangeText={setDescription}
                value={eventDescription}
          />
         <Text>Implement Add Flyer Here</Text>
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
