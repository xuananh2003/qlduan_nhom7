import { Text, View ,Image, TextInput, TouchableHighlight} from "react-native";
import { useState } from "react";
import st from "./styles";
const DangKi = (props) =>{

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [enterpasswd, setenterpasswd] = useState('');

    const SaveUser = () =>{
        if(email ==0){
            return
        }if(password ==0){
            return
        }if(password != enterpasswd){
            return
        }

        let objUser  = {email:email, password:password}
        let url_api = "http://192.168.1.41:3000/list_pro"

        fetch(url_api,{
            method:'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(objUser),
        }).then((res)=>{
            if(res.status==201)
            props.navigation.navigate('DangNhap',{email,password})
            alert("dang ki thanh cong")
        })
        .catch((e)=>{
            console.log(e);
        })

    }

    return(
        <View style={st.container}>
            <View style={st.khung}>
                <Image
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/2/20/FPT_Polytechnic.png' }}
                    style={{ width: 220, height: 75 }}
                />
                <Text style={st.dangnhap}>Đăng kí tài khoản</Text>
                <TextInput placeholder="Email" style={st.onhap} onChangeText={(txt)=>setemail(txt)} />
                <Text
            style={{
              fontSize: 11,
              color: 'red',
             paddingRight:180,
             paddingTop:5
            }}>{email.length == 0 ? "không được để trống email" : ""}

          </Text>


                <TextInput placeholder="Password " style={st.onhap1} onChangeText={(txt)=>setpassword(txt)} secureTextEntry={true} />
                <Text
            style={{
              fontSize: 11,
              color: 'red',
             paddingRight:150,
             paddingTop:5
            }}>{password.length == 0 ? "không được để trống password" : ""}

          </Text>




                <TextInput placeholder="enter the Password " style={st.onhap1} onChangeText={(txt)=>setenterpasswd(txt)} secureTextEntry={true} />
                <Text
            style={{
              fontSize: 11,
              color: 'red',
             paddingRight:180,
             paddingTop:5
            }}>{enterpasswd.length == 0 ? "không được để trống ô này" : enterpasswd != password ? "mật khẩu không khớp": ""}

          </Text>


                <TouchableHighlight activeOpacity={0.6} underlayColor="#9C9C9C" style={{ borderRadius: 20, width: 320, height: 40, marginTop: 10 }}  >
                    <Text style={st.login} onPress={SaveUser} >Registor now</Text>
                </TouchableHighlight>

            </View>
        </View>
    )
}
export default DangKi