import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function PickmePremium({ navigation }) {
  return (
    <SafeAreaView>
      {/* top section */}
      <View className="rounded-bl-[70px] bg-[#DB5461] h-[220px]">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="d-flex top-[20px] pl-[10px] flex-row items-center"
        >
          <Ionicons
            className="text-white"
            name="chevron-back"
            size={20}
            color="white"
          />
          <Text className="text-white">Back</Text>
        </TouchableOpacity>

        <View className="m-[10px]">
          <Text className="font-extrabold text-[40px] text-right text-[#0C19AF]">
            PikyMe
          </Text>
          <Text className="font-extrabold text-[40px] text-right text-[#0C19AF]">
            Premium
          </Text>
        </View>
      </View>

      {/* cards section*/}
      <View className="top-[-70px] justify-center space-x-3 flex-row items-center">
        {/* first card */}
        <TouchableOpacity>
          <View className="bg-[#d1cfcf] items-center align-middle justify-center shadow-md  w-[92px] h-[120px] rounded-lg">
            <Text className="">1 month</Text>
            <Text className="font-black text-[20px]">$49.9</Text>
          </View>
        </TouchableOpacity>
        {/* second */}
        <TouchableOpacity>
          <View className="bg-[#d1cfcf] items-center align-middle justify-center shadow-stone-600 drop-shadow-lg w-[92px] h-[120px] rounded-lg">
            <Text className="">3 months</Text>
            <Text className="font-black text-[20px] line-through">$159.9</Text>
            <Text className="font-black text-[20px] text-[#67042a]">$99.9</Text>
          </View>
        </TouchableOpacity>
        {/* third */}
        <TouchableOpacity>
          <View className="bg-[#d1cfcf] items-center align-middle justify-center shadow-stone-600 drop-shadow-lg w-[92px] h-[120px] rounded-lg">
            <Text className="">6 months</Text>
            <Text className="font-black text-[20px]  line-through">$299.9</Text>
            <Text className="font-black text-[20px] text-[#67042a]">
              $159.9
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* other section */}
      {/* unlimited swipe */}
      <View className="mt-[-50px] px-5">
        <Text className="font-normal text-[20px] py-2 text-[rgba(0,0,0, 0.8)]">
          - Unlimited Swipe
        </Text>
        <Text className="font-normal text-[20px] py-2 text-[rgba(0,0,0, 0.8)]">
          - Unlimited Swipe
        </Text>
      </View>

      {/* png and button */}
      <View className="justify-center mt-4 align-middle items-center">
        <Image
          className="w-[200px] left-[25px] h-[180px]"
          source={require("../assets/cloud.png")}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Steps")}
          className="bg-[#0C19AF] px-5 rounded-full"
        >
          <Text className="text-white py-2 font-extrabold">
            Go PikyMe Premium
          </Text>
        </TouchableOpacity>

        {/* terms section */}
        <View className="flex-row space-x-2 mt-8">
          <Text>Privacy</Text>
          <Text className="border-x px-2">Privacy</Text>
          <Text>Privacy</Text>
        </View>
        <View className="mt-3 px-2">
          <Text className="text-[#000] opacity-60">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            magni temporibus veniam obcaecati atque praesentium nobis quisquam
            reprehenderit sed ipsum. Recusandae ad voluptas saepe!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
