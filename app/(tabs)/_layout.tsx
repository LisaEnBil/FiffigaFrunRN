import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { HeaderButton } from '@/components/Buttons/HeaderButton';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="list-view"
        options={{
          title: 'All tips',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'list' : 'list-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="liked-items"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'heart' : 'heart-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="email"
        options={{
          title: 'Email',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'mail' : 'mail-outline'} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}

{/* 
      <Tabs.Screen
        name="liked-items"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'heart' : 'heart-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="email"
        options={{
          title: 'Email',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'mail' : 'mail-outline'} color={color} />
          ),
        }}
      /> */}



// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: true,
//       }}>
//       <Tabs.Screen
//         name="home"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="list"
//         options={{
//           title: 'All tips',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="liked-items"
//         options={{
//           title: 'Favorites',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="email"
//         options={{
//           title: 'Email',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
//           ),
//         }}
//       />

//     </Tabs>
//   );
// }
