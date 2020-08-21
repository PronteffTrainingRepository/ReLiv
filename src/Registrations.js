import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StatusBar,
  Button,
  Platform,
  Picker,
} from "react-native";
import { WebView } from "react-native-webview";
import MapView from "react-native-maps";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import DatePicker from "react-native-datepicker";
const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

function Registrations() {
  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  const keyboardVerticalOffset =
    Platform.OS === "android" ? -ht * 0.25 : -ht * 0.1;

  const [image, setImage] = useState("null");
  const [date, setDate] = useState("1947-08-15");
  const [value, onChangeText] = React.useState();
  const [selectedValue, setSelectedValue] = useState();
  const [selecteValue, setSelecteValue] = useState();
  useEffect(() => {
    getPermissionAsync();
  }, []);

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    // Main View Starts
    <DismissKeyboard>
      <KeyboardAvoidingView
        keyboardVerticalOffset={keyboardVerticalOffset}
        behavior="position"
        style={styles.container}
      >
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <View style={{ marginTop: ht * 0.07, marginBottom: ht * 0.01 }}>
            <Image
              style={styles.logo}
              source={require("../assets/reliv.jpg")}
            />
          </View>
          {/* From starts */}
          <View style={styles.form}>
            {/*Header of Form Starts  */}
            <View
              style={{
                backgroundColor: "#3377CA",
                borderRadius: 15,
                borderBottomEndRadius: 0,
                borderBottomLeftRadius: 0,
                height: ht * 0.06,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: ht * 0.0273,
                  paddingLeft: wd * 0.038,
                  paddingTop: wd * 0.025,
                  opacity: 0.76,
                }}
              >
                Registration
              </Text>
            </View>
            {/* Header Of Form Ends */}

            {/* Image Picker Section Starts */}
            <View style={{ flexDirection: "row", height: ht * 0.16 }}>
              <View style={{ marginLeft: wd * 0.038, marginTop: ht * 0.045 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    opacity: 0.5,
                    fontSize: ht * 0.02,
                  }}
                >
                  Customer pro pic
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      opacity: 0.5,
                      fontSize: ht * 0.02,
                    }}
                  >
                    selfie/ upload){" "}
                  </Text>
                  <Feather
                    style={{ paddingLeft: wd * 0.02, opacity: 0.3 }}
                    name="camera"
                    size={22}
                    color="black"
                  />
                  <Entypo
                    style={{ paddingLeft: wd * 0.02, opacity: 0.3 }}
                    name="images"
                    size={22}
                    color="black"
                  />
                </View>
              </View>

              <View style={{ width: wd * 0.8 }}>
                <View
                  style={{
                    top: -ht * 0.032,
                    left: wd * 0.12,
                    width: wd * 0.3,
                    height: ht * 0.16,
                    borderRadius: ht * 0.1,
                    backgroundColor: "lightgrey",
                    borderColor: "white",
                  }}
                >
                  <TouchableOpacity onPress={_pickImage}>
                    {image === "null" ? (
                      <Image
                        source={require("../assets/Profileicon.png")}
                        style={{
                          width: wd * 0.3,
                          height: ht * 0.16,
                          borderRadius: ht * 0.1,
                          backgroundColor: "lightgrey",
                          borderColor: "white",
                          borderWidth: 3,
                        }}
                      />
                    ) : (
                      <Image
                        source={{ uri: image }}
                        style={{
                          width: wd * 0.3,
                          height: ht * 0.16,
                          borderRadius: ht * 0.1,
                        }}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* Image Picker Section Ends */}

            {/* Form data Starts */}
            <View style={{ top: -ht * 0.03 }}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="black"
              />
              <DatePicker
                style={{
                  width: wd * 0.84,
                  height: ht * 0.05,
                  marginTop: ht * 0.008,
                  marginBottom: ht * 0.008,
                  marginLeft: ht * 0.02,
                }}
                date={date}
                mode="date"
                //format="DD-MM-YYYY"
                minDate="1947-8-01"
                maxDate="2020-12-31"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateText: {
                    opacity: 1,
                    fontSize: ht * 0.02,
                    fontWeight: "bold",
                  },
                  dateIcon: {
                    position: "absolute",
                    right: 0,
                    top: 4,
                    marginLeft: 80,
                  },
                  dateInput: {
                    borderRadius: 5,
                    borderWidth: 0.5,
                    borderColor: "grey",
                    opacity: 0.5,
                    paddingRight: wd * 0.57,
                  },
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {
                  setDate(date);
                }}
              />
              <View style={styles.drop}>
                <Picker
                  selectedValue={selectedValue}
                  style={{
                    height: ht * 0.05,
                    width: wd * 0.85,
                    opacity: 0.8,
                  }}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                  }
                >
                  <Picker.Item label="Gender" />

                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                  <Picker.Item label="Others" value="Others" />
                </Picker>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Occupation"
                placeholderTextColor="black"
              />
              <TextInput
                style={styles.input}
                placeholder="Mail id:"
                placeholderTextColor="black"
              />
              <View style={styles.drop}>
                <Picker
                  selecteValue={selecteValue}
                  style={{
                    height: ht * 0.05,
                    width: wd * 0.85,
                    opacity: 0.8,
                  }}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelecteValue(itemValue)
                  }
                >
                  <Picker.Item label="Blood Group" />
                  <Picker.Item label="-A" value="–A" />
                  <Picker.Item label="B" value="B" />
                  <Picker.Item label="AB" value="AB" />
                  <Picker.Item label="O" value="O" />
                </Picker>
              </View>
              <TextInput
                style={styles.address}
                placeholder="Address"
                placeholderTextColor="black"
              />
              <TextInput
                style={styles.input}
                placeholder="Location"
                placeholderTextColor="black"
              />
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15226.40924674226!2d78.37534265712857!3d17.430862731302184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93fd7f97174f%3A0xfc5d73a7d008d349!2sSilpa%20Gram%20Craft%20Village%2C%20HITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1598016328814!5m2!1sen!2sin"
                width="600"
                height="450"
              ></iframe> */}
              <WebView
                originWhitelist={["*"]}
                source={{ html: "<iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15226.40924674226!2d78.37534265712857!3d17.430862731302184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93fd7f97174f%3A0xfc5d73a7d008d349!2sSilpa%20Gram%20Craft%20Village%2C%20HITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1598016328814!5m2!1sen!2sin"
                width="600"
                height="450"
              ></iframe>" }}
              />
            </View>
            {/* From data Ends */}
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#40C397",
                  borderRadius: ht * 0.8,
                  width: wd * 0.12,
                  height: ht * 0.06,
                  borderColor: "#40C397",
                  //borderWidth: 1,
                  position: "absolute",
                  left: wd * 0.4,
                  bottom: -ht * 0.035,
                  justifyContent: "center",
                }}
              >
                <AntDesign
                  style={{ alignSelf: "center" }}
                  name="arrowright"
                  size={30}
                  color="white"
                />
              </View>
            </TouchableOpacity>
          </View>
          {/* Form Ends */}
        </View>
        {/* // Main View Ends */}
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
}

