import { Button, Modal, View, TextInput, TouchableHighlight, Text , Image} from "react-native";


import { useState } from "react";
import st from "./styles";


const Update = (props) => {
    const [showDialog, setshowDialog] = useState(false);
    const [name, setname] = useState(props.item_db.name);
    const [img, setimg] = useState(props.item_db.img);
    const [description, setdescription] = useState(props.item_db.description);


    const [price, setprice] = useState(props.item_db.price);



    const SavePro = () => {
        let _idPro = props.item_db.id
        let objPro = { name: name, img: img, description: description,  price: price}
        let url_api = 'http://172.16.10.100:3000/list_pro/' +_idPro;

        fetch(url_api, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(objPro)
        }).then((res) => {
            if (res.status == 200)
                alert("sua thanh cong")
        })
            .catch((e) => {
                console.log(e);
            })


    }



    return (
        <View>
            <Modal visible={showDialog}
                onRequestClose={
                    () => { setshowDialog(false); }
                }
                transparent={true}
                animationType="slide">

<View style={st.them}>
<Text style={st.x} onPress={() => { setshowDialog(false) }}>X</Text>
<Text style={{ fontSize: 30, color: 'red', padding: 10, fontWeight: 'bold' }}>chức năng sửa</Text>

<TextInput style={st.o} placeholder="nhap ten san pham" onChangeText={(txt) => setname(txt)} value={name} />
<Text
            style={{
              fontSize: 11,
              color: 'red',
              marginLeft: 10
            }}>{name.length == 0 ? "không được để trống tên" : ""}

          </Text>
<TextInput style={st.o} placeholder="nhap  gia san pham" onChangeText={(txt) => setprice(txt)} value={price} />
<Text
            style={{
              fontSize: 11,
              marginLeft: 10,
              color: "red",
            }}
          >{price.length <= 0 ? "Không được để chống giá " : isNaN(price) ? "Giá phải là chữ số" : ""}</Text>
<TextInput style={st.o} placeholder="nhap danh gia cho san pham" onChangeText={(txt) => setdescription(txt)} value={description} />
<Text
            style={{
              fontSize: 11,
              color: 'red',
              marginLeft: 10
            }}>{name.length == 0 ? "không được để trống " : ""}

          </Text>

          <TextInput style={st.o} placeholder="them dia chi anh" value={img} onChangeText={(value) => {setimg(value)}} />


          <TouchableHighlight activeOpacity={0.6} underlayColor="#ccc" style={st.btnchonanh} onPress={SavePro}>
                        <Text style={{ fontSize: 20, textAlign: 'center' }}>save </Text>
                    </TouchableHighlight>
</View>


            </Modal>

            <TouchableHighlight
            activeOpacity={0.6} underlayColor="#ccc" style={st.del}  onPress={() => setshowDialog(true)}>
            <Text style={{ fontSize: 20, textAlign: 'center' }} >Update </Text>
          </TouchableHighlight>
        </View>
    )





}

export default Update;