import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MenuScreen from './screens/MenuScreen';
import MenuDetailScreen from './screens/MenuDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <StatusBar style="auto" />
      <Stack.Navigator >
        <Stack.Screen name='Select Dishes' component={MenuScreen} options={{ presentation : "modal" }} />
        <Stack.Screen name ='Detail' component={MenuDetailScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

