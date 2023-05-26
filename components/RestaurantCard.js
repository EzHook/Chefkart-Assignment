import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { Divider, Icon } from "@rneui/themed";
import { Image } from "@rneui/themed/dist/Image";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
  name,
  rating,
  description,
  equipment,
  image,
  id,
}) => {
  const navigation = useNavigation();
  return (
    <View className="mx-4 mb-4">
    <TouchableOpacity onPress={() => navigation.navigate("Detail", id)}>
      <View
        className="space-x-4"
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <Text className="text-lg font-semibold my-2">{name}</Text>
        <Icon color="green" type="material" name="star" size={16} />
        <Text
          style={{
            backgroundColor: "green",
            color: "white",
            padding: 5,
            fontSize: 12,
          }}
          className="rounded-lg"
        >
          {rating}
        </Text>
      </View>
      </TouchableOpacity>
      <View className="flex-row items-start justify-between">
        <View>
          <Icon type="material-community" name="fridge" size={20} />
          <Text className="text-xs">{equipment}</Text>
        </View>
        <View className="flex-row mr-7">
          <TouchableOpacity>
            <Text className="text-sm font-bold">Ingredients</Text>
            <Text className="text-orange-600 text-xs">View list {">"}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={{
              uri: image,
            }}
            style={{ height: 50, width: 50, borderRadius: 20 }}
          />
        </View>
      </View>
      <View className="my-2">
        <Text className="text-gray-500">{description}</Text>
      </View>
      <Divider width={1} />
    </View>
  );
};

export default RestaurantCard;
