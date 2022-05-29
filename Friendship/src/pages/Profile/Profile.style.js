import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'white',
        padding:10, zIndex:1
    },
    inner_container:{
        alignItems:'center',
        marginTop:40,
        borderRadius:160,
        width:160,
        height:160,
        alignSelf:'center',
        padding:20,
        borderWidth:2,
        borderColor:'#000080',
        zIndex:0
        
    },
    user_text:{
        alignSelf:'center',
        marginTop:20,
        fontSize:30,
        color:'black',
        fontStyle:'italic',
        fontWeight:'bold',
        zIndex:1
    },
    line_container:{
        width:'100%',
        height:1,
        borderColor:'black',
        borderWidth:1,
        marginTop:20,
        zIndex:1
    },
    updatebutton:{
        backgroundColor:'white',
        marginTop:30,
        alignSelf:'center',
        padding:10,
        borderRadius:8,
        elevation:8,
        zIndex:1
    },
    updatetext:{
        fontSize:16,
        color:'tomato',
        fontWeight:'bold', 
        zIndex:1
    },
    addphotoicon:{
        position:'absolute',
        top:200,
        left:230,
        zIndex:1
        
    },
    image:{
        width:100,
        height:100
    }
})