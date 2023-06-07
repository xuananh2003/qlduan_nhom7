import { Text, View, Image, Button, TouchableHighlight } from "react-native";
import st from "../components/styles";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";


const ChiTiet = ({ route }) => {

  const [count, setCount] = useState(0);
  // const onPress = () => setCount(count + 1);
  // const onPress1 = () => {
  //   if (count > 0) {
  //     setCount(count - 1)
  //   }
  // };



  const [img_pro, setImgage] = useState(route.params.item_sp.img_pro);
  const [tensp, settensp] = useState(route.params.item_sp.tensp);
  const [giasp, setgiasp] = useState(route.params.item_sp.giasp);
  const [danhgia, setdanhgia] = useState(route.params.item_sp.danhgia);
  
  const Save_Pro = () =>{
    let objPro = {img_pro: img_pro , tensp:tensp , giasp:giasp , danhgia:danhgia}
    let url_api_giohang = 'http://192.168.1.21:3000/list_giohang'

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
            source={{ uri: route.params.item_sp.img_pro }} />
        </View>
        <Text  style={st.td} >tên sản phẩm:  {route.params.item_sp.tensp}</Text>
        <Text>giá: {route.params.item_sp.giasp}</Text>
        <Text >đánh giá: {route.params.item_sp.danhgia}</Text>
        <Text></Text>
        {/* <Text>so luong</Text>
        <TouchableHighlight onPress={onPress}>
          <View style={st.button}>
            <Text>+</Text>
          </View>
        </TouchableHighlight>


        <TouchableHighlight onPress={onPress1}>
          <View style={st.button}>
            <Text>-</Text>
          </View>
        </TouchableHighlight>
        <View style={st.countContainer}>
          <Text style={st.countText}>{count}</Text>
        </View> */}

        <Text></Text>
        <View style={{}}>
          <Button title="them vao gio hang" onPress={Save_Pro}/>
          <Text> </Text>
          <Button title="mua ngay" />
        </View>
      </View>
    </View>


  )
}
export default ChiTiet