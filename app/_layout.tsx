import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import React from "react";

export default function RootLayout() {
  return(
    <SQLiteProvider databaseName="carProfile.db" useSuspense={true}>
      <Stack>
        <Stack.Screen
          name='(drawer)'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='(modal)/contactMe'
        options={{
          title: 'Contact Me',
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name='(modal)/salesCase1'
        options={{
          title: 'Sales Case 1',
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name='(modal)/salesCase2'
        options={{
          title: 'Sales Case 2',
          presentation: 'modal',
        }}
      />
    </Stack>    
  </SQLiteProvider>
  );
}
