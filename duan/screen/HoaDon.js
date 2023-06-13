import { Text, View, FlatList, ActivityIndicator, Image } from "react-native";
import st from "../components/styles";
import { useState } from "react";
import React from "react";

const HoaDon = (props) =>{
    const [dsPro, setdsPro] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    
    const getListPro = async () => {
        let url_api_hoadon = 'http://192.168.1.41:3000/list_hoadon'

        try {
            const response = await fetch(url_api_hoadon);
            const json = await response.json();
            setdsPro(json);
        } catch (e) {
            console.log(e);
        } finally {
            setisLoading(false)

        }
    }

    const render_HoaDon = ({item}) =>{
return(
    <View style={{backgroundColor:'yellow', padding:2, margin:10}}>
    <View style={{ padding: 10 }}>
                    <Image
                        style={{ width: 80, height: 85 }}
                        source={{ uri: item.img_pro }} /></View>
                <View style={{ marginTop: 10, padding: 5 }}>
                    <Text>tên sản phẩm : {item.tensp}</Text>
                    
                    <Text>ten nguoi mua : {item.tennguoimua}</Text>
                    <Text>sdt : {item.sdt}</Text>
                    <Text>dia chi : {item.diachi}</Text>
                    <Text>so luong : {item.soluong}</Text>
                    <Text>tong : {item.giasp}</Text>

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


    return(
        <View style={st.container}>

            <Text>HoaDon</Text>
            {
                (isLoading) ? (
                    <ActivityIndicator />
                ) : (
                    <FlatList
                        data={dsPro}
                        keyExtractor={(item_sp) => { return item_sp.id }}
                        renderItem={render_HoaDon}
                    />

                )
            }
        </View>
    )
}

export default HoaDon