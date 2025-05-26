import { commonStyle } from "@/components/commonStyle";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Drawer from "expo-router/drawer";
import React from "react";
import { TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const topBarIcons = () => (
    <>
      {/* <TouchableOpacity
        style={[commonStyle.iconButton]}
        onPress={() => {
          console.log("person-circle-outline");
          
        }}
      >
        <Ionicons name="person" size={24} color="black" />
      </TouchableOpacity> */}
      <TouchableOpacity
        style={[commonStyle.iconButton]}
        onPress={() => {
          console.log("pencil-outline");
          router.push('/contactMe');
        }}
      >
        <Ionicons name="call" size={24} color="black" />
      </TouchableOpacity>
    </>
  )
  export default function DrawerView() {
    return (
      <GestureHandlerRootView>
        <Drawer >
          <Drawer.Screen
            name='index'
            options={{
              drawerLabel: 'Home',
              title: 'Home',
              headerRight: topBarIcons,
            }}
            
          />
          <Drawer.Screen
            name='aboutMe/index'
            options={{
              drawerLabel: 'About Me',
              title: 'About Me',
              headerRight: topBarIcons,
            }}
          />
          <Drawer.Screen
            name='salesPerformance/index'
            options={{
              drawerLabel: 'Sales Performance',
              title: 'Sales Performance',
              headerRight: topBarIcons,
            }}
          />
          <Drawer.Screen
            name='servicesExpertise/index'
            options={{
              drawerLabel: 'Services & Expertise',
              title: 'Services & Expertise',
              headerRight: topBarIcons,
            }}
          />
          <Drawer.Screen
            name='customerSatisfaction/index'
            options={{
              drawerLabel: 'Customer Satisfaction',
              title: 'Customer Satisfaction',
              headerRight: topBarIcons,
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    )

  }