import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GioiThieu from "./components/gt";
import DangNhap from "./components/DangNhap";
import DangKi from "./components/DangKi";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "./components/screens/HomeScreen";
import DetailsScreen from "./components/screens/LikedScreen";
import SettingsScreen from "./components/screens/SearchScreen";
import ProfileScreen from "./components/screens/ProfileScreen";

//Screen names
const homeName = "Home";
const searchName = "Search";
const likedName = "Liked";
const profileName = "Profile";

const Tab = createBottomTabNavigator()

const StackApp = createNativeStackNavigator();

const MainContainer = (props) => {
  return (

    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === searchName) {
            iconName = focused ? "search" : "search-outline";
          } else if (rn === likedName) {
            iconName = focused ? "heart" : "heart-outline";
          } else if (rn === profileName) {
            iconName = focused ? "people" : "people-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "grey",
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: {
          padding: 10,
          height: 70,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          overflow: "hidden", // Để hình cong không bị tràn ra ngoài
        },
      }}
    >
      <Tab.Screen
        name={homeName}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={searchName}
        component={DetailsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={likedName}
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={profileName}
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
function Auth(props) {
  return (
    <NavigationContainer>
      <StackApp.Navigator>

        <StackApp.Screen
          name="gt"
          component={GioiThieu}
          options={{ headerShown: false }}
        />

        <StackApp.Screen
          name="DangNhap"
          component={DangNhap}
          options={{ headerShown: false }}
        />

        <StackApp.Screen
          name="DangKi"
          component={DangKi}
          options={{ headerShown: false }}
        />
        
        <StackApp.Screen
          name="MainContainer"
          component={MainContainer}
          options={{ headerShown: false }}
        />
      
      </StackApp.Navigator>
    </NavigationContainer>
  );
}

export default Auth;
