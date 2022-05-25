import React from "react";
import {View,Text,FlatList} from 'react-native'
import styles from './FriendshipRequest.style'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import ParseContent from "../../utils/ParseContent";
import FriendRequestCard from "../../components/FriendRequestCard/FriendRequestCard";

const FriendshipRequest = (props) => {
    const [addedUsers,setAddedUsers] = React.useState([])
    const usermail = auth().currentUser.email.split('@', 1).toString()
    React.useEffect(() => {
        database().ref('users/'+usermail+'/addedyou/').once('value', snapshot => {
            console.log(usermail)
            console.log(snapshot.val())
            const newContentData = snapshot.val();
            const ParsedData = ParseContent(newContentData)
            console.log(ParsedData)
            setAddedUsers(ParsedData)
            console.log(ParsedData)
        })
    }, [])

    const handleAccept = (addedUserId) => {
        database().ref('users/'+usermail+'/friends/'+addedUserId).set(addedUserId)
         database().ref('/users/'+usermail+'/addedyou/'+addedUserId).remove();
        
    }
    const handleReject = (addeduserId) => {
        const newTodos = addedUsers.filter(item => item.id != addeduserId)
        setAddedUsers(newTodos)
    }

    const renderItem = ({item}) => <FriendRequestCard 
    addeduser={item} handleAccept={handleAccept} handleReject={handleReject} />

    return(
        <View>
             <View style={styles.headerContainer} >
            <FontAwesome5 name="house-user" size={30} color='gray' 
              onPress={() => props.navigation.navigate('HomeScreen')} />
            <FontAwesome5 name="user-plus" size={30} color='tomato' 
            />
            <FontAwesome5 name="user-friends" size={30} color='gray'
             onPress={() => props.navigation.navigate('FriendsScreen',)}
            />
            </View>
            <Text>Users Added you</Text>
            {addedUsers ? 
            <FlatList
            data={addedUsers}
            renderItem={renderItem }
            /> : <Text>There is no user</Text>
        }
            
        </View>
    )
}

export default FriendshipRequest