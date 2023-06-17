import { View, Text, Image, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState, useEffect } from "react";
import { SafeAreaView, ActivityIndicator, FlatList, RefreshControl } from "react-native";
import st from "../components/styles";

const TrangChu = (props) => {
  const [isLoading, setisLoading] = useState(true);
  const [dsPro, setdsPro] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getListPro = async () => {
    let api_url_pro = 'http://192.168.1.41:3000/list_pro';
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
      <View style={{ backgroundColor: '#C1C1C1', padding: 2, margin: 10,borderRadius:10,borderColor:'#B1B1B1',borderWidth:1 }}>
      <View style={{ padding: 10 }}>
        <Image
          style={{ width: 80, height: 85 }}
          source={{ uri: item.img_pro }}
        />
      </View>
      <View style={{ marginTop: 10, padding: 5 }}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20,borderRadius:10 }}> {item.tensp}</Text>
        <Text style={{ color: 'black' }}>Total: {item.giasp}</Text>
        <Text  style={{ color: 'black',fontWeight:'bold' }} onPress={() => { props.navigation.navigate('ChiTiet', { item_sp: item }) }}>chi tiết</Text>
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
      item.tensp.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      getListPro();
    });

    return unsubscribe;
  }, [props.navigation]);

  return (
    <View style={{ marginTop: 20 }}>

      <View style={{ height: 80, flexDirection: "row" }}>

        <View style={{ flexDirection: "row", marginLeft: 20 }}>
          <Image
            style={{
              width: 50,
              height: 50,
              alignSelf: "center",
              borderRadius: 40,
            }}
            source={{ uri: "https://picsum.photos/id/237/200/300" }}
          />
          <Text style={{ alignSelf: "center", marginLeft: 10 }}>Hi, </Text>
          <Text style={{ alignSelf: "center" }}>Xuân anh</Text>
        </View>
        <View
        style={{
          alignSelf: "center",
          justifyContent: "flex-end",
          marginRight: 20,
        }}
      >
        <Image
          source={{source: require('../assets/shopping-cart.png')}}
          style={{ width: 20, height: 20 }}
        />
      </View>

        <View style={{ flex:1  }}></View>
      
        
      </View>
      <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text style={{ fontSize: 27, fontWeight: "bold" }}>
          Find the best fit for{" "}
        </Text>
        <Text style={{ fontSize: 27, fontWeight: "bold" }}>
          all your needs!
        </Text>
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
          }}
        >
          <Icon
            name="search"
            size={20}
            color="rgba(0, 0, 0, 0.4)"
            style={{ position: 'absolute', left: 10, top: 10, }}
          />
          <TextInput
            onChangeText={(text) => setSearchText(text)}
            style={{ width: '80%', marginLeft: '10%', height: '85%', color: '#000', fontSize: 20 }}
            placeholder="Search"
          />
          <Icon name="ellipsis-h" size={20} style={{ marginRight: 15 }} />
        </View>
      </View>
    
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
        style={{height:'85%'}}
          data={filterProducts()}
          keyExtractor={(item_db) => item_db.id.toString()}
          renderItem={renderPro}
        />
      )}
      </View>

  );
}
export default TrangChu;
