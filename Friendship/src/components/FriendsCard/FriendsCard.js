import React from "react";
import {View,Text} from 'react-native'
import styles from './FriendsCard.style'

const FriendsCard = ({friend}) => {
    return(
        <View style={styles.container} >
            <Text>{friend.id}</Text>
        </View>
    )
}
export default FriendsCard