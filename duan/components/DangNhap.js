import { View, Image, Text, TextInput ,TouchableHighlight,Linking, } from "react-native";
import st from "./styles";

import React,{useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const DangNhap = (props) =>{

const [emaildn, setemaildn] = useState('');
const [passworddn, setpassworddn] = useState('');

const doLogin = () =>{
    if(emaildn ==0){
        alert("chưa nhập email") ; return;
    }if(passworddn==0){
        alert("Chưa nhập password"); return ;
    }

    let url_api = "http://192.168.1.41:3000/list_pro?email=" + emaildn ;
    fetch( url_api)
    .then ((res)=>{
     return res.json();
    })
    .then(async(res_login)=>{
     if(res_login.length !=1){
         alert("sai username hoặc lỗi trùng lặp dữ liệu");
         return;
     }else{
         let objU = res_login[0];
         if(objU.password != passworddn){
             alert("sai password") ; return ;
         }
         else{
             try {
                 await AsyncStorage.setItem('loginInfo', JSON.stringify(objU))   // từ khóa : loginInfo -- truyền vào mảng là chuỗi json
                 props.navigation.navigate('Main'),
                 alert("đăng nhập thành công")
               } catch (e) {
               console.log(e);
               }
         }
     }
    })
}





    return(
        <View style={st.container}>
 <View style={st.khung}>
                <Image
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/2/20/FPT_Polytechnic.png' }}
                    style={{ width: 220, height: 75 }}
                />
                <Text style={st.dangnhap}>Đăng nhập</Text>
                <TextInput placeholder="Email" style={st.onhap} onChangeText={(txt) => setemaildn(txt)} />
                <TextInput placeholder="Password " style={st.onhap1} onChangeText={(txt) => setpassworddn(txt)} secureTextEntry={true} />

                <TouchableHighlight activeOpacity={0.6} underlayColor="#9C9C9C" style={{ borderRadius: 20, width: 320, height: 40, marginTop: 10 }}  onPress={doLogin}>
                    <Text style={st.login} >Login</Text>
                </TouchableHighlight>

                <Text>         {"\n"}  ------------------------ hoặc đăng nhập với ------------------------</Text>
                <View style={st.ciew1}>
                    <Text style={st.fb} onPress={
                        ()=> {
                            let urlFB = 'https://www.facebook.com/';
                            Linking.openURL(`${urlFB}`)
                        }
                    }>FACEBOOK</Text>
                    <Text style={st.gg} onPress={
                        ()=>{
                            let urlGG = 'https://accounts.google.com/v3/signin/identifier?dsh=S1661520062%3A1676801793329135&continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dcreate-account-button&flowName=GlifWebSignIn&flowEntry=AddSession';
                            Linking.openURL(`${urlGG}`)
                        }
                    }>GOOGLE</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Text>Bạn chưa có tài khoản? </Text>
                    <Text style={{ fontWeight: 'bold' }} onPress={() => { props.navigation.navigate('DangKi') }}>Đăng kí ngay</Text>
                </View>


            </View>

        </View>
    )
}

export default DangNhap