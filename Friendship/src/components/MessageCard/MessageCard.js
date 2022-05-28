import React from "react";
import {View,Text,Image} from 'react-native'
import styles from './MessageCard.style'


const MessageCard = ({messages,currentUser}) => {
    const whosend = currentUser ==messages.user;
    return(
        <View style={whosend? styles.container1 : styles.container2}>
            <Text  >{messages.message}</Text>
            {messages.image && 
            <Image
            source={{uri:messages.image}}
            style={styles.image}
            />
            }
        </View>
    )
}

export default MessageCard