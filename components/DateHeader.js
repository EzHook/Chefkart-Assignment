import { View, Text } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

const DateHeader = () => {
    const date = new Date();

  return ( 
    <View
      style={{
        backgroundColor: "black",
      }}
    >
      {/* date inside a div which is over the black recctangle */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          marginHorizontal: 10,
          marginTop: 20,
        }}
        className="p-5 z-40 items-center justify-between rounded-xl shadow-2xl"
      >
        <View
          style={{
            flexDirection: "row",
          }}
          className="items-center space-x-2"
        >
          <Icon name="date-range" type="material" size={30} />
          <Text className="font-extrabold text-xs">
            {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
          className="items-center space-x-2"
        >
          <Icon name="access-time" type="material" size={30} />
          <Text className="font-extrabold text-xs">10:30 PM-12:30 PM</Text>
        </View>
      </View>
    </View>
  );
};

export default DateHeader;
