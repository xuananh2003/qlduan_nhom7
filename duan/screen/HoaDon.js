import { Text, View, FlatList, ActivityIndicator, Image } from "react-native";
import st from "../components/styles";
import { useState } from "react";
import React from "react";

const HoaDon = (props) =>{
    const [dsPro, setdsPro] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    
    const getListPro = async () => {
        let url_api_hoadon = 'http://10.24.57.251:3000/list_hoadon'

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
    <View style={{    backgroundColor:'#DDEEFF', padding: 2, margin: 10, flexDirection: 'row' , width:380, borderRadius:10}}>
    <View style={{ padding: 10 }}>
                    <Image
                        style={{ width: 120, height: 145 }}
                        source={{ uri: item.img }} /></View>
                <View style={{ marginTop: 10, padding: 5 }}>
                <Text style={{fontWeight:'bold', fontSize:18, color:'red'}}>Tên sản phẩm: {item.name}</Text>
                    
                    <Text>ten nguoi mua : {item.tennguoimua}</Text>
                    <Text>sdt : {item.phone}</Text>
                    <Text>dia chi : {item.address}</Text>
                    <Text>so luong : {item.soluong}</Text>
                    <Text>size : {item.size}</Text>
                    <Text>tong : {item.price}</Text>

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