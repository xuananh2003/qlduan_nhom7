import { Text, View, Image, TextInput,TouchableOpacity } from "react-native";
import st from "./styles";
import { useState } from "react";





const DonMua = ({ route,navigation }) => {


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
    let url_api_hoadon = 'http://192.168.1.41:3000/list_hoadon'

    

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
    <View style={{marginTop:35}}>
      <Text style={{marginLeft:20,fontSize:25,fontWeight:'bold'}}>Purchase Order</Text>
      <View style={{borderWidth:1,margin:5,borderRadius:10,backgroundColor:'#c1c1c1'}}>
      <View style={{marginTop:20, }}>
      <Image

        style={{ width: 260, height: 150,alignSelf:'center',marginBottom:10 }}
        source={{ uri: route.params.item_chitiet.img_pro }} />
    </View>
    <View style={{marginLeft:10}}>
    <Text style={{fontSize:20,fontWeight:'bold'}} >Product name:  {route.params.item_chitiet.tensp}</Text>
    <Text style={{fontWeight:'bold'}}>Price: {route.params.item_chitiet.giasp}</Text>
    </View>
   

<View style={{alignSelf:'center'}}>
<TextInput placeholder="Buyer" style={st.o} onChangeText={(txt) => { settennguoimua(txt) }} />
<TextInput placeholder="Phone"  style={st.o} onChangeText={(txt) => { setsdt(txt) }} />
<TextInput placeholder="Address" style={st.o} onChangeText={(txt) => { setdiachi(txt) }} />
</View>
   
<View style={{ flexDirection: 'row',marginLeft:10,marginTop:10}}>
<Text style={{fontWeight:'bold',alignSelf:'center'}}>Quantity</Text>
<View style={{ flexDirection: 'row',marginLeft:10 }}>

<TouchableOpacity onPress={onPress1} style={{ alignSelf: 'center' }}>
<View style={{ borderWidth: 1, borderRadius: 40, width: 30, height: 30, backgroundColor: '#c1c1c1', justifyContent: 'center', alignItems: 'center' }}>
  <Text style={{ fontSize: 30, alignSelf: 'center', marginTop: -8 }}> - </Text>
</View>
</TouchableOpacity>


  


      <View style={st.countContainer}>
        <Text style={st.countText}>{count}</Text>
      </View>
      <TouchableOpacity onPress={onPress} style={{ alignSelf: 'center' }}>
      <View style={{ borderWidth: 1, borderRadius: 40, width: 30, height: 30, backgroundColor: '#c1c1c1', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, alignSelf: 'center', marginTop: -2 }}> + </Text>
      </View>
    </TouchableOpacity>
    </View>
</View>


<Text style={{marginTop:10, color:'red', fontSize:20,fontWeight:'bold',marginLeft:10}}> Total: {Number(Number(count)* Number(route.params.item_chitiet.giasp))}</Text>

    <View style={{flexDirection:'row', alignSelf:"center",marginTop:10}}>
    <View style={{flex:1}}/>
    <TouchableOpacity style={{ borderWidth: 1, borderRadius: 10, height: 30, width: '40%', justifyContent: 'center', alignSelf: 'center',backgroundColor:'#c1c1c1',marginBottom:10 }} onPress={Save_UserMua} >
    <Text style={{alignSelf:'center', fontWeight:'bold'}}> Buy Now</Text>
    </TouchableOpacity>
    <View style={{flex:1}}/>
    <TouchableOpacity style={{ borderWidth: 1, borderRadius: 10, height: 30, width: '40%', justifyContent: 'center', alignSelf: 'center',backgroundColor:'#c1c1c1',marginBottom:10 }}onPress={() => navigation.goBack()} >
    <Text style={{alignSelf:'center', fontWeight:'bold'}}> Cancel</Text>
    </TouchableOpacity>
    <View style={{flex:1}}/>
  </View>
  </View>
      </View>
     
  )
}


export default DonMua