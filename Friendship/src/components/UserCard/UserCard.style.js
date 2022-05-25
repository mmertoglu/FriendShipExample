import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:20,
        backgroundColor:'white',
        padding:10,
        justifyContent:'space-between'
    },
    text:{
        marginLeft:10,
        fontSize:16,
        color:'black'
    },
    innercontainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    add_friend_button:{
        backgroundColor:'tomato',
        paddingHorizontal:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        elevation:10
    },
    buttontext:{
        color:'white',
        fontWeight:'bold'
    }
})