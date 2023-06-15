import { Text, View, Image, TextInput, TouchableHighlight, Alert } from "react-native";
import st from "./styles";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";





const DonMua = ({ navigation,route }) => {



  const DelPro = () =>{
    let url_api_del = 'http://172.16.10.106:3000/list_giohang/' +route.params.item_chitiet.id ;

    fetch(url_api_del,{

        method: 'DELETE',
                   headers: {
                       Accept: 'application/json',
                       'Content-Type': 'application/json',
                   }
               }).then((res)=>{
                   if(res.status ==200){
                      
                  
                   }
               })
               .catch((e)=>{
                   console.log(e);
               })
      }
  

  const [loginInfo, setloginInfo] = useState('');

  const [img, setimg] = useState(route.params.item_chitiet.img);
  const [name, setname] = useState(route.params.item_chitiet.name);
  const [price, setprice] = useState(route.params.item_chitiet.price);
  const [tennguoimua, settennguoimua] = useState('');
  const [phone, setphone] = useState('');
  const [address, setaddress] = useState('');



  

  

  const [open, setOpen] = useState(false);  // sổ list xuống hay không
  const [value, setValue] = useState(null);  // giá trị người dùng chọn
  const [size, setsize] = useState([    // mảng các phần tử
    {label: 'S', value: 'S' },
    {label: 'L', value: 'L' },
    {label: 'M', value: 'M' }
  ]);
  
  

  const getLoginInfo = async () => {
    try {
      const value = await AsyncStorage.getItem('loginInfo');
      if (value !== null) {
        // cập nhật giá trị cho biến state loginInfo
        setloginInfo(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  }





  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);
  const onPress1 = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  };


  const Save_UserMua = () => {
    let objUserMua = { img: img, name: name, price: price * count, tennguoimua: tennguoimua, phone: phone, address: address, soluong: count , size:value }
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

  useEffect(() => {
    getLoginInfo();
   
    DelPro();
    if (loginInfo.tennguoimua) {
      settennguoimua(loginInfo.tennguoimua);
    } if (loginInfo.phone) {
      setphone(loginInfo.phone);
    } if (loginInfo.address) {
      setaddress(loginInfo.address);
    }
  }, [loginInfo]);






  return (
    <View style={st.container}>
      <Text>đơn mua</Text>
      <View style={st.v1}>
        <Image

          style={{ width: 260, height: 150 }}
          source={{ uri: route.params.item_chitiet.img }} />
      </View>
      <Text style={st.td} >tên sản phẩm:  {route.params.item_chitiet.name}</Text>
      <Text>giá: {route.params.item_chitiet.price}</Text>

<Text style={st.o}>Tên người mua: {tennguoimua}</Text>
<Text style={st.o}>sdt người mua: {phone}</Text>
<Text style={st.o}>dia chi người mua: {address}</Text>
<View style={{width:200,padding:10, zIndex:100 }}>
<DropDownPicker
    title="chon size"
      open={open}
      value={value}
      items={size}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setsize}
      defaultValue="1"
      placeholder={"chon size"} // hoặc placeholder={null}
      
   
   
  

    />
 </View>
  
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
<Text style={{marginTop:10, color:'red', fontSize:20}}> tổng tiền: {Number(Number(count)* Number(route.params.item_chitiet.price))}</Text>

      <TouchableHighlight onPress={Save_UserMua } >
        <View style={{ borderWidth: 1, padding: 5, margin: 20 }}>
          <Text >đặt mua ngay</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}


export default DonMua