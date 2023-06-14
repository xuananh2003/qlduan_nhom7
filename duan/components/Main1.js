import * as React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from "react-native-vector-icons/Ionicons";



//screns


import Admin from '../screen1.js/Admin';
import HoaDon from '../screen/HoaDon';

// screnn names
const AdminName = 'Admin'
const HoaDonName = 'HoaDon'

const Tab = createBottomTabNavigator();

export default function Main1(){
    return(
    
      <Tab.Navigator
            initialRouteName={AdminName}
            screenOption = {({route})=>({
                tabBarIcon :({fucused, color, size})=>{
                    let iconName;
                    let rn = route.name;

                    if(rn == AdminName){
                        iconName = fucused ? "home" : "home-outline";
                   
                    }else if(rn == HoaDonName){
                        iconName = fucused ? 'HoaDon' : 'home-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                }
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
              }}>
           <Tab.Screen name='trang chu' component={Admin} />
            <Tab.Screen name='Hoa Don ' component={HoaDon}/>
</Tab.Navigator>
     
    )
}