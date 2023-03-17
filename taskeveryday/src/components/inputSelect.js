import React, { useRef, useState } from "react";
import { View, Picker, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
export default function InputSelect() {
  const pickerRef = useRef()
  const open = pickerRef.current.focus();
  const close = pickerRef.current.blur();
  return (
    <View>
      <Picker
        ref={pickerRef}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
        setSelectedLanguage(itemValue)
      }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});
