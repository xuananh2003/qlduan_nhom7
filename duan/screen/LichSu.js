import { Text, View , ActivityIndicator, FlatList, Image} from "react-native";
import st from "../components/styles";
import { useState } from "react";
import React from "react";

const LichSu = (props) =>{
    const [dsPro, setdsPro] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    
    const getListPro = async () => {
        let url_api_hoadon = 'http://172.16.10.106:3000/list_hoadon'

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
            <View style={{backgroundColor:'yellow', padding:2, margin:10,  flexDirection:'row'}}>
            <View style={{ padding: 10 }}>
                            <Image
                                style={{ width: 80, height: 85 }}
                                source={{ uri: item.img }} /></View>
                        <View style={{ marginTop: 10, padding: 5 }}>
                            <Text>tên sản phẩm : {item.name}</Text>      
                            <Text>so luong : {item.soluong}</Text>
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

            <Text>Lich su</Text>

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

export default LichSu