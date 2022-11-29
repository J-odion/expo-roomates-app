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

export default function Step4({ navigation }) {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView className="bg-[#FFDCD0]  flex-1">
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
              <Text className="font-bold text-[30px] ">interests</Text>
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
            <TouchableOpacity className=" h-14 w-1/5 active:border-2 align-middle justify-center rounded-full items-center bg-white p-2">
              <Image source={require("../assets/tennis.png")} />
              <Text className="italic">Tennis</Text>
            </TouchableOpacity>

            {/* pingpong */}
            <TouchableOpacity className="h-14 w-1/5 active:border-2  align-middle justify-center rounded-full items-center bg-white p-2">
              <Image source={require("../assets/pingpong.png")} />
              <Text className="italic">PingPong</Text>
            </TouchableOpacity>

            {/* pingpong */}
            <TouchableOpacity className="h-14 w-1/5 active:border-2  align-middle justify-center rounded-full items-center bg-white p-2">
              <Image source={require("../assets/badminton.png")} />
              <Text className="italic">Squash</Text>
            </TouchableOpacity>
          </View>
          {/* line 2 */}
          <View className="flex-row space-x-3">
            <TouchableOpacity className=" h-14 w-1/5 active:border-2 align-middle justify-center rounded-full items-center bg-white p-2">
              <Image source={require("../assets/bowing.png")} />
              <Text className="italic">Bowling</Text>
            </TouchableOpacity>

            {/* pingpong */}
            <TouchableOpacity className="h-14 w-1/5 active:border-2  align-middle justify-center rounded-full items-center bg-white p-2">
              <Image source={require("../assets/party.png")} />
              <Text className="italic">Party</Text>
            </TouchableOpacity>

            {/* pingpong */}
            <TouchableOpacity className="h-14 w-1/5 active:border-2  align-middle justify-center rounded-full items-center bg-white p-2">
              <Image source={require("../assets/football.png")} />
              <Text className="italic">Football</Text>
            </TouchableOpacity>
          </View>

          {/* line 3 */}
          <View className="flex-row space-x-3">
            <TouchableOpacity className=" h-14 w-1/5 active:border-2 align-middle justify-center rounded-full items-center bg-white p-2">
              <Image source={require("../assets/8ball.png")} />
              <Text className="italic">8 Ball</Text>
            </TouchableOpacity>

            {/* pingpong */}
            <TouchableOpacity className="h-14 w-1/5 active:border-2  align-middle justify-center rounded-full items-center bg-white p-2">
              <Image source={require("../assets/cat.png")} />
              <Text className="italic">Cat</Text>
            </TouchableOpacity>

            {/* pingpong */}
            <TouchableOpacity className="h-14 w-1/5 active:border-2  align-middle justify-center rounded-full items-center bg-white p-2">
              <Image source={require("../assets/gaming.png")} />
              <Text className="italic">Gaming</Text>
            </TouchableOpacity>
          </View>

          {/* line 4 */}
          <View className="flex-row space-x-3">
            <TouchableOpacity className=" h-14 w-1/4 active:border-2 align-middle justify-center rounded-full items-center bg-white p-2">
              <Image source={require("../assets/photogrphy.png")} />
              <Text className="italic">Photography</Text>
            </TouchableOpacity>

            {/* pingpong */}
            <TouchableOpacity className="h-14 w-1/5 active:border-2  align-middle justify-center rounded-full items-center bg-white p-2">
              <Image source={require("../assets/cricket.png")} />
              <Text className="italic">Cricket</Text>
            </TouchableOpacity>

            {/* pingpong */}
            <TouchableOpacity className="h-14 w-1/5 active:border-2  align-middle justify-center rounded-full items-center bg-white p-2">
              <Image source={require("../assets/die.png")} />
              <Text className="italic">Die</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="bg-white h-28 p-4 flex-row justify-between items-center">
        <View className="justify-center">
          <Text className="font-bold italic ">4/5 selected</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Steps5")}
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
