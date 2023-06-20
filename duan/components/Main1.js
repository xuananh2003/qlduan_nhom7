import * as React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from "@expo/vector-icons";



//screns


import Admin from '../screen1.js/Admin';
import HoaDon from '../screen/HoaDon';

// screnn names
const AdminName = 'Trang chủ '
const HoaDonName = 'Hóa đơn'

const Tab = createBottomTabNavigator();

export default function Main1(){
    return(
    
        <Tab.Navigator
        initialRouteName={AdminName}
        screenOptions={({ route })=>({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let rn = route.name;

                    if (rn == AdminName) {
                        iconName = focused ? "md-home" : "md-home-outline";
                      }else if(rn == HoaDonName){
                        iconName = focused ? "md-receipt" : "md-receipt-outline";
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                }
            })} 
         >
           <Tab.Screen name={AdminName} component={Admin} />
           
            <Tab.Screen name={HoaDonName} component={HoaDon}/>
</Tab.Navigator>
     
    )
}