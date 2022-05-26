import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        margin:10,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'tomato',
        borderRadius:8
    },
    user_text:{
        fontSize:16,
        color:'white',
        marginLeft:5,
        fontWeight:'bold'
    },
    inner_container:{
        flexDirection:'row'
    },
    button:{
        backgroundColor:'#000080',
        padding:4,
        borderRadius:8,
        elevation:8
    },
    button_text:{
        color:'white',
        fontSize:14
    }
    
})