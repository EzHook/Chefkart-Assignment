import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Divider, Icon } from "@rneui/base";
import { dishes, popularDishes } from "../data";
import PopularDishes from "../components/PopularDishes";
import DateHeader from "../components/DateHeader";
import Categories from "../components/Categories";
import RestaurantCard from "../components/RestaurantCard";
import { StatusBar } from "expo-status-bar";

const MenuScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: "white",
          flex: 1,
        }}
      >
        <DateHeader />
        <Divider width={1} />

        <Categories />

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            padding: 10,
            marginTop: 10,
          }}
        >
          Popular Dishes
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="space-x-4 h-0"
        >
          <PopularDishes />
        </ScrollView>

        <Divider width={1} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
          }}
          className="mb-2 "
        >
        <View>
          
        </View>
          <View style={{ flexDirection: "row", }} className="mr-11 justify-start">
            <Text style={{ fontWeight: "bold", fontSize: 18, padding: 5 }}>
            Recommended⬇
            </Text>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                backgroundColor: "black",
                padding: 10,
                color: "white",
                fontSize: 14,
                borderRadius: 20,
              }}
            >
              Menu
            </Text>
          </TouchableOpacity>
        </View>
        <Divider width={1} />
        <ScrollView
        showsVerticalScrollIndicator={false} className='h-11'>
          {dishes.map((dish, index) => (
            <RestaurantCard
              key={index}
              id={dish.id}
              image={dish.image}
              name={dish.name}
              rating={dish.rating}
              description={dish.description}
              equipment={dish.equipments}
            />
          ))}
          <View style={{height : 100}} />
        </ScrollView>

        {/* Visible cart if any item is added */}
      </SafeAreaView>
    </>
  );
};

export default MenuScreen;
