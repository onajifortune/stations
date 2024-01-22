// CustomHeader.js
import React from "react";
import { View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const CustomHeader = () => {
  const navigation = useNavigation();
  const goToHome = () => {
    // Navigate to the home screen or the desired screen
    navigation.navigate("Stations of the Cross");
  };

  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginRight: 8 }}
    >
      <Ionicons
        name="home"
        size={25}
        color="black"
        onPress={goToHome}
        style={{ padding: 15 }}
      />
    </View>
  );
};

export default CustomHeader;
