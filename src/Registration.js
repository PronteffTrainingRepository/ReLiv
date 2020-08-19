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
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
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
      image: null,
      show: true,
    };
  }
  ShowHideComponent = () => {
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };
  functionCombined() {
    this._pickImage();

    this.ShowHideComponent();
  }

  render() {
    let { image } = this.state;
    const keyboardVerticalOffset =
      Platform.OS === "android" ? -ht * 0.2 : -ht * 0.1;
    return (
      // Main View Starts
      <DismissKeyboard>
        <KeyboardAvoidingView
          keyboardVerticalOffset={keyboardVerticalOffset}
          behavior="position"
          style={styles.container}
        >
          <View style={styles.container}>
            <View style={{ marginTop: ht * 0.07, marginBottom: ht * 0.01 }}>
              <Image
                style={styles.logo}
                source={require("../assets/tag.jpg")}
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
                    fontSize: ht * 0.03,
                    paddingLeft: wd * 0.06,
                    opacity: 0.9,
                  }}
                >
                  Registration
                </Text>
              </View>
              {/* Header Of Form Ends */}

              {/* Image Picker Section Starts */}
              <View style={{ flexDirection: "row" }}>
                <View style={{ marginLeft: wd * 0.048, marginTop: ht * 0.03 }}>
                  <Text
                    style={{
                      fontStyle: "italic",
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
                        fontStyle: "italic",
                        fontWeight: "bold",
                        opacity: 0.5,
                        fontSize: ht * 0.02,
                      }}
                    >
                      selfie/ upload){" "}
                    </Text>
                    <Feather
                      style={{ paddingLeft: wd * 0.02, opacity: 0.5 }}
                      name="camera"
                      size={24}
                      color="black"
                    />
                    <Entypo
                      style={{ paddingLeft: wd * 0.02, opacity: 0.5 }}
                      name="images"
                      size={23}
                      color="black"
                    />
                  </View>
                </View>
                <View style={{ width: wd * 0.8 }}>
                  {this.state.show ? (
                    <View style={{ top: -ht * 0.04, left: wd * 0.1 }}>
                      <TouchableOpacity onPress={() => this.functionCombined()}>
                        <Image
                          source={require("../assets/Profileicon.png")}
                          style={{
                            width: wd * 0.3,
                            height: ht * 0.16,
                            borderRadius: 100,
                            backgroundColor: "lightgrey",
                          }}
                        />
                      </TouchableOpacity>
                      {/* <Entypo
                    name="camera"
                    size={24}
                    color="blue"
                    style={{
                      position: "absolute",
                      // left: 100,
                      // top: 120,
                    }}
                  /> */}
                    </View>
                  ) : null}
                  {image && (
                    <View style={{ top: -ht * 0.04, left: wd * 0.1 }}>
                      <TouchableOpacity onPress={this._pickImage}>
                        <Image
                          source={{ uri: image }}
                          style={{
                            width: wd * 0.3,
                            height: ht * 0.16,
                            borderRadius: 100,
                          }}
                        />
                      </TouchableOpacity>
                      {/* <Entypo
                    name="camera"
                    size={24}
                    color="blue"
                    style={{
                      position: "absolute",
                      // left: 112,
                      // top: 120,
                    }}
                  /> */}
                    </View>
                  )}
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
                    borderRadius: 100,
                    width: wd * 0.127,
                    height: ht * 0.06,
                    borderColor: "#40C397",
                    //borderWidth: 1,
                    position: "absolute",
                    left: wd * 0.4,
                    bottom: -ht * 0.03,
                    justifyContent: "center",
                  }}
                >
                  <AntDesign
                    style={{ alignSelf: "center" }}
                    name="arrowright"
                    size={32}
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
    opacity: 0.7,
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
    opacity: 0.7,
  },
  form: {
    backgroundColor: "white",
    borderRadius: 15,
    width: wd * 0.92,
    height: ht * 0.75,
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
