import { Text, View, Image, Button, TouchableHighlight } from "react-native";
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
    let url_api_giohang = 'http://172.16.10.106:3000/list_giohang'

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
      <Text style={{ paddingTop: 150, fontSize: 25 }}>Chi tiet san pham</Text>
      <View style={st.b1}>
        <View style={st.v1}>
          <Image

            style={{ width: 260, height: 150 }}
            source={{ uri: route.params.item_sp.img }} />
        </View>
        <Text  style={st.td} >tên sản phẩm:  {route.params.item_sp.name}</Text>
        <Text>giá: {route.params.item_sp.price}</Text>
        <Text >đánh giá: {route.params.item_sp.description}</Text>
        <Text></Text>
        {/* <Text>so luong</Text>
        <TouchableHighlight onPress={onPress}>
          <View style={st.button}>
            <Text>+</Text>
          </View>
        </TouchableHighlight>


        <TouchableHighlight onPress={onPress1}>
          <View style={st.button}>
            <Text>-</Text>s
          </View>
        </TouchableHighlight>
        <View style={st.countContainer}>
          <Text style={st.countText}>{count}</Text>
        </View> */}

        <Text></Text>
        <View style={{}}>
          <Button title="them vao gio hang" onPress={Save_Pro}/>
          <Text> </Text>
          <Button title="mua ngay"onPress={() => {navigation.navigate('DonMua', { item_chitiet: route.params.item_sp }) }} />
        </View>
      </View>
    </View>


  )
}
export default ChiTiet