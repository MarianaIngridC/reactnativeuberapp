import { View, Text } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import MapComponent from "../components/Map";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";

function MapScreen() {
  const Stack = createStackNavigator();

  return (
    <View style={tw`flex-1`}>
      <View style={tw`h-1/2`}>
        <MapComponent />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator style={tw`flex-1 mt-60`}>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
}

export default MapScreen;
