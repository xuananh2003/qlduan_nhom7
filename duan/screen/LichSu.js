import React, { useState, useEffect } from "react";
import { Text, View, FlatList, Image, SafeAreaView, ActivityIndicator, RefreshControl, TextInput, TouchableOpacity } from "react-native";
import st from "../components/styles";
import Icon from "react-native-vector-icons/FontAwesome";
const LichSu = ({ }) => {
  const [isLoading, setisLoading] = useState(true);
  const [dsPro, setdsPro] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getListPro();
  }, []);

  const getListPro = async () => {
    const api_url_pro = 'http://192.168.1.41:3000/list_lichsu';
    try {
      const response = await fetch(api_url_pro);
      const json = await response.json();
      setdsPro(json);
      setFilteredData(json);
      setisLoading(false);
    } catch (e) {
      console.log(e);
      setisLoading(false);
    }
  };

  const renderPro = ({ item }) => {
    return (
      <View style={{ backgroundColor: '#C1C1C1', padding: 2, margin: 5,borderRadius:10,borderColor:'#B1B1B1',borderWidth:1 }}>
      <View style={{ padding: 10 }}>
        <Image
          style={{ width: 80, height: 85 }}
          source={{ uri: item.img_pro }}
        />
      </View>
      <View style={{ marginTop: 10, padding: 5 }}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20,borderRadius:10 }}> {item.tensp}</Text>
        <Text style={{ color: 'black' }}>Buyer: {item.tennguoimua}</Text>
        <Text style={{ color: 'black' }}>Phone: {item.sdt}</Text>
        <Text style={{ color: 'black' }}>Address: {item.diachi}</Text>
        <Text style={{ color: 'black' }}>Quantity: {item.soluong}</Text>
        <Text style={{ color: 'black' }}>Total: {item.giasp}</Text>
      </View>
    </View>
    );
  };

  const handleSearch = (text) => {
    setSearchText(text);
    const filteredItems = dsPro.filter((item) =>
      item.tennguoimua.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filteredItems);
  };

  const handleClearSearch = () => {
    setSearchText("");
    setFilteredData(dsPro);
  };

  const Reload = () => {
    const [reLoading, setreLoading] = useState(false);

    const reLoadData = async () => {
      setreLoading(true);
      await getListPro();
      setTimeout(() => {
        setreLoading(false);
      }, 1500);
    };

    return (
      <SafeAreaView>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
          style={{height:'90%'}}
            refreshControl={<RefreshControl refreshing={reLoading} onRefresh={reLoadData} />}
            data={filteredData}
            keyExtractor={(item_ls) => item_ls.id}
            renderItem={renderPro}
          />
        )}
      </SafeAreaView>
    );
  };

  return (
    <View style={{marginTop:35}}>
    <View><Text style={{fontWeight:'bold',fontSize:25,marginStart:10}}>Purchase History</Text></View>
    <View
    style={{
      flexDirection: 'row',
      borderWidth: 1,
      borderBottomWidth: 1,
      justifyContent: "center",
      alignItems: "center",
      width: "90%",
     height: 42,
      marginTop: 10,
      borderRadius: 15,
      marginBottom:10,
      alignSelf:'center'
    }}
  >
    <Icon
      name="search"
      size={20}
      color="rgba(0, 0, 0, 0.4)"
      style={{ position: 'absolute', left: 10, top: 10, }}
    />
    <TextInput
    value={searchText}
    onChangeText={handleSearch}
      style={{ width: '80%', marginLeft: '10%', height: '85%', color: '#000', fontSize: 20 }}
      placeholder="Search"
    />
    <Icon name="ellipsis-h" size={20} style={{ marginRight: 15 }} />
  </View>
      <Reload />
    </View>
  );
};

export default LichSu;
