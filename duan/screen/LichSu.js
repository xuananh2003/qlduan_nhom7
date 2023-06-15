import React, { useState, useEffect } from "react";
import { Text, View, ActivityIndicator, FlatList, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import st from "../components/styles";

const LichSu = (props) => {
  const [dsDonHang, setDsDonHang] = useState([]);
  const [dsSanPham, setDsSanPham] = useState([]);
  const [isLoadingDonHang, setIsLoadingDonHang] = useState(true);
  const [isLoadingSanPham, setIsLoadingSanPham] = useState(true);
  const [loginInfo, setLoginInfo] = useState(null);

  const getDonHang = async () => {
    
  
    const url_api_dondathang = 'http://172.16.10.106:3000/dathang/' + loginInfo.id;
  
    try {
      const response = await fetch(url_api_dondathang);
      const json = await response.json();
      if (response.status === 200) {
        setDsDonHang(json);
      } else {
        alert("Lấy thông tin đơn đặt hàng thất bại. Vui lòng thử lại sau.");
      }
    } catch (e) {
      console.log(e);
      alert("Lấy thông tin đơn đặt hàng thất bại. Vui lòng thử lại sau.");
    } finally {
      setIsLoadingDonHang(false);
    }
  };

  const getListPro = async () => {
    const url_api_hoadon = 'http://172.16.10.106:3000/list_hoadon';

    try {
      const response = await fetch(url_api_hoadon);
      const json = await response.json();
      setDsSanPham(json);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoadingSanPham(false);
    }
  };

  const getLoginInfo = async () => {
    try {
      const value = await AsyncStorage.getItem('loginInfo');
      if (value !== null) {
        setLoginInfo(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      getListPro();
      getDonHang();
      getLoginInfo();
    });
    return unsubscribe;s
  }, [props.navigation]);

  const renderSanPham = ({ item }) => {
    return (
      <View style={{ backgroundColor: 'yellow', padding: 2, margin: 10, flexDirection: 'row' }}>
        <View style={{ padding: 10 }}>
          <Image
            style={{ width: 80, height: 85 }}
            source={{ uri: item.img }} />
        </View>
        <View style={{ marginTop: 10, padding: 5 }}>
          <Text>Tên sản phẩm: {item.name}</Text>
          <Text>Số lượng: {item.soluong}</Text>
          <Text>Tổng: {item.price}</Text>
        </View>
      </View>
    );
  };
  useEffect(() => {
    // Lấy dữ liệu đơn hàng từ server
    const url_api_dondathang = 'http://172.16.10.106:3000/dathang';
    fetch(url_api_dondathang)
      .then(response => response.json())
      .then(json => setDsDonHang(json))
      .catch(error => console.log(error));
  }, []);
  const renderDonHang = ({ item }) => {
    return (
      <View style={{ padding: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Mã đơn hàng: {item.id}</Text>
        <Text>Sản phẩm:</Text>
        <FlatList 
          data={item.items}
          keyExtractor={(item) => item.user_id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>- {item.name} x {item.soluong}</Text>
            </View>
          )}
        />
      </View>
    );
  }

  return (
    <View style={st.container}>
      <Text>Lịch sử</Text>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Danh sách sản phẩm đã mua</Text>
        {isLoadingSanPham ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={dsSanPham}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderSanPham}
          />
        )}
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Danh sách đơn đặt hàng</Text>
        {isLoadingDonHang ? (
         <ActivityIndicator />
        ) : (
            <FlatList
            data={dsDonHang}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderDonHang}
          />
        )}
      </View>
      
    </View>
  );
};

export default LichSu;