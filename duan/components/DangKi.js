import { Text, View ,Image, TextInput, TouchableHighlight} from "react-native";
import { useState } from "react";
import st from "./styles";
import validator from 'validator';
import { Alert } from "react-native";
const DangKi = (props) =>{

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [enterpasswd, setenterpasswd] = useState('');
    const [tennguoimua, settennguoimua] = useState('');
    const [address, setadress] = useState('');
    const [phone, setphone] = useState('');
    

    

    const SaveUser = () =>{

        if (!validator.isEmail(email)) {
            Alert.alert('lỗi', 'email sai định dạng');
            return
          } 
        
        
        if(email ==0){
            return
        }if(password ==0){
            return
        }if(password != enterpasswd){
            return
        }

        let objUser  = {email:email, password:password , tennguoimua:tennguoimua, address:address, phone:phone}
        let url_api = "http://172.16.10.100:3000/list_user"

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
                <TextInput placeholder="Email" style={st.onhap} value={email} onChangeText={(txt)=>setemail(txt)} />
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

          <TextInput placeholder="tên người dùng" style={st.onhap} onChangeText={(txt)=>settennguoimua(txt)} />
                <Text
            style={{
              fontSize: 11,
              color: 'red',
             paddingRight:140,
             paddingTop:5
            }}>{tennguoimua.length == 0 ? "không được để trống tên người dùng" : ""}

          </Text>

          <TextInput placeholder="nhập địa chỉ" style={st.onhap} onChangeText={(txt)=>setadress(txt)} />
                <Text
            style={{
              fontSize: 11,
              color: 'red',
             paddingRight:180,
             paddingTop:5
            }}>{address.length == 0 ? "không được để trống địa chỉ" : ""}

          </Text>

          <TextInput placeholder="nhập số điện thoại" style={st.onhap} onChangeText={(txt)=>setphone(txt)} />
                <Text
            style={{
              fontSize: 11,
              color: 'red',
             paddingRight:180,
             paddingTop:5
            }}>{phone.length <= 0 ? "Không được để trống sdt " : isNaN(phone) ? "Giá phải là chữ số" : ""}

          </Text>



                <TouchableHighlight activeOpacity={0.6} underlayColor="#9C9C9C" style={{ borderRadius: 20, width: 320, height: 40, marginTop: 10 }}  >
                    <Text style={st.login} onPress={SaveUser} >Registor now</Text>
                </TouchableHighlight>

            </View>
        </View>
    )
}
export default DangKi