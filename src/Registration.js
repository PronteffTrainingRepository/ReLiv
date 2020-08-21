import React, { Component } from "react";
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
  Picker,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
// import DateTimePicker from "@react-native-community/datetimepicker";
const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "null",
      // dates: new date(),
      // mode: "",
      // show: "",
      // selectedValue:"java",
    };
    //const [selectedValue, setSelectedValue] = useState("java");
    // const onChange = (event, selectedDate) => {
    //   const currentDate = selectedDate || date;
    //   setShow(Platform.OS === "ios");
    //   setDate(currentDate);
    // };

    // const showMode = (currentMode) => {
    //   setShow(true);
    //   setMode(currentMode);
    // };

    // const showDatepicker = () => {
    //   showMode("date");
    // };

    // const showTimepicker = () => {
    //   showMode("time");
    // };
  }

  render() {
    let { image } = this.state;
    let { selectedValue } = this.state;

    const keyboardVerticalOffset =
      Platform.OS === "android" ? -ht * 0.25 : -ht * 0.1;
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
                    <TouchableOpacity onPress={this._pickImage}>
                      {this.state.image === "null" ? (
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
                <TextInput
                  style={styles.input}
                  placeholder="DOB:"
                  placeholderTextColor="black"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Gender"
                  placeholderTextColor="black"
                />
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
                <TextInput
                  style={styles.input}
                  placeholder="Blood group:"
                  placeholderTextColor="black"
                />
                {/* <Picker
                  selectedValue={selectedValue}
                  style={styles.input}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState(itemValue)
                  }
                >
                  <Picker.Item label="Java" value="java" />
                  <Picker.Item label="JavaScript" value="js" />
                </Picker> */}
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
  componentDidMount() {
    this.getPermissionAsync();
  }

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
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
}

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
    paddingLeft: wd * 0.02,
    borderRadius: 5,
    opacity: 0.45,
    fontSize: ht * 0.02,
    fontWeight: "bold",
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
    paddingLeft: wd * 0.02,
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

export default Registration;