export default Registrations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1853",
    alignItems: "center",
    justifyContent: "center",
    height: ht * 2,
  },
  input: {
    borderColor: "grey",
    borderWidth: 0.5,
    width: wd * 0.84,
    height: ht * 0.05,
    marginTop: ht * 0.008,
    marginBottom: ht * 0.008,
    marginLeft: ht * 0.02,
    paddingLeft: wd * 0.025,
    borderRadius: 5,
    opacity: 0.45,
    fontSize: ht * 0.02,
    fontWeight: "bold",
  },
  drop: {
    borderColor: "grey",
    borderWidth: 0.5,
    width: wd * 0.84,
    height: ht * 0.05,
    marginTop: ht * 0.008,
    marginBottom: ht * 0.008,
    marginLeft: ht * 0.02,
    paddingLeft: -wd * 0.02,
    borderRadius: 5,
    opacity: 0.6,
    fontWeight: "bold",
    fontSize: ht * 0.02,
  },
  address: {
    borderColor: "grey",
    borderWidth: 0.5,
    width: wd * 0.84,
    height: ht * 0.07,
    paddingTop: ht * 0.008,
    paddingBottom: ht * 0.008,
    paddingLeft: wd * 0.04,
    marginLeft: ht * 0.02,
    paddingLeft: wd * 0.025,
    borderRadius: 5,
    opacity: 0.45,
    fontSize: ht * 0.02,
    fontWeight: "bold",
  },
  form: {
    backgroundColor: "white",
    borderRadius: 15,
    width: wd * 0.92,
    height: ht * 0.76,
    marginBottom: ht * 0.09,
    borderBottomEndRadius: 5,
    borderBottomLeftRadius: 5,
  },
  logo: {
    width: wd * 0.25,
    height: wd * 0.25,
    borderRadius: 10,
    alignSelf: "center",
  },
});
