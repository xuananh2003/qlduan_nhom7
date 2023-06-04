import { View, Text, Image, ActivityIndicator, FlatList,TextInput, Button, TouchableHighlight, RefreshControl, SafeAreaView } from "react-native";
import st from "../components/styles";
import { useState } from "react";
import React from "react";







const TrangChu = (props) => {
    const [isLoading, setisLoading] = useState(true);
    const [dsPro, setdsPro] = useState([]);


    const getListPro = async () => {
        let api_url_pro = 'http://172.16.10.106:3000/list_pro'
        try {
            const response = await fetch(api_url_pro);
            const json = await response.json();
            setdsPro(json);
        } catch (e) {
            console.log(e);
        } finally {
            setisLoading(false)
        }
    }

    const renderPro = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', width: 200, flexWrap: 'wrap', display: 'flex', borderWidth:1 }}>
               
                <View style={st.b1}>
                    <View style={st.v1}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={{ uri: item.img_pro }} />
                    </View>

                    <Text style={st.td}>ten sp: {item.tensp}</Text>
                    <Text style={st.td}>gia sp:  {item.giasp}</Text>


                    <Text onPress={() => { props.navigation.navigate('ChiTiet', { item_sp: item }) }}>chi tiết</Text>

                </View>

            </View>
        )
    }

    const Reload = () => {
        const [reLoading, setreLoading] = useState(false);
        const reLoadData = React.useCallback(() => {
            setreLoading(true)
            getListPro();
            setTimeout(() => {
                setreLoading(false)
            }, 1500);
        })
        return (
            <SafeAreaView>

                {
                    (isLoading) ? (<ActivityIndicator />) : (
                      
                        <FlatList

                            refreshControl={

                                <RefreshControl refreshing={reLoading}
                                    onRefresh={reLoadData} />
                            }
                            data={dsPro}
                                 
                            keyExtractor={(item_db) => { return item_db.id }}
                            renderItem={renderPro} />
                           
                    )
                }

            </SafeAreaView>
        )

    }
    React.useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            // khi màn hình đc active thì lệnh hoạt động

            getListPro();
        });

        return unsubscribe;
    }, [props.navigation]);






    return (
        <View style={st.container}>
            <SafeAreaView>
              <TextInput 
              
              placeholder="Search" 
              clearButtonMode="always"
              style={st.searchBox}
              autoCapitalize="none"
              autoCorrect={false}
              
              />
    </SafeAreaView>

            <Reload />

        </View>
    )
}

export default TrangChu