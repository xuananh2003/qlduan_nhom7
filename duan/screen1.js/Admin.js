import { Text, View, SafeAreaView,Image, TextInput,TouchableHighlight, ActivityIndicator, FlatList, Button } from "react-native";
import st from "../components/styles";
import { useState, useEffect } from "react";
import React from "react";
import { RefreshControl } from "react-native-gesture-handler";
import Add from "../components/Add";
import Update from "../components/Update";
import { Alert } from "react-native";




const Admin = (props) =>{

  const [isLoading, setisLoading] = useState(true);
  const [dsPro, setdsPro] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getListPro = async () => {
    let api_url_pro = 'http://172.16.10.100:3000/list_pro';
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
    const DelPro = () =>{
      let url_api_del = 'http://172.16.10.100:3000/list_pro/' +item.id ;
  
      
  
      fetch(url_api_del,{
  
       method: 'DELETE',
                  headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                  }
              }).then((res)=>{
                  if(res.status ==200){
                      alert("đã xóa");
                      getListPro();
                  }
              })
              .catch((e)=>{
                  console.log(e);
              })
     }
     const showAlert = () =>{
      Alert.alert('chức năng xóa ' ,'bạn có chắc muốn xóa người này ?',
      [
          {
              text:"xóa",
              onPress: ()=>{
                  DelPro();
              }
  
          },
  
          {
              text:"thoát",
              onPress: ()=>{
  
              }
          }
  
      ])
  }
    return (
      <View style={{ width: 200, height: 400,  }}>
        <View style={st.b1}>
        <View style={st.v1}>
            <Image style={{ width: 170, height: 160 }} source={{ uri: item.img }} />
          </View>
          <Text style={st.td}> {item.name}</Text>
          <Text style={st.td}> $: {item.price}</Text>
      <Update item_db={item} />
      <TouchableHighlight
            activeOpacity={0.6} underlayColor="#ccc" style={st.del} onPress={DelPro}>
            <Text style={{ fontSize: 20, textAlign: 'center' }} >xóa </Text>
          </TouchableHighlight>
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
        <Add/>
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

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      // khi màn hình đc active thì lệnh hoạt động
      getListPro();
    });

    return unsubscribe;
  }, [props.navigation]);

  return (
    <View style={st.container}>
 <Text style={{fontSize:20, fontWeight:'bold'}}>Màn hình của Admin</Text>
 <View style={{marginRight:300, marginTop:20}}>
 <Button title="đăng xuất" onPress={()=>{props.navigation.navigate('DangNhap')}}/></View>
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
    )
}

export default Admin 