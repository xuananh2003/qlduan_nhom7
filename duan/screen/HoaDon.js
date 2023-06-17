import { Text, View, FlatList, ActivityIndicator, Image, TouchableOpacity } from "react-native";
import st from "../components/styles";
import { useState } from "react";
import React, { useEffect } from "react";
import { Alert } from "react-native";

const HoaDon = (props) => {
  const [dsPro, setdsPro] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const deleteAllItems = async () => {
    let url_api_hoadon = 'http://192.168.1.41:3000/list_hoadon  ';
    
    try {
      const response = await fetch(url_api_hoadon, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
        body: JSON.stringify(dsPro),
      });
  
      if (!response.ok) {
        throw new Error('Lỗi khi xóa dữ liệu trong danh sách hóa đơn.');
      }
      
      getListPro(); // Gọi lại hàm getListPro để cập nhật danh sách hóa đơn
    } catch (error) {
      console.log(error);
      Alert.alert('Lỗi', 'Đã xảy ra lỗi khi xóa dữ liệu trong danh sách hóa đơn.');
    }
  };
  
  const saveToHistory = async () => {
    let url_api_lichsu = 'http://192.168.0.127:3000/list_lichsu';
  
    // Tạo một bản sao của danh sách sản phẩm với id mới được tạo
    const dsProWithNewId = dsPro.map(item => {
      const newId = Date.now() + Math.floor(Math.random() * 1000000);
      return { ...item, id: newId.toString() };
    });
  
    try {
      for (const item of dsProWithNewId) {
        const response = await fetch(url_api_lichsu, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(item),
        });
  
        if (!response.ok) {
          throw new Error('Lỗi khi lưu dữ liệu vào lịch sử.');
        }
      }
  
      Alert.alert('Thông báo', 'Dữ liệu đã được lưu vào lịch sử.');
    
    } catch (error) {
      console.log(error);
      Alert.alert('Lỗi', 'Đã xảy ra lỗi khi lưu dữ liệu vào lịch sử.');
    }
  };
  
  
  

  const getListPro = async () => {
    let url_api_hoadon = 'http://192.168.0.127:3000/list_hoadon';

    try {
      const response = await fetch(url_api_hoadon);
      const json = await response.json();
      setdsPro(json);
    } catch (e) {
      console.log(e);
    } finally {
      setisLoading(false);
    }
  };

  const render_HoaDon = ({ item }) => {
    return (
      <View style={{ backgroundColor: '#C1C1C1', padding: 2, margin: 10,borderRadius:10,borderColor:'#B1B1B1',borderWidth:1 }}>
        <View style={{ padding: 10 }}>
          <Image
            style={{ width: 80, height: 85,borderRadius:10 }}
            source={{ uri: item.img_pro }}
          />
        </View>
        <View style={{ marginTop: 10, padding: 5 }}>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}> {item.tensp}</Text>
          <Text style={{ color: 'black' }}>Buyer: {item.tennguoimua}</Text>
          <Text style={{ color: 'black' }}>Phone: {item.sdt}</Text>
          <Text style={{ color: 'black' }}>Address: {item.diachi}</Text>
          <Text style={{ color: 'black' }}>Quantity: {item.soluong}</Text>
          <Text style={{ color: 'black' }}>Total: {item.giasp}</Text>
        </View>
      </View>
    );
  };

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      getListPro();
    });
    return unsubscribe;
  }, [props.navigation]);

  const buyAllItems = async () => {
    await saveToHistory();
    deleteAllItems();
  };

  return (
    <View style={{marginTop:35}}>
      <Text style={{fontWeight:'bold',fontSize:25,marginStart:10,marginBottom:10}}>HoaDon</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
        style={{height:'87%'}}
          data={dsPro}
          keyExtractor={(item_sp) => item_sp.id.toString()}
          renderItem={render_HoaDon}
        />
      )}
      <TouchableOpacity
        style={{
         
          borderWidth: 1,
          borderRadius: 10,
          height: '5%',
          width: '60%',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 5,
        }}
        onPress={buyAllItems}
      >
        <Text style={{ fontWeight: 'bold' }}>Buy All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HoaDon;
