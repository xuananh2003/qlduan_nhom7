import { Text, View, Image, Button, TouchableOpacity } from "react-native";
import st from "../components/styles";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

const ChiTiet = ({ route, navigation }) => {
  const [count, setCount] = useState(0);
  const [img_pro, setImgage] = useState(route.params.item_sp.img_pro);
  const [tensp, settensp] = useState(route.params.item_sp.tensp);
  const [giasp, setgiasp] = useState(route.params.item_sp.giasp);
  const [danhgia, setdanhgia] = useState(route.params.item_sp.danhgia);

  const Save_Pro = () => {
    let objPro = { img_pro: img_pro, tensp: tensp, giasp: giasp, danhgia: danhgia };
    let url_api_giohang = 'http://192.168.1.41:3000/list_giohang';

    fetch(url_api_giohang, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objPro)
    }).then((res) => {
      if (res.status == 201)
        alert("Thêm thành công");
    }).catch((e) => {
      console.log(e);
    });
  };

  return (
    <View style={{ marginTop: 40 }}>
      <TouchableOpacity style={{ height: 45, flexDirection: 'row', marginLeft: 10, alignItems: "center" }} onPress={() => navigation.goBack()}>
        <Image style={{ height: 24, width: 24 }} source={require('../assets/angle-left.png')} />
        <Text style={{ fontSize: 25, marginLeft: 20,fontWeight:'bold' }}>Detail Product</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 15,borderRadius:10,borderWidth:1,backgroundColor:'#c1c1c1',justifyContent:'center',height:'60%' }}>
        <View style={{ width: 260, height: 150, alignSelf: "center" }}>
          <Image
            style={{ width: 260, height: 150,marginBottom:20,borderRadius:10,marginTop:10 }}
            source={{ uri: route.params.item_sp.img_pro }}
          />
        </View>
        <View style={{marginTop:10}}>
        <Text style={{fontWeight:'bold',fontSize:20,marginLeft:10}}>Name Product: {route.params.item_sp.tensp}</Text>
        <Text style={{ marginLeft:10,fontWeight:'bold'}}>Price: {route.params.item_sp.giasp}</Text>
        <Text style={{ marginLeft:10,fontWeight:'bold'}}>Rate: {route.params.item_sp.danhgia}</Text>

        </View>
        
      
        <View style={{flexDirection:'row', alignSelf:"center",marginTop:10}}>
          <View style={{flex:1}}/>
          <TouchableOpacity style={{ borderWidth: 1, borderRadius: 10, height: 30, width: '40%', justifyContent: 'center', alignSelf: 'center',backgroundColor:'#c1c1c1',marginBottom:10 }} onPress={Save_Pro} >
          <Text style={{alignSelf:'center', fontWeight:'bold'}}> Add to Cart</Text>
          </TouchableOpacity>
          <View style={{flex:1}}/>
          <TouchableOpacity style={{ borderWidth: 1, borderRadius: 10, height: 30, width: '40%', justifyContent: 'center', alignSelf: 'center',backgroundColor:'#c1c1c1',marginBottom:10 }} onPress={() => { navigation.navigate('DonMua', { item_chitiet: route.params.item_sp }) }} >
          <Text style={{alignSelf:'center', fontWeight:'bold'}}> Buy Now</Text>
          </TouchableOpacity>
          <View style={{flex:1}}/>
        </View>
      </View>
    </View>
  );
};

export default ChiTiet;
