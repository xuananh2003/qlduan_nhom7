import { Text, View, Image, Button, TouchableHighlight, TouchableOpacity } from "react-native";
import st from "../components/styles";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";


const ChiTiet = ({route, navigation}) => {

  const [count, setCount] = useState(0);
  // const onPress = () => setCount(count + 1);
  // const onPress1 = () => {
  //   if (count > 0) {
  //     setCount(count - 1)
  //   }
  // };



  const [img, setimg] = useState(route.params.item_sp.img);
  const [name, setname] = useState(route.params.item_sp.name);
  const [price, setprice] = useState(route.params.item_sp.price);
  const [description, setdescription] = useState(route.params.item_sp.description);
  
  const Save_Pro = () =>{
    let objPro = {img: img , name:name , price:price , description:description}
    let url_api_giohang = 'http://10.24.57.251:3000/list_giohang'

    fetch(url_api_giohang, {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(objPro)
  }).then((res) => {
      if (res.status == 201)
          alert("them thanh cong")

  })
      .catch((e) => {
          console.log(e);
      })

  }
  
  


  return (
    <View style={st.container}>

      <View style={st.b2}>
        <View style={st.v2}>
          <Image

style={{ width: 230, height: 190 }}
            source={{ uri: route.params.item_sp.img }} />
        </View>
        <Text  style={st.td} >tên sản phẩm:  {route.params.item_sp.name}</Text>
        <Text style={st.ct}>giá: {route.params.item_sp.price}</Text>
        <Text style={st.ct} >đánh giá: {route.params.item_sp.description}</Text>
        <Text></Text>
       

        <Text></Text>
        <View style={{flexDirection:'row',alignSelf:"center",marginBottom:30, marginLeft:10,marginRight:10}}>
        <TouchableOpacity style={{ borderWidth: 1, borderRadius: 10, height: 30, width: '40%', justifyContent: 'center', alignSelf: 'center',backgroundColor:'#c1c1c1',marginBottom:10 }} onPress={Save_Pro} >
          <Text style={{alignSelf:'center', fontWeight:'bold'}}> Add to Cart</Text>
          </TouchableOpacity>
        
          <View style={{flex:1}}/>
          <TouchableOpacity style={{ borderWidth: 1, borderRadius: 10, height: 30, width: '40%', justifyContent: 'center', alignSelf: 'center',backgroundColor:'#c1c1c1',marginBottom:10 }} onPress={() => { navigation.navigate('DonMua', { item_chitiet: route.params.item_sp }) }} >
          <Text style={{alignSelf:'center', fontWeight:'bold'}}> Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>


  )
}
export default ChiTiet