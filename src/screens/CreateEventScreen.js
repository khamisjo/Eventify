import React ,{useState}from 'react';
import {View, StyleSheet,Text,Button,TextInput,Switch} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from 'react-native-picker-select';

const categories = [
  {
    label: 'Entertainment',
    value: 'entertainment',
  },
  {
    label: 'Food',
    value: 'food',
  },
  {
    label: 'Religous',
    value: 'religous',
  },
  {
    label: 'Academic',
    value: 'academic',
  },
  {
    label: 'Other',
    value: 'other',
  },
];
const CreateEventScreen=({navigation})=>{
    const [switchState, setSwitch] = useState(false);
    const [categoryState,setCategoryState]=useState('')
    const [eventTitle, setEventTitle] = useState('');
    const [eventDescription, setDescription] = useState('');
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
        <View header="none">
            <TextInput
                style={styles.textInput}
                onChangeText={setEventTitle}
                value={eventTitle}
                placeholder={"Event Title"}
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
                placeholder={"Event Description"}
          />
         <Button
           title="Create Flyer"
           onPress={()=>navigation.navigate('CreateFlyer')}
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
