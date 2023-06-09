import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Main from './components/Main';

import GioiThieu from './components/gt';
import DangNhap from './components/DangNhap';
import DangKi from './components/DangKi';
import TrangChu from './screen/TrangChu';
import ChiTiet from './screen/Chitiet';
import DonMua from './components/DonMua';
import Admin from './screen1.js/Admin';
import Main1 from './components/Main1';

const StackApp = createNativeStackNavigator();





const App = () =>{
  return(
   <NavigationContainer>
    <StackApp.Navigator  initialRouteName='gt'>
      <StackApp.Screen name='gt' component={GioiThieu} options={{headerShown:false}}/>
      <StackApp.Screen name='DangNhap' component={DangNhap} options={{headerShown:false}}/>
      <StackApp.Screen name='DangKi' component={DangKi} options={{ title: 'Đăng kí'}}/>
      <StackApp.Screen name='ChiTiet' component={ChiTiet} options={{ title: 'Chi tiết sản phẩm'}}/>
      <StackApp.Screen name='DonMua' component={DonMua} options={{ title: 'Đơn mua'}}/>
      <StackApp.Screen name='Main1' component={Main1} options={{headerShown:false}}/>

    <StackApp.Screen name='Main' component={Main} options={{headerShown:false}}/>
    </StackApp.Navigator>





   </NavigationContainer>



  )


}

export default App;