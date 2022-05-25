import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'tomato',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    input:{
        borderBottomColor:'white',
        borderBottomWidth:1,
        color:'white',
        width:'70%'
    },
    loginbutton:{
        backgroundColor:'white',
        padding:10,
        borderRadius:8,
        elevation:8,
        marginTop:40,
        width:'70%',
        alignItems:'center'
    },
    login_button_text:{
        color:'tomato',
        fontSize:16,
        fontWeight:'bold'
    }
})