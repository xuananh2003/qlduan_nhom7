import { StyleSheet } from "react-native";

const st = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFCC",
        alignItems: 'center',


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

    },
})

export default st