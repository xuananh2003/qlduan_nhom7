import { Button, Modal, View, TextInput, TouchableHighlight, Text, touch } from "react-native";


import { useState } from "react";
import st from "./styles";
import DropDownPicker from "react-native-dropdown-picker";

const Add = () => {
    const [showDialog, setshowDialog] = useState(false);
    const [name, setname] = useState('');
    const [img, setimg] = useState('');
    const [description, setdescription] = useState('');

    // const myArray = [S, M, L];



    const [open, setOpen] = useState(false);  // sổ list xuống hay không
    const [value, setValue] = useState(null);  // giá trị người dùng chọn
    const [size, setsize] = useState([    // mảng các phần tử
      {label: 'S', value: 1 , disabled: true},
      {label: 'L', value: 2 , disabled: true},
      {label: 'M', value: 3 , disabled: true}
    ]);

    const [price, setprice] = useState('');



    const SavePro = () => {
        let objPro = { name: name, img: img, description: description, price: price, size: size }
        let url_api = 'http://10.24.57.251:3000/list_pro';

        fetch(url_api, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(objPro)
        }).then((res) => {
            if (res.status == 201)
                alert("them thanh cong")
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
                    <Text style={{ fontSize: 30, color: 'red', padding: 10, fontWeight: 'bold' }}>chức năng thêm</Text>

                    <TextInput style={st.o} placeholder="nhap ten san pham" onChangeText={(txt) => setname(txt)} />
                    <Text
                        style={{
                            fontSize: 11,
                            color: 'red',
                            marginLeft: 10
                        }}>{name.length == 0 ? "không được để trống tên" : ""}

                    </Text>
                    <TextInput style={st.o} placeholder="nhap  gia san pham" onChangeText={(txt) => setprice(txt)} />
                    <Text
                        style={{
                            fontSize: 11,
                            marginLeft: 10,
                            color: "red",
                        }}
                    >{price.length <= 0 ? "Không được để chống giá " : isNaN(price) ? "Giá phải là chữ số" : ""}</Text>
                    <TextInput style={st.o} placeholder="nhap danh gia cho san pham" onChangeText={(txt) => setdescription(txt)} />
                    <Text
                        style={{
                            fontSize: 11,
                            color: 'red',
                            marginLeft: 10
                        }}>{name.length == 0 ? "không được để trống " : ""}

                    </Text>
                    {/* {myArray.map((item) => (
                        <Text key={item}>{item}</Text>
                    ))} */}
                    <View style={st.i}>
                        <DropDownPicker
    title="chon size"
      open={open}
      value={value}
      items={size}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setsize}
      placeholder="tất cả các size "
      defaultValue={null}
    />



                    </View>
                    <TextInput style={st.o} placeholder="them dia chi anh" value={img} onChangeText={(value) => setimg(value)} />


                    <TouchableHighlight activeOpacity={0.6} underlayColor="#ccc" style={st.btnchonanh} onPress={SavePro}>
                        <Text style={{ fontSize: 20, textAlign: 'center' }}>save </Text>
                    </TouchableHighlight>
                </View>


            </Modal>
        
            <Text style={{margin:5, fontWeight:'bold', backgroundColor:'blue', width:50, height:50, textAlign:'center',paddingTop:14, borderRadius:50}} onPress={() => setshowDialog(true)}>+</Text>
            
        </View>
    )





}

export default Add;