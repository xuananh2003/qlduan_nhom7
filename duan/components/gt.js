import { View,Image,Text } from "react-native";
import st from "./styles";
import React from "react";

const GioiThieu = (props) =>{

React.useEffect(()=>{
    setTimeout(()=>{
       props.navigation.navigate('DangNhap')
    }, 5000)
})


    return(
        <View style={st.container}>
<View style={{marginTop:80}}>
  <Image
  style={{width:330 , height:230}}
  source={{ uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/346132024_759568502384076_6227297969434113796_n.png?stp=dst-png_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=rT-XI9X4WHYAX-vfYGl&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSR5ChaRe8C0ELnf0HTlYiE2rCxO35NLQc4YDZW5Wvd-w&oe=64885841'}}
  />
</View>
<Text style={{fontSize:25, color:'red', fontWeight:'bold', padding:30, alignItems:'center', textAlign:'center'}}> chào mừng đến với shop quần áo Boong </Text>
        </View>
    )
}
export default GioiThieu