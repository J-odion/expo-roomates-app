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
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView className="bg-[#95ACFD]  flex-1">
      <ImageBackground
        className="flex-1"
        source={require("../assets/haileybg.png")}
      >
        <View className="flex-1">
          <View className=" object-center space-x-2 px-2   flex-row mt-10 justify-center items-center ">
            <View className="p-2 rounded-full bg-[#beb1b1]">
              <Ionicons name="notifications-outline" size={24} color="black" />
            </View>
            <View className="bg-[#beb1b1] space-x-2 flex-row rounded-full justify-center align-middle items-center">
              {/* button */}
              <TouchableOpacity className="bg-[#313ef6] py-2 px-3 rounded-full">
                <Text className="italic text-white ">Relationship</Text>
              </TouchableOpacity>

              {/* button 2 */}
              <TouchableOpacity className="active:bg-[#313ef6] py-2 px-3 rounded-full">
                <Text className="italic text-white ">Roommates</Text>
              </TouchableOpacity>
            </View>
            <View className="p-2 rounded-full bg-[#beb1b1]">
              <AntDesign name="filter" size={24} color="black" />
            </View>
          </View>

          {/* bottom */}
          <View>
            <ImageBackground
              resizeMode="center"
              className=" object-cover items-center justify-center"
              source={require("../assets/pickmebg.png")}
            >
              <View classNam="">
                <Text className=" font-bold">Pick me</Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </ImageBackground>

      {/* bottom navigation */}
      <View className="bg-white h-28 p-4 flex-row justify-between items-center">
        <View className="justify-center">
          <Text className="font-bold italic ">4/5 selected</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Steps7")}
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
