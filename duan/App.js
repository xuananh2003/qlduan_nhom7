import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GioiThieu from './components/gt';
import DangNhap from './components/DangNhap';
import DangKi from './components/DangKi';
import TrangChu from './components/TrangChu';
const StackApp = createNativeStackNavigator();


const App = () =>{
  return(
   <NavigationContainer>
    <StackApp.Navigator initialRouteName='gt'>
      <StackApp.Screen name='gt' component={GioiThieu} options={{headerShown:false}}/>
      <StackApp.Screen name='DangNhap' component={DangNhap} options={{headerShown:false}}/>
      <StackApp.Screen name='DangKi' component={DangKi} options={{headerShown:false}}/>
      <StackApp.Screen name='TrangChu' component={TrangChu} options={{headerShown:false}}/>
    </StackApp.Navigator>
   </NavigationContainer>
  )
}

export default App;