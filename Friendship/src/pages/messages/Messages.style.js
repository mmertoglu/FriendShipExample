import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffe9e6'
    },
    header_container: {
        backgroundColor: '#248f24',
        padding: 10,
        flexDirection: 'row',

        justifyContent: 'space-between'
    },
    header_text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10
    },
    footer_container: {
        flexDirection: 'row',
        marginBottom:5,
        alignItems: 'center',
        justifyContent: 'space-around',
        width:'100%',
        alignSelf:'center'
        
    },
    input: {
        borderRadius:20,
        backgroundColor: 'white',
        width:'88%'
        
        
    },
    send_button: {
        backgroundColor: '#248f24',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        elevation:8,
        marginRight:5
        
    },
    user_image: {
        width: 40,
        height: 40,
        borderRadius: 50
    },
    header_inner_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    header_inner_container2: {
        flexDirection: 'row',
        width: 80,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input_container:{
        flexDirection:'row',
        backgroundColor:'white',
        width:'80%',
        borderRadius:20,
        paddingLeft:10,
        alignItems:'center'
    }
})