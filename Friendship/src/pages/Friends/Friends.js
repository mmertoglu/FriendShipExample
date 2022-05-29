import React,{useEffect,useState} from "react";
import {View,Text, FlatList} from 'react-native'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';
import ParseContent from '../../utils/ParseContent'
import FriendsCard from "../../components/FriendsCard/FriendsCard";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import styles from './Friends.style'
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
const Friends = (props) => {
    const [friendsList,setFriendList] = useState([])
    const usermail = auth().currentUser.email.split('@', 1).toString()
    useEffect(() => {
        database().ref('users/'+usermail+'/friends/').on('value', snapshot => {          
            const newContentData = snapshot.val();
            const ParsedData = ParseContent(newContentData)
            setFriendList(ParsedData)
        })
    }, [])

    const sendMessage = (friendId) => {
        props.navigation.navigate('MessagesScreen',{friendId:friendId})
    }

    const renderItem = ({item,index}) => <FriendsCard friend={item} index={index} sendMessage={sendMessage} />
    return(
        <View>
             <View style={styles.headercontainer} >
            <FontAwesome5 name="house-user" size={30} color='gray'  />
            <FontAwesome5 name="user-plus" size={30} color='gray' 
            onPress={() => props.navigation.navigate('FriendshipRequestScreen')}  />
            <FontAwesome5 name="user-friends" size={30} color='tomato' 
            onPress={() => props.navigation.navigate('FriendsScreen')}
            />
             <MaterialCommunity name="face-man-profile" size={30} color='gray' 
            onPress={() => props.navigation.navigate('ProfileScreen')}
            />
            </View>
            <Text style={styles.header_text} >Friends Page</Text>
            <FlatList
            data={friendsList}
            renderItem={renderItem}
            />
        </View>
    )
}
export default Friends