import React, { useState } from "react";
import { View, Text, FlatList } from 'react-native'
import database from '@react-native-firebase/database'
import ParseContent from '../../utils/ParseContent'
import UserCard from "../../components/UserCard/UserCard";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import auth from '@react-native-firebase/auth'
import styles from './Home.style'
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
const Home = (props) => {
    const [users, setUsers] = useState([])
    
    const usermail = auth().currentUser.email.split('@', 1).toString()
    React.useEffect(() => {
        database().ref('users').on('value', snapshot => {
            console.log(snapshot.val())
            const newContentData = snapshot.val();
            const ParsedData = ParseContent(newContentData)
            console.log(ParsedData)
            setUsers(ParsedData)
            console.log(users)
        })
    }, [])
    const handleAddFriend = (uid) => {
        database().ref('users/' + uid + '/' + 'addedyou' + '/' + usermail).set(usermail)
    }
    const renderItem = ({ item }) => <UserCard user={item} handleAddFriend={handleAddFriend} />
    return (
        <View style={{ flex: 1 }} >
            <View style={styles.headerContainer} >
            <FontAwesome5 name="house-user" size={30} color='tomato'  />
            <FontAwesome5 name="user-plus" size={30} color='gray' 
            onPress={() => props.navigation.navigate('FriendshipRequestScreen',{usermail:usermail})}  />
            <FontAwesome5 name="user-friends" size={30} color='gray' 
            onPress={() => props.navigation.navigate('FriendsScreen',{usermail:usermail})}
            />
            <MaterialCommunity name="face-man-profile" size={30} color='gray' 
            onPress={() => props.navigation.navigate('ProfileScreen')}
            />
            </View>
            <FlatList
                data={users}
                renderItem={renderItem}
            />
        </View>
    )
}
export default Home