import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  Switch,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from "react-native-picker-select";
import Spacer from "../components/Spacer";
const categories = [
  {
    label: "Entertainment",
    value: "entertainment",
  },
  {
    label: "Food",
    value: "food",
  },
  {
    label: "Religous",
    value: "religous",
  },
  {
    label: "Academic",
    value: "academic",
  },
  {
    label: "Other",
    value: "other",
  },
];
const CreateEventScreen = ({ navigation }) => {
  const [switchState, setSwitch] = useState(false);
  const [categoryState, setCategoryState] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setDescription] = useState("");
  //states for Start/End times
  const [flag, setFlag] = useState("");
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventEndTime, setEventEndTime] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = (flag) => {
    setDatePickerVisibility(true);
    setFlag(flag);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleEndConfirm = (date) => {
    setEventEndTime(date);
    hideDatePicker();
  };
  const handleStartConfirm = (date) => {
    if (flag === "start") {
      setEventStartTime(date);
      setFlag("");
    }
    if (flag === "end") {
      setEventEndTime(date);
      setFlag("");
    }
    hideDatePicker();
  };
  const dateParser = (date) => {
    if (!date) return;
    let dateArray = date.split(" ");
    let time = dateArray[4];
    time = time.split(":");
    return (
      dateArray[0] +
      " " +
      dateArray[1] +
      " " +
      dateArray[2] +
      " " +
      dateArray[3] +
      " " +
      time[0] +
      ":" +
      time[1]
    );
  };

  return (
    <View>
      <Spacer />
      <Text style={styles.textTitle}>Create an Event</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={setEventTitle}
        value={eventTitle}
        placeholder={"Event Title"}
      />
      <Spacer />
      <Text
        onPress={(date) => showDatePicker("start", date)}
        style={styles.clockText}
      >
        Start Time: {dateParser(eventStartTime.toString())}
      </Text>
      <Text
        onPress={(date) => showDatePicker("end", date)}
        style={styles.clockText}
      >
        End Time: {dateParser(eventEndTime.toString())}
      </Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleStartConfirm}
        onCancel={hideDatePicker}
      />
      <Spacer />
      <Text style={styles.list}>
        Select an Event Category:
        <RNPickerSelect
          items={categories}
          onValueChange={(value) => {
            setCategoryState(categoryState);
          }}
        />
      </Text>
      <Spacer />
      <Text style={styles.list}>
        Private Event: 
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={switchState ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setSwitch}
          value={switchState}
        />
      </Text>
      <Spacer />
      <TextInput
        style={styles.textInput}
        onChangeText={setDescription}
        value={eventDescription}
        placeholder={"Event Description"}
      />
      <Spacer />
      <Text style={styles.list}> Add Flyer: </Text>
      
      <Button
        title="Don't have a flyer? create one here!"
        onPress={() => navigation.navigate("CreateFlyer")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    borderColor: "gray",
    borderWidth: 4,
    paddingLeft: 10,
    fontSize: 20,
  },
  textTitle: {
    textAlign: "center",
    letterSpacing: 1,
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 35,
    fontWeight:"600"
  },
  clockText: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: "500",
    paddingLeft: 5,
  },
  list: {
    fontSize: 20,
    fontWeight: "500",
    paddingLeft: 5,
  },
});

export default CreateEventScreen;
