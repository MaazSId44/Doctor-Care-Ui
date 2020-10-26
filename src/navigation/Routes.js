import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/stack/Home';


const Stack = createStackNavigator();

export const MainStack = () =>  {
  return (
    <Stack.Navigator screenOptions={{headerShown: false }} >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

