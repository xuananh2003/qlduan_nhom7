import { Button, Text , View} from "react-native";
import st from "../components/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { useEffect } from "react";
const TaiKhoan = (props) => {

  const [loginInfo, setloginInfo] = useState('');

  const getLoginInfo = async () => {
    try {
        const value = await AsyncStorage.getItem('loginInfo')
        if (value !== null) {
            // láy được dữ liệu 
            setloginInfo(JSON.parse(value))
        }
    } catch (e) {

        console.log(e);
    }
}

useEffect(() => {
  const unsubscribe = props.navigation.addListener('focus', () => {
    // khi màn hình đc active thì lệnh hoạt động
    getLoginInfo();
  });

  return unsubscribe;
}, [props.navigation]);
      




    return(
        <View style= {st.container}>
          <Text>Thông tin người dùng</Text>
          <View style={{marginTop:50, marginRight:100, borderWidth:1, padding:20}}>
<Text style={{ fontSize:22, fontWeight:'bold'}}>tên người mua : {loginInfo.tennguoimua}</Text>
<Text style={{ fontSize:22, fontWeight:'bold'}}>email: {loginInfo.email}</Text>
<Text style={{ fontSize:22, fontWeight:'bold'}}>số điện thoại: {loginInfo.phone}</Text>
<Text style={{ fontSize:22, fontWeight:'bold' }}>địa chỉ: {loginInfo.address}</Text></View>
       <View style={{marginRight:300, marginTop:50}}>
       <Button title="đăng xuất" onPress={()=>{props.navigation.navigate('DangNhap')}}/>
       </View>
        </View>
        
    )
}

export default TaiKhoan