import React, { useState } from "react";
import {View,Text,StatusBar, TouchableOpacity,Image} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './Profile.style'
import auth from '@react-native-firebase/auth'
import {launchImageLibrary} from 'react-native-image-picker'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const Profile  = (props) => {
    const [image,setImage] = useState('')
    const usermail = auth().currentUser.email.split('@',1).toString()

    const ChangePhoto = () => {
        const options = {
            title:'Titlee',
            storageOptions:{
                skipBackup:true,
                path:'images'
            }
        }
       launchImageLibrary(options, response => {
       if(response.didCancel) {
           console.log('user Cancelled')
       }
       else if (response.errorCode) {
           console.log(errorCode0)
       } else {
        const path= response.assets[0].uri
        setImage(path)
       }
       })
    }

    return(
        <View style={styles.container} >
            <StatusBar  backgroundColor='white' barStyle='light-content' />
             <View style={styles.headerContainer} >
            <FontAwesome5 name="house-user" size={30} color='gray'  />
            <FontAwesome5 name="user-plus" size={30} color='gray' 
            onPress={() => props.navigation.navigate('FriendshipRequestScreen')}  />
            <FontAwesome5 name="user-friends" size={30} color='gray' 
            onPress={() => props.navigation.navigate('FriendsScreen')}
            />
             <MaterialCommunity name="face-man-profile" size={30} color='tomato' 
            onPress={() => props.navigation.navigate('ProfileScreen')}
            />
            </View>
            
            <View style={styles.inner_container} >
                {image=='' ? 
                 <FontAwesome5 name="user-alt" size={100} color='tomato'/> :
                 <Image
                 source={{uri:image}}
                 style={styles.image}
                 />
                }
            </View>
            <TouchableOpacity 
            onPress={ChangePhoto}
            style={styles.addphotoicon} >
            <MaterialIcons name="add-a-photo" size={30}  />
            </TouchableOpacity>
            <Text style={styles.user_text} >{usermail}</Text>
            <View style={styles.line_container} ></View>
            <TouchableOpacity style={styles.updatebutton} >
                <Text style={styles.updatetext}>Update Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile