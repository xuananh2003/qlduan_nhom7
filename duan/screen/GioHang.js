import { Text, View, ActivityIndicator, FlatList, Image, Button, Alert } from "react-native";
import st from "../components/styles";
import { useState } from "react";
import React from "react";

const GioHang = (props) => {

    const [dsPro, setdsPro] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getListPro = async () => {
        let url_api_giohang = 'http://172.16.10.106:3000/list_giohang'

        try {
            const response = await fetch(url_api_giohang);
            const json = await response.json();
            setdsPro(json);
        } catch (e) {
            console.log(e);
        } finally {
            setisLoading(false)

        }
    }

    const renderPro = ({ item }) => {
        const DelPro = () =>{
            let url_api_del = 'http://172.16.10.106:3000/list_giohang/' +item.id ;

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
              const DelProo = () =>{
                let url_api_del = 'http://172.16.10.106:3000/list_giohang/' +item.id ;
    
                fetch(url_api_del,{
    
                    method: 'DELETE',
                               headers: {
                                   Accept: 'application/json',
                                   'Content-Type': 'application/json',
                               }
                           }).then((res)=>{
                               if(res.status ==200){
                                   getListPro();
                               }
                           })
                           .catch((e)=>{
                               console.log(e);
                           })
                  }
              const showAlert = () =>{
                Alert.alert('chức năng xóa ' ,'bạn có chắc muốn xóa và không mua sản phẩm này ?',
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
            <View style={st.render_giohang}>
                <View style={{ padding: 10 }}>
                    <Image
                        style={{ width: 80, height: 85 }}
                        source={{ uri: item.img_pro }} /></View>
                <View style={{ width: 200, height: 80, marginTop: 10, padding: 5 }}>
                    <Text>tên sản phẩm : {item.tensp}</Text>
                    <Text>gía : {item.giasp}</Text>

                </View>
                <View style={{ padding: 5 }}>
                    <Button title="đặt mua" onPress={()=>{props.navigation.navigate('DonMua', {item_chitiet : item}, DelProo())}} />
                    <Button title="xóa" onPress={showAlert}/>
                    
                </View>
            </View>
        )
    }

    React.useEffect(() => {
        const unsubcribe = props.navigation.addListener('focus', () => {
            getListPro();
        });
        return unsubcribe
    }, [props.navigation]);



    return (
        <View style={st.container}>
            <Text style={{ fontSize: 50 }}>Giỏ hàng</Text>
            {
                (isLoading) ? (
                    <ActivityIndicator />
                ) : (
                    <FlatList
                        data={dsPro}
                        keyExtractor={(item_sp) => { return item_sp.id }}
                        renderItem={renderPro}
                    />

                )
            }
        </View>
    )
}

export default GioHang