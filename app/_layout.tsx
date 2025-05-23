import { Drawer } from "expo-router/drawer";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return(
    <GestureHandlerRootView>
      <Drawer >
        <Drawer.Screen
          name='index'
        />
        <Drawer.Screen
          name='aboutMe'
        />
        <Drawer.Screen
          name='salesPerformance'
        />
        <Drawer.Screen
          name='servicesExpertise'
        />
        <Drawer.Screen
          name='testimonials'
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
