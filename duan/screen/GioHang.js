import { Text, View, ActivityIndicator, FlatList, Image, Button, Alert, TouchableOpacity } from "react-native";
import st from "../components/styles";
import { useState } from "react";
import React from "react";

const GioHang = (props) => {

    const [dsPro, setdsPro] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [selectedItems, setSelectedItems] = useState([]);

    const getListPro = async () => {
        let url_api_giohang = 'http://192.168.1.41:3000/list_giohang'

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

    const selectAllItems = () => {
        setSelectedItems(dsPro);
    };

    const buyAllItems = () => {
        selectedItems.forEach((item) => {
            props.navigation.navigate('DonMua', { item_chitiet: item });
        });
    };

    const renderPro = ({ item }) => {

        const DelPro = () => {
            let url_api_del = 'http://192.168.0.127:3000/list_giohang/' + item.id;

            fetch(url_api_del, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then((res) => {
                if (res.status == 200) {
                    alert("đã xóa");
                    getListPro();
                }
            })
                .catch((e) => {
                    console.log(e);
                })
        }

        const showAlert = () => {
            Alert.alert('chức năng xóa ', 'bạn có chắc muốn xóa và không mua sản phẩm này ?',
                [
                    {
                        text: "xóa",
                        onPress: () => {
                            DelPro();
                        }

                    },

                    {
                        text: "thoát",
                        onPress: () => {

                        }
                    }

                ])
        }

        const isSelected = selectedItems.some((selectedItem) => selectedItem.id === item.id);

        return (
            <View
                style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    backgroundColor: isSelected ? '#FF0000' : '#B1B1B1',
                    flexDirection: 'row',
                    padding: 5,
                    alignItems: 'center',
                    marginTop: 10,
                }}
            >
                <View style={{ padding: 10 }}>
                    <Image
                        style={{ width: 80, height: 85 }}
                        source={{ uri: item.img_pro }} /></View>
                <View style={{ width: 200, height: 80, marginTop: 10, }}>
                    <Text>tên sản phẩm : {item.tensp}</Text>
                    <Text>giá : {item.giasp}</Text>

                </View>
                <View >
                    <TouchableOpacity style={{ borderWidth: 1, borderRadius: 10, height: 30, width: 60, justifyContent: 'center', alignItems: 'center' }} onPress={() => { props.navigation.navigate('DonMua', { item_chitiet: item }) }}>
                        <Text style={{ fontWeight: 'bold' }}>Order</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderWidth: 1, borderRadius: 10, height: 30, width: 60, justifyContent: 'center', alignItems: 'center', marginTop: 10 }} onPress={showAlert}>
                        <Text style={{ fontWeight: 'bold' }}>Delete</Text>
                    </TouchableOpacity>

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
        <View style={{ marginTop: 35 }}>
            <Text style={{ fontSize: 35, marginLeft: 20 }}>Cart</Text>
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

export default GioHang;