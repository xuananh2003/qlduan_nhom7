import * as React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from "react-native-vector-icons/Ionicons";



//screns


import TrangChu from '../screen/TrangChu'
import GioHang from '../screen/GioHang'

// screnn names
const TrangChuName = 'TrangChu'
const GioHangName = 'GioHang'

const Tab = createBottomTabNavigator();

export default function Main(){
    return(
    
      <Tab.Navigator
            initialRouteName={TrangChuName}
            screenOption = {({route})=>({
                tabBarIcon :({fucused, color, size})=>{
                    let iconName;
                    let rn = route.name;

                    if(rn == TrangChuName){
                        iconName = focused ? "home" : "home-outline";
                    }else if(rn == GioHangName){
                        iconName = fucused ? 'List' : 'home-outline'
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
            <Tab.Screen name='Trang Chu' component={TrangChu}/>
            <Tab.Screen name='Gio Hang' component={GioHang}/>
</Tab.Navigator>
     
    )
}