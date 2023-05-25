import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
export default function HomeScreen({ navigation }) {
  return (
    <View style={{ marginTop: 20 }}>
      {/* Nội dung màn hình hiện tại */}
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
        <View style={{ flex: 1 }}></View>
        <View
          style={{
            alignSelf: "center",
            justifyContent: "flex-end",
            marginRight: 20,
          }}
        >
        
      
        <Image source={{uri:'https://lh3.googleusercontent.com/C66JC4hTzdI0CvH364WgkTyGEZrHl2xqDfMUG-1pykcutRG2R_ghB54h5OqjTuDa4apkeY7iuyfRNgc6Jrjvr2k-bBOpeQItdoFyLcVqL03u_Sylf3y0WSD1qOulRc69Oaq55GhaMRMZ4b95k3gxpvcU3UTqJcZz9MhX2LIl9rugfVczsVwk8eHuZlXBy03_lMpytbPEfpp_SZ6CNMYMdbjBbAI3-jA8p4SociW1uDdu-t-714u-vrlbjfh5bArgrU27sC7lY-OzINYURDnFZcJKTON2m4bUKwMQSrbPM93jY_MCpEbeH-itPIRtN1XaLX0pwiCmADyXFjSWtI0hveyGNYgILZpTJmlLNmkUPM0Z4bf0ayLG7Sh68mRIiQK8yoo1CCp24rSG8eyi-g0rZRR3O4GOV2RS8gxQ7Nn6ptcrAqU-0KfI8VdUk4Xie7508ZgoKkB-jLqgGlWwWuy19MzYNGtY9lMVGnRCq_n9dhN5uYu6gWsitBpVYTc392cEPzSItyaPWYmPwUX_5SHH3yhrKSHmwc4NOVM4xA5Ow-XB1SZ8eIN6z4Qk36CFK76ocU_BukwpkDWu5kkzuwCYCWDJNAxltO3PPayfh4FiBMEEEvb9wYMwP-RRrGoM6lSqCVOo9RbJhLaBoi_woEUOsUu1F7i8ep4CrcGZDKV-R6YPkwjKSd5ADTdXaIBgvEfY5rB1xFINHfVNzJnCn4LbW3q11Y813AzCb4F4KrQ4pwpYOPdOU1awA9hhJWx3O8HTrRHt530GYKhwADzgMcqUOWS2mjiAkHuKSb-xaIKIKwgMk_iZ-yY4SC49Me7tqjIfo3gaw585h40Qoi2wDaqks6le9xbyB-5RrrVIhig9J_UQpJ9vZLcH5daYjCyUMppC-p4OTuCnN0JCzfbwKnn41L_ZbW9HCVQ46clkgw5JrmpzbKrOKNxD_fOGgUEvM46z9uBark1zMMQcbFBEEGjAN7zkpp9OKnGTGkeinjRhEKB3EyBs-dSaRCg'}} style={{  width: 20,
        height:20,}}/>
        </View>
      </View>
      <View style={{ marginLeft: 20, marginTop: 30 }}>
        <Text style={{ fontSize: 27, fontWeight: "bold" }}>
          Find the best fit for{" "}
        </Text>
        <Text style={{ fontSize: 27, fontWeight: "bold" }}>
          all your needs!
        </Text>
        <View
          style={{
            flexDirection:'row',
            borderWidth: 1,
            borderBottomWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            height: "25%",
            marginTop: 10,
            borderRadius: 15,
          }}
        >  
        <Icon name="search" size={20} color="rgba(0, 0, 0, 0.4)" style={{ position: 'absolute', left: 10, top: 10 }} />
<TextInput style={{width:'80%',marginLeft:'10%',height:'85%',color:'#000',fontSize:20}} placeholder="Search"/>
<Icon name="ellipsis-h" size={20} style={{ marginRight:15}} />
        </View>
      </View>
    </View>
  );
}
