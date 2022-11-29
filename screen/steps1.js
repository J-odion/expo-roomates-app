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

export default function Steps1({ navigation }) {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView className="bg-[#D9CCE5]  flex-1">
      <View className="flex-1">
        <View className="bg-[#F7F5FA] rounded-full m-7 justify-center h-[8px] mb-8 flex-row space-x-3 justify-items-center items-center">
          <Text className="w-16 h-[3px] bg-[#AE93C8]"></Text>
          <Text className="w-16 h-[3px] bg-[#E3E3E3]"></Text>
          <Text className="w-16 h-[3px] bg-[#E3E3E3]"></Text>
          <Text className="w-16 h-[3px] bg-[#E3E3E3]"></Text>
        </View>
        <View className="w-[200px] mx-auto my-5 items-center object-contain h-[100px] ">
          <ImageBackground
            resizeMode="contain"
            className="mx-auto items-center "
            source={require("../assets/backdrop.png")}
          >
            <View className="w-[200px] object-center h-[100px] justify-center items-center ">
              <Text className="font-bold italic ">What's your</Text>
              <Text className="font-extrabold text-[30px] text-[#583A73]">
                name?
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View className=" items-center  mb-5">
          <TextInput
            className="h-10 w-[90%] mx-3 rounded-full bg-white  my-3 p-2    "
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Type something"
          />
        </View>
      </View>

      <View className="bg-white h-28 p-4 flex-row justify-between items-center">
        <View className="justify-center">
          <Text className="font-bold italic ">This will be shown </Text>
          <Text className="font-bold italic ">on your profile </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Steps2")}
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
