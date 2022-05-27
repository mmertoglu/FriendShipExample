import React from "react";
import {View,Text} from 'react-native'
import styles from './MessageCard.style'


const MessageCard = ({messages,currentUser}) => {
    const whosend = currentUser ==messages.user;
    return(
        <View style={whosend? styles.container1 : styles.container2}>
            <Text  >{messages.message}</Text>
        </View>
    )
}

export default MessageCard