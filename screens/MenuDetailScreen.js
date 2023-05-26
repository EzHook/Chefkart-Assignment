import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Divider, Icon } from "@rneui/themed";
import { Image } from "react-native";

const MenuDetailScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ScrollView className="my-5 p-5">
        <View className="space-x-2 mx-2 flex-row items-center">
          <Text className="text-gray-800 text-4xl font-extrabold flex-row">
            Masala Muglai
          </Text>
          <Text
            style={{
              backgroundColor: "green",
              color: "white",
              padding: 5,
              fontSize: 12,
            }}
            className="rounded-lg"
          >
            4.2*
          </Text>
        </View>
        <View className="p-3 mb-5">
          <Text className="text-gray-400 p-1">
            This is just a description about the masala mulgai and this is it
          </Text>
          <View className="flex-row justify-between my-1 space-x-3">
            <Icon type="material" name="access-time" size={30} />
            <Text className="font-bold text-xl">1 hour</Text>
            <View className="flex-row z-30 ml-5">
              <Image
                source={{
                  uri: "https://www.pngmart.com/files/17/Fresh-Fruits-And-Vegetables-PNG-File.png",
                }}
                style={{ height: 200, width: 200, borderRadius: 100 }}
              />
            </View>
          </View>
          <Divider width={1} />
        </View>
        <View className="p-3 mb-3 space-y-1">
          <Text className="font-bold text-2xl">Ingredients</Text>
          <Text className="text-sm text-gray-400">For 2 people</Text>
        </View>
        <View className="space-y-2 px-4 mb-4">
          <Text className="text-lg font-bold">Vegetables</Text>
          <View className="space-y-4">
            <View className="flex-row justify-between">
              <Text className="font-semibold text-gray-900">Cauliflower</Text>
              <Text className="font-semibold text-gray-900">02</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="font-semibold text-gray-900">Tomato</Text>
              <Text className="font-semibold text-gray-900">02</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="font-semibold text-gray-900">Spinach</Text>
              <Text className="font-semibold text-gray-900">02</Text>
            </View>
          </View>
        </View>
        <View className="space-y-2 px-4 mb-4">
          <Text className="text-lg font-bold">Spices</Text>
          <View className="space-y-4">
            <View className="flex-row justify-between">
              <Text className="font-semibold text-gray-900">Coriander</Text>
              <Text className="font-semibold text-gray-900">100 gram</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="font-semibold text-gray-900">Mustard oil</Text>
              <Text className="font-semibold text-gray-900">1/2 litres</Text>
            </View>
          </View>
        </View>
        <View className="space-y-2 px-4 mb-4">
          <Text className="text-lg font-bold">Appliances</Text>
        </View>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="p-5 space-x-3 pt-0">
          <View className="items-center p-2 bg-gray-200 rounded-md">
            <Image source={{ uri:"https://pngimg.com/d/refrigerator_PNG9047.png"}} style={{ height: 40, width: 40}}/>
            <Text className="font-thin">Refrigerator</Text>    
          </View>
          <View className="items-center p-2 bg-gray-200 rounded-md">
            <Image source={{ uri:"https://pngimg.com/d/refrigerator_PNG9047.png"}} style={{ height: 40, width: 40}}/>
            <Text className="font-thin">Refrigerator</Text>    
          </View>
          <View className="items-center p-2 bg-gray-200 rounded-md">
            <Image source={{ uri:"https://pngimg.com/d/refrigerator_PNG9047.png"}} style={{ height: 40, width: 40}}/>
            <Text className="font-thin">Refrigerator</Text>    
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuDetailScreen;
