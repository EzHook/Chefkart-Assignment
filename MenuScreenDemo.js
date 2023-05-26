import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    Button,
    Image,
    TouchableOpacity,
    FlatList,
  } from "react-native";
  import React from "react";
  import { useNavigation } from "@react-navigation/native";
  import { Divider, Icon } from "@rneui/base";
  import { dishes, popularDishes } from "../data";
  import PopularDishes from "../components/PopularDishes";
  import DateHeader from "../components/DateHeader";
  import Categories from "../components/Categories";
  
  const MenuScreen = () => {
    const navigation = useNavigation();
  
    return (
      <SafeAreaView
        style={{
          backgroundColor: "white",
          flex: 1,
        }}
      >
  
        {/* black rectangle */}
        <DateHeader />
        <Divider width={1} />
        {/* horizonatl food types */}
        <Categories />
        {/* Popular Dishes */}
        <Text className="font-extrabold text-2xl p-2 mt-4">Popular Dishes</Text>
        {/* dynamic food items horizontal carosel */}
        <PopularDishes />
        <Divider width={1} />
  
        <View className="flex-row justify-between items-center p-2">
            <View className="flex-row">
              <Text className="font-extrabold text-xl p-4">Recommended⬇</Text>
            </View>
              <TouchableOpacity>
                <Text className="bg-black p-3 text-white text-md rounded-full">
                  Menu
                </Text>
              </TouchableOpacity>
              <View style={{ height: 100}} />
          </View>
        {/* Recommended with a down chevron and on right Menu button */}
        
        <ScrollView>
        <View>
          <View>
              <Text>Tandoori</Text>
              <Icon type="material" name='star' size={16} />
              <Text className="text-white bg-green-500 p-2 text-sm">4.2*</Text>
          </View>
          <View>
              <Icon
              type="material-community"
              name="fridge"
              size={20} />
              <View className="flex-row">
                  <TouchableOpacity>
                      <Text>Ingredients</Text>
                  </TouchableOpacity>
              </View>
          </View>
          <View>
              <Text>This is a short description</Text>
          </View>
         </View>
         <View>
          <Image source={{ uri : "https://www.pngmart.com/files/21/About-Me-PNG-HD-Isolated.png" }} style={{ height: 30, width: 30}} />
         </View>
        </ScrollView>
        {/* visible cart if any item is added */}
      </SafeAreaView>
    );
  };
  
  export default MenuScreen;
  
  {
    /*  >  */
  }
  