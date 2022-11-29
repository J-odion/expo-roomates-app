import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function Step7({ navigation }) {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView className="bg-[#95ACFD]  flex-1">
      <View className="flex-1">
        <View className="bg-[#F7F5FA] rounded-full m-7 justify-center h-[8px] mb-8 flex-row space-x-3 justify-items-center items-center">
          <Text className="w-16 h-[3px] bg-[#FF9674]"></Text>
          <Text className="w-16 h-[3px] bg-[#FF9674]"></Text>
          <Text className="w-16 h-[3px] bg-[#FF9674]"></Text>
          <Text className="w-16 h-[3px] bg-[#FF9674]"></Text>
        </View>
        <View className="w-[200px] mx-auto flex-[0.3] my-5 items-center object-contain h-[100px] ">
          <ImageBackground
            resizeMode="contain"
            className="mx-auto items-center "
            source={require("../assets/backdrop.png")}
          >
            <View className="w-[200px] object-center h-[100px] justify-center items-center ">
              <Text className="font-bold italic ">Your</Text>
              <Text className="font-bold text-[30px] text-[#1A30F1]">
                other images
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View className="items-center flex-[0.3] space-y-3 mb-5">
          <View className="flex-row space-x-3">
            <TouchableOpacity className=" h-14 w-1/6 active:border-2 align-middle justify-center rounded-[16px] items-center bg-white p-2">
              <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>

            {/* pingpong */}
            <TouchableOpacity className="h-14 w-1/6 active:border-2  align-middle justify-center rounded-[16px] items-center bg-white p-2">
              <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>

            {/* pingpong */}
            <TouchableOpacity className="h-14 w-1/6 active:border-2  align-middle justify-center rounded-[16px] items-center bg-white p-2">
              <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>

            {/* pingpong */}
            <TouchableOpacity className="h-14 w-1/6 active:border-2  align-middle justify-center rounded-[16px] items-center bg-white p-2">
              <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>
          </View>
          {/* line 2 */}
          <View className="flex-row space-x-3">
            <TouchableOpacity className=" h-14 w-1/6 active:border-2 align-middle justify-center rounded-[16px] l items-center bg-white p-2">
              <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>

            {/* pingpong */}
            <TouchableOpacity className="h-14 w-1/6 active:border-2  align-middle justify-center rounded-[16px] items-center bg-white p-2">
              <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>

            {/* pingpong */}
            <TouchableOpacity className="h-14 w-1/6 active:border-2  align-middle justify-center rounded-[16px] items-center bg-white p-2">
              <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>

            {/* pingpong */}
            <TouchableOpacity className="h-14 w-1/6 active:border-2  align-middle justify-center rounded-[16px] items-center bg-white p-2">
              <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View className=" object-center mt-10 justify-center items-center ">
          <Text className="italic text-white ">
            Your Images can only be viewd by your friends
          </Text>
        </View>
      </View>

      <View className="bg-white h-28 p-4 flex-row justify-between items-center">
        <View className="justify-center">
          <Text className="font-bold italic ">4/5 selected</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
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
