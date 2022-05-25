import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './FriendRequestCard.style'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const FriendRequestCard = ({ addeduser,handleAccept,handleReject }) => {
    return (
        <View style={styles.container} >
            <View style={styles.innercontainer} >
                <FontAwesome5 name="user-plus" size={20} color='tomato' />
                <Text style={styles.user_text} >{addeduser.id}</Text>
            </View>
            <View style={styles.buttoncontainer} >
            <TouchableOpacity 
            onPress={() => handleAccept(addeduser?.id)}
            style={styles.acceptbutton} >
                <Text style={styles.button_text} >Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() =>handleReject(addeduser?.id)}
            style={styles.rejectbutton} >
                <Text style={styles.button_text} >Reject</Text>
            </TouchableOpacity>
            </View>

        </View>
    )
}

export default FriendRequestCard;