import { View, Text, Image, ActivityIndicator, FlatList, TextInput, Button, TouchableHighlight, RefreshControl, SafeAreaView } from "react-native";
import st from "../components/styles";
import { useState, useEffect } from "react";
import React from "react";
import { Modal } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const TrangChu = (props) => {
  const [isLoading, setisLoading] = useState(true);
  const [showDialog, setshowDialog] = useState(true)
  const [dsPro, setdsPro] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loginInfo, setloginInfo] = useState('');

  const getListPro = async () => {
    let api_url_pro = 'http://172.16.10.106:3000/list_pro';
    try {
      const response = await fetch(api_url_pro);
      const json = await response.json();
      setdsPro(json);
    } catch (e) {
      console.log(e);
    } finally {
      setisLoading(false);
    }
  };

  const renderPro = ({ item }) => {
    

    return (
      <View style={{ width: 200, height: 250 }}>
        <View style={st.b1}>
          <View style={st.v1}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: item.img }} />
          </View>
          <Text style={st.td}>ten sp: {item.name}</Text>
          <Text style={st.td}>gia sp: {item.price}</Text>
          <Text onPress={() => { props.navigation.navigate('ChiTiet', { item_sp: item }) }}>chi tiết</Text>
        </View>
      </View>
    );
  };

  const Reload = () => {
    const [reLoading, setreLoading] = useState(false);
    const reLoadData = React.useCallback(() => {
      setreLoading(true);
      getListPro();
      setTimeout(() => {
        setreLoading(false);
      }, 1500);
    });

    return (
      <SafeAreaView>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            
           numColumns={2}

        
            refreshControl={<RefreshControl refreshing={reLoading} onRefresh={reLoadData} />}
            data={filterProducts()}
            keyExtractor={(item_db) => item_db.id}
            renderItem={renderPro}
          />
        )}
      </SafeAreaView>
    );
  };

  const filterProducts = () => {
    if (searchText === "") {
      return dsPro;
    }
    return dsPro.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };
  const getLoginInfo = async () => {
    try {
        const value = await AsyncStorage.getItem('loginInfo')
        if (value !== null) {
            // láy được dữ liệu 
            setloginInfo(JSON.parse(value))
        }
    } catch (e) {

        console.log(e);
    }
}

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      // khi màn hình đc active thì lệnh hoạt động
      getListPro();
      getLoginInfo();
    });

    return unsubscribe;
  }, [props.navigation]);


//   const showAlertdx = () =>{
//     Alert.alert('chức năng đăng xuất ' ,'bạn có chắc muốn đăng xuất ?',
//     [
//         {
//             text:"yes",
//             onPress: ()=>{
//                 props.navigation.navigate('Home')
//             }

//         },

//         {
//             text:"thoát",
//             onPress: ()=>{

//             }
//         }

//     ])
// }
  return (
    <View style={st.container}>
      <View style={{flexDirection:'row'}}>
      <Ionicons name="md-person" size={40} color="#0066FF" style={{marginTop:20, }} />
 <Text style={{fontSize:20, marginRight:250, marginTop:30, marginLeft:10}} >Hi: <Text style={{color:'red', size:22}}>{loginInfo.tennguoimua}</Text>  </Text>
   
</View>
      <SafeAreaView>
        <TextInput
          placeholder="Search"
          clearButtonMode="always"
          style={st.searchBox}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setSearchText(text)}
        />
      </SafeAreaView>

      <Reload />
    </View>
  );
};

export default TrangChu;
