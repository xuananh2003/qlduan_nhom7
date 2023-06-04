import { StyleSheet } from "react-native";

const st = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFCC",
        alignItems: 'center',
        paddingTop: 20,



    },
    khung: {
        marginTop: 50,
        padding: 10,
        alignItems: 'center',

    },
    dangnhap: {
        fontSize: 35,
        color: 'red',
        fontWeight: 'bold',
        marginTop: 20
    },
    onhap: {
        height: 40,
        borderWidth: 1,
        width: 320,
        marginTop: 20,
        padding: 10,
        borderRadius: 20
    },
    onhap1: {
        height: 40,
        borderWidth: 1,
        width: 320,
        marginTop: 5,
        padding: 10,
        borderRadius: 20,
        marginTop: 10

    },
    login: {
        fontSize: 20,
        backgroundColor: '#0066FF',

        color: 'white',
        fontWeight: 'bold',
        width: 320,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 20,
        padding: 5


    },
    ciew1: {
        flexDirection: 'row'
    }
    ,
    fb: {
        width: 120,
        height: 32,
        backgroundColor: '#0066CC',
        color: 'white',
        textAlign: 'center',
        fontSize: 17,
        marginRight: 50,
        marginTop: 15,
        borderRadius: 20,
        padding: 4,
        fontWeight: 'bold'

    }
    , gg: {
        width: 120,
        height: 32,
        backgroundColor: '#FF0000',
        color: 'white',
        textAlign: 'center',
        fontSize: 17,
        marginTop: 15,
        borderRadius: 20,
        padding: 4,
        fontWeight: 'bold'

    }, b1: {
        borderWidth: 0.5,
        padding: 10,
        backgroundColor: '#FFCC66',
        margin: 5,


    },
    v1: {

        marginLeft: 0
    },
    td: {
        color: '#FF3333',
        fontSize: 20,

        fontWeight: 'bold'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
    countContainer: {
        alignItems: 'center',
        padding: 10,
    },
    countText: {
        color: '#FF00FF',
    },
    render_giohang: {
        backgroundColor: 'rgb(127, 255, 212)',
        marginTop: 20,
        flexDirection: 'row'
    },
    searchBox:{
paddingHorizontal:20,
paddingVertical:10,
borderColor:'black',
borderWidth:1,
borderRadius:8,
padding:5,
width:350,
marginBottom:20,
marginRight:50
    }

})

export default st