import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { popularDishes } from '../data'

const PopularDishes = () => {

  return (
   <>
    {popularDishes.map((dish, index) => (
      <View>
      <TouchableOpacity>
        <View key={index} className="p-2 mt-5 items-center">
          <Image
            source={{ uri: dish.image }}
            style={{
              height: 100,
              width: 100,
              borderRadius: 200,
              borderColor: "orange",
              borderWidth: 2,
            }}
          />
          <Text className="absolute top-12  font-semibold text-white ">
            {dish.name}
          </Text>
        </View>
      </TouchableOpacity>
      </View>
    ))}
    </>
  )
}

export default PopularDishes