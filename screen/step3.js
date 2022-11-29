import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
  Pressable,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons";

export default function Step3({ navigation }) {
  const [number, onChangeNumber] = React.useState(null);
  const [checked, onChange] = useState(false);

  function onCheckmarkPress() {
    onChange(!checked);
  }
  return (
    <SafeAreaView className="bg-[#FDE5B7]  flex-1">
      <View className="flex-1">
        {/* sliders */}
        <View className="bg-[#F7F5FA] rounded-full m-7 justify-center h-[8px] mb-8 flex-row space-x-3 justify-items-center items-center">
          <Text className="w-16 h-[3px] bg-[#FBC662]"></Text>
          <Text className="w-16 h-[3px] bg-[#FBC662]"></Text>
          <Text className="w-16 h-[3px] bg-[#FBC662]"></Text>
          <Text className="w-16 h-[3px] bg-[#E3E3E3]"></Text>
        </View>

        {/* main title */}
        <View className="w-[200px] mx-auto my-8 mb-12 items-center object-contain h-[100px] ">
          <ImageBackground
            resizeMode="contain"
            className="mx-auto items-center "
            source={require("../assets/backdrop.png")}
          >
            <View className="w-[200px] object-center h-[100px] justify-center items-center ">
              <Text className="font-bold italic ">What're you</Text>
              <Text className="font-bold text-[30px] text-[#F8A80D]">
                Hoping to find?
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View className=" object-center my-5 justify-center items-center ">
          <Text>Honesty helps you and everyone on</Text>
          <Text>find what you're looking for.</Text>
        </View>

        {/* selection section */}
        <View className=" items-center space-y-4 px-12 my-5 ">
          {/* roommates */}
          <TouchableOpacity
            className="w-full bg-white justify-center px-5 hover:border-2 hover:border-coral rounded-full h-9"
            style={[styles.checkboxBase, checked && styles.checkboxChecked]}
          >
            <Text>Roommates</Text>
            {checked && <Ionicons name="checkmark" size={24} color="white" />}
          </TouchableOpacity>

          {/* A relationship */}
          <TouchableOpacity
            className="w-full bg-white justify-center px-5 hover:border-2 hover:border-coral rounded-full h-9"
            style={[styles.checkboxBase, checked && styles.checkboxChecked]}
          >
            <Text>A relationship</Text>
            {checked && <Ionicons name="checkmark" size={24} color="white" />}
          </TouchableOpacity>
          {/* both */}
          <TouchableOpacity
            className="w-full bg-white justify-center px-5 hover:border-2 hover:border-coral rounded-full h-9"
            style={[styles.checkboxBase, checked && styles.checkboxChecked]}
          >
            <Text>Both</Text>
            {checked && <Ionicons name="checkmark" size={24} color="white" />}
          </TouchableOpacity>
        </View>
      </View>

      <View className="bg-white h-28 p-4 flex-row justify-between items-center">
        <View className="justify-center">
          <Text className="font-bold italic ">
            This will show on your profile
          </Text>
          <Text className="font-bold italic ">uless you're unsure.</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Steps4")}
          className=""
        >
          <Image
            className="w-14 h-14 justify-center"
            source={require("../assets/nextt.png")}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  checkboxBase: {},

  checkboxChecked: {
    backgroundColor: "coral",
  },
});
