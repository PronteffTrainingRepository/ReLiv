import React, { useState } from "react";
import { View } from "react-native";
import DatePicker from "react-native-datepicker";

function Date() {
  const [date, setDate] = useState("2020-08-21");
  return (
    <View>
      <DatePicker
        style={{ width: 200 }}
        date={date}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="1947-8-01"
        maxDate="2030-12-31"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: "absolute",
            right: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {
          setDate(date);
        }}
      />
    </View>
  );
}

export default Date;
