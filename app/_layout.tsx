import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return(
    <Stack>
      <Stack.Screen
        name='drawer'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='contactMeModal'
        options={{
          title: 'Contact Me',
          presentation: 'modal',
        }}
      />
    </Stack>    
  );
}
