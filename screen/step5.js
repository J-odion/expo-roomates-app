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

export default function Step5({ navigation }) {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView className="bg-[#56CCF2]  flex-1">
      <View className="flex-1">
        <View className="bg-[#F7F5FA] rounded-full m-7 justify-center h-[8px] mb-8 flex-row space-x-3 justify-items-center items-center">
          <Text className="w-16 h-[3px] bg-[#FF9674]"></Text>
          <Text className="w-16 h-[3px] bg-[#FF9674]"></Text>
          <Text className="w-16 h-[3px] bg-[#FF9674]"></Text>
          <Text className="w-16 h-[3px] bg-[#FF9674]"></Text>
        </View>
        <View className="w-[200px] mx-auto my-5 items-center object-contain h-[100px] ">
          <ImageBackground
            resizeMode="contain"
            className="mx-auto items-center "
            source={require("../assets/backdrop.png")}
          >
            <View className="w-[200px] object-center h-[100px] justify-center items-center ">
              <Text className="font-bold italic ">Your</Text>
              <Text className="font-bold text-[30px] ">Roommates</Text>
            </View>
          </ImageBackground>
        </View>
        <View className=" object-center my-5 justify-center items-center ">
          <Text className="italic">
            Pick up to things you love. It'll help you
          </Text>
          <Text className="italic">match with people who love them too.</Text>
        </View>
        <View className=" items-center space-y-3 mb-5">
          <View className="flex-row space-x-3">
            <TouchableOpacity className="  w-1/4 active:border-2 align-middle justify-center rounded-full items-center bg-white p-2">
              <Text className="italic">No Smoking</Text>
            </TouchableOpacity>

            {/* pingpong */}
            <TouchableOpacity className=" w-1/4 active:border-2  align-middle justify-center rounded-full items-center bg-white p-2">
              <Text className="italic">No Cook</Text>
            </TouchableOpacity>

            {/* pingpong */}
            <TouchableOpacity className=" w-1/4 active:border-2  align-middle justify-center rounded-full items-center bg-white p-2">
              <Text className="italic">No Party</Text>
            </TouchableOpacity>
          </View>
          {/* line 2 */}
          <View className="flex-row space-x-3">
            <TouchableOpacity className="  w-1/4 active:border-2 align-middle justify-center rounded-full items-center bg-white p-2">
              <Text className="italic">Student Only</Text>
            </TouchableOpacity>

            {/* pingpong */}
            <TouchableOpacity className=" w-1/4 active:border-2  align-middle justify-center rounded-full items-center bg-white p-2">
              <Text className="italic">No Pets</Text>
            </TouchableOpacity>

            {/* pingpong */}
            {/* <TouchableOpacity className=" w-1/4 active:border-2  align-middle justify-center rounded-full items-center bg-white p-2">
              <Text className="italic">Football</Text>
            </TouchableOpacity> */}
          </View>

          {/* line 3 */}
          <View className="flex-row space-x-3">
            <TouchableOpacity className="  w-1/4 active:border-2 align-middle justify-center rounded-full items-center bg-white p-2">
              <Text className="italic">Female Only</Text>
            </TouchableOpacity>

            {/* pingpong */}
            <TouchableOpacity className=" w-1/4 active:border-2  align-middle justify-center rounded-full items-center bg-white p-2">
              <Text className="italic">Male Only</Text>
            </TouchableOpacity>

            {/* pingpong */}
            {/* <TouchableOpacity className=" w-1/4 active:border-2  align-middle justify-center rounded-full items-center bg-white p-2">
              <Text className="italic">Gaming</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>

      <View className="bg-white h-28 p-4 flex-row justify-between items-center">
        <View className="justify-center">
          <Text className="font-bold italic ">4/5 selected</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Steps6")}
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
