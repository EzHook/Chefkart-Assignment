import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const Categories = ({ names }) => {
  return (
    <View horizontal={true} className="space-x-3 p-3 flex-row">
    <TouchableOpacity>
      <Text className="border-gray-400 border text-gray-400 p-2 rounded-3xl">
        Indian
      </Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text className="border-gray-400 border text-gray-400 p-2 rounded-3xl">
        Italian
      </Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text className="border-gray-400 border text-gray-400 p-2 rounded-3xl">
        Chinese
      </Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text className="border-gray-400 border text-gray-400 p-2 rounded-3xl">
        Continental
      </Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text className="border-gray-400 border text-gray-400 p-2 rounded-3xl">
        South Indian
      </Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text className="border-gray-400 border text-gray-400 p-2 rounded-3xl">
        West Indian
      </Text>
    </TouchableOpacity>
  </View>
  )
}

export default Categories