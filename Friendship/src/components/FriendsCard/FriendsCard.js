import React from "react";
import {View,Text, TouchableOpacity} from 'react-native'
import styles from './FriendsCard.style'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const FriendsCard = ({friend,sendMessage}) => {
    return(
        <View style={styles.container} >
            <View style={styles.inner_container}>
            <FontAwesome5 name="user-friends" color={'#000080'} size={24} />
            <Text style={styles.user_text} >{friend.id}</Text>
            </View>
            <TouchableOpacity onPress={() =>sendMessage(friend?.id)} style={styles.button} >
                <Text style={styles.button_text}  >Send Message</Text>
            </TouchableOpacity>
            
        </View>
    )
}
export default FriendsCard