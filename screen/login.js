import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function Login({ navigation }) {
  return (
    <ImageBackground
      className="flex-1 items-center justify-center "
      source={require("../assets/loginBg.png")}
    >
      <View className="flex-0.5 align-bottom  w-[100%] h-[50%] items-center justify-center "></View>

      <>
        <ImageBackground
          source={require("../assets/blured.png")}
          className="flex-1 w-[100%] rounded-t-[14px] opacity-100"
        >
          <View className="flex-0.5 align-bottom w-[100%] h-[50%] items-center justify-top pt-5 ">
            <Text className="font-bold text-white text-[28px]">
              {" "}
              Sign in to Yolo
            </Text>

            {/* field 1 */}
            <View className="m-5 border border-white px-2 rounded-[10px] w-[80%]">
              <View className="w-[80px] h-[3px] bg-[#686667] opacity-50 bg-cover top-[-2px]"></View>
              <Text className=" w-[100%] top-[-13px] font-bold text-white left-[-94px] text-center">
                Phone number
              </Text>
              <TextInput
                value="+1 888-888-8888"
                keyboardType="numeric"
                className=" w-[100%] "
              />
            </View>

            {/* password */}
            <View className="m-5 border border-white px-2 rounded-[10px] w-[80%]">
              <View className="w-[80px] h-[3px] bg-[#686667] opacity-50 bg-cover top-[-2px]"></View>
              <Text className="w-[100%] top-[-13px] font-bold text-white left-[-94px] text-center">
                Password
              </Text>

              <TextInput value="my password" className=" w-[100%] " />
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("Steps1")}
              className="m-5 w-[140px] bg-[#6F83E9] p-4 rounded-full"
            >
              <Text className=" w-[100%] text-white text-center"> Sign In</Text>
            </TouchableOpacity>

            <View className="flex-row">
              <Text className="text-white">Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text className="text-[#6F83E9] font-bold ml-4">Sign up</Text>
              </TouchableOpacity>
            </View>
            {/* end of session */}
          </View>
        </ImageBackground>
      </>
    </ImageBackground>
  );
}
