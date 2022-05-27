import React from "react";
import {View,Text} from 'react-native'


const MessageCard = ({messages}) => {
    return(
        <View>
            <Text>{messages.message}</Text>
            <Text>{messages.user}</Text>

        </View>
    )
}

export default MessageCard