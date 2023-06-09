import { Text, View, Image, TextInput, TouchableHighlight } from "react-native";
import st from "./styles";
import { useState } from "react";





const DonMua = ({ route }) => {


  const [img_pro, set] = useState(route.params.item_chitiet.img_pro);
  const [tensp, settensp] = useState(route.params.item_chitiet.tensp);
  const [giasp, setgiasp] = useState(route.params.item_chitiet.giasp);
  const [tennguoimua, settennguoimua] = useState('');
  const [sdt, setsdt] = useState('');
  const [diachi, setdiachi] = useState('');







  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);
  const onPress1 = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  };


  const Save_UserMua = () => {
    let objUserMua = { img_pro: img_pro, tensp: tensp, giasp: giasp * count, tennguoimua: tennguoimua, sdt: sdt, diachi: diachi, soluong: count }
    let url_api_hoadon = 'http://172.16.10.106:3000/list_hoadon'

    

    fetch(url_api_hoadon, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objUserMua)
    }).then((res) => {
      if (res.status == 201)
        alert("đặt hàng thành công")

    })
      .catch((e) => {
        console.log(e);
      })


  }






  return (
    <View style={st.container}>
      <Text>đơn mua</Text>
      <View style={st.v1}>
        <Image

          style={{ width: 260, height: 150 }}
          source={{ uri: route.params.item_chitiet.img_pro }} />
      </View>
      <Text style={st.td} >tên sản phẩm:  {route.params.item_chitiet.tensp}</Text>
      <Text>giá: {route.params.item_chitiet.giasp}</Text>


      <TextInput placeholder="nhap ho ten" style={st.o} onChangeText={(txt) => { settennguoimua(txt) }} />
      <TextInput placeholder="nhap sdt"  style={st.o} onChangeText={(txt) => { setsdt(txt) }} />
      <TextInput placeholder="nhap dia chi" style={st.o} onChangeText={(txt) => { setdiachi(txt) }} />
      <Text>so luong</Text>
      <View style={{ flexDirection: 'row' }}>

        <TouchableHighlight onPress={onPress1}>
          <View style={st.button}>
            <Text>-</Text>
          </View>
        </TouchableHighlight>


        <View style={st.countContainer}>
          <Text style={st.countText}>{count}</Text>
        </View>
        <TouchableHighlight onPress={onPress}>
          <View style={st.button}>
            <Text>+</Text>
          </View>
        </TouchableHighlight>
      </View>
<Text style={{marginTop:10, color:'red', fontSize:20}}> tổng tiền: {Number(Number(count)* Number(route.params.item_chitiet.giasp))}</Text>

      <TouchableHighlight onPress={Save_UserMua} >
        <View style={{ borderWidth: 1, padding: 5, margin: 20 }}>
          <Text>đặt mua ngay</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}


export default DonMua