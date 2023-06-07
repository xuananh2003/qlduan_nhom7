import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Update from './screen/Update';
import Main from './components/Main';

import GioiThieu from './components/gt';
import DangNhap from './components/DangNhap';
import DangKi from './components/DangKi';
import TrangChu from './screen/TrangChu';
import ChiTiet from './screen/Chitiet';
import GioHang from './screen/GioHang';

const StackApp = createNativeStackNavigator();

const Tab =  createBottomTabNavigator();



const App = () =>{
  return(
   <NavigationContainer>
    <StackApp.Navigator  initialRouteName='gt'>
      <StackApp.Screen name='gt' component={GioiThieu} options={{headerShown:false}}/>
      <StackApp.Screen name='DangNhap' component={DangNhap} options={{headerShown:false}}/>
      <StackApp.Screen name='DangKi' component={DangKi} options={{headerShown:false}}/>
      <StackApp.Screen name='ChiTiet' component={ChiTiet} options={{headerShown:false}}/>
      

    <StackApp.Screen name='Main' component={Main} options={{headerShown:false}}/>
    </StackApp.Navigator>





   </NavigationContainer>



  )


}

export default App;