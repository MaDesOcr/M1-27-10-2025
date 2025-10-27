import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown: false, 
      tabBarIconStyle: {display:'none'}
    }}>
      <Tabs.Screen
        name="tab1"
      />
      <Tabs.Screen options={{tabBarIcon:()=>null}}
        name="tab2"
      />
    </Tabs>
  );
}
