import React,{useEffect,useState} from "react";
import {View,Text, FlatList} from 'react-native'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';
import ParseContent from '../../utils/ParseContent'

const Friends = () => {
    const [friendsList,setFriendList] = useState([])
    const usermail = auth().currentUser.email.split('@', 1).toString()
    useEffect(() => {
        database().ref('users/'+usermail+'/friends/').once('value', snapshot => {
            console.log(usermail)
            console.log(snapshot.val())
            const newContentData = snapshot.val();
            const ParsedData = ParseContent(newContentData)
            console.log(ParsedData)
            setFriendList(ParsedData)
            console.log(ParsedData)
        })
    }, [])
    return(
        <View>
            <Text>Friends Page</Text>
            <FlatList
            data={friendsList}
            renderItem={({item}) => <Text>{item.id}</Text>}
            />
        </View>
    )
}
export default Friends