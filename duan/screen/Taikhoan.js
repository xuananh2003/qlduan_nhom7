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
          <View style={{marginLeft:300, marginTop:60, }}>
       <Button title="đăng xuất" onPress={()=>{props.navigation.navigate('DangNhap')}}/>
       </View>
          <View style={{marginTop:140, marginRight:5, borderWidth:1,padding:10, height:300}}>
      

<Text style={{ fontSize:22, fontWeight:'bold', padding:5, marginBottom:5}}>tên người mua : {loginInfo.tennguoimua}</Text>
<Text style={{ fontSize:22, fontWeight:'bold' , padding:5, marginBottom:5}}>email: {loginInfo.email}</Text>
<Text style={{ fontSize:22, fontWeight:'bold',  padding:5, marginBottom:5}}>số điện thoại: {loginInfo.phone}</Text>
<Text style={{ fontSize:22, fontWeight:'bold' ,  padding:5, marginBottom:5}}>địa chỉ: {loginInfo.address}</Text></View>
    
        </View>
        
    )
}

export default TaiKhoan