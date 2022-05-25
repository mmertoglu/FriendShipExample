import React from "react";
import {View,Text,Image,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './UserCard.style'

const UserCard = ({user,handleAddFriend}) => {
    return(
        <View style={styles.container} >
           <View style={styles.innercontainer} >
            <Icon name="user-circle" size={40} color='tomato' />
            <Text style={styles.text} >{user.id}</Text>
            </View>
            <TouchableOpacity onPress={() => handleAddFriend(user?.id)} style={styles.add_friend_button} >
                <Text style={styles.buttontext} >Add Friend</Text>
            </TouchableOpacity>
        </View>
    )
}
export default UserCard