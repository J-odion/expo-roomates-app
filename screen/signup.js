import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function SignUp({ navigation }) {
  return (
    <ImageBackground
      className="flex-1 items-center justify-center "
      source={require("../assets/signupbg.png")}
    >
      <View className="flex-1 align-bottom  w-[100%] h-[50%] items-center justify-center "></View>

      <>
        <ImageBackground
          source={require("../assets/blured.png")}
          className="flex-0.4 rounded-t-[14px] w-[100%]"
        >
          <View className="flex-0.4 align-bottom rounded-t-[14px]  w-[100%] h-[38%] items-center justify-top pt-5 ">
            <Text className="font-bold  text-white text-[28px]">
              Sign up to Yolo
            </Text>
            <Text className=" text-white text-[18px]">
              Pick up a username for your account
            </Text>

            {/* password */}
            <View className="m-5 border border-white px-2 rounded-[10px] w-[80%]">
              <View className="w-[80px] h-[3px] bg-[#686667] opacity-50 bg-cover top-[-2px]"></View>
              <Text className="w-[100%] top-[-13px] font-bold text-white left-[-94px] text-center">
                Password
              </Text>

              <TextInput value="my password" className=" w-[100%] " />
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("Pickme")}
              className="m-2 w-[100px] bg-[#6F83E9] p-4 rounded-[10px]"
            >
              <Text className=" w-[100%] text-white text-center"> Next</Text>
            </TouchableOpacity>

            {/* end of session */}
          </View>
        </ImageBackground>
      </>
    </ImageBackground>
  );
}
