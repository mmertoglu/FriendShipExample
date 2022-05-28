import React, { useState,useRef } from "react";
import {View,Text, TextInput, TouchableOpacity,Image,FlatList, KeyboardAvoidingView} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from './Messages.style'
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
import ParseContent from "../../utils/ParseContent";
import MessageCard from "../../components/MessageCard/MessageCard";
import {launchImageLibrary} from 'react-native-image-picker'

const Messages = (props) => {
    const [image,setImage] = useState(null)
    const [message,setMessage] = React.useState('')
    const [messageList,setMessageList] = React.useState([])
    const currentUser = auth().currentUser.email.split('@',1).toString()
    const {friendId} = props.route.params;
    const sendMessage = () => {
        const MessageInfo = {
            message : message,
            user : currentUser,
            date : new Date().toISOString(),
            image : image
        }
          database().ref('messages/'+currentUser+'/'+friendId).push(MessageInfo)
          database().ref('messages/'+friendId+'/'+currentUser).push(MessageInfo)
          setMessage('')
          setImage(null)
    }

    React.useEffect(() => {
        database().ref('messages/'+currentUser+'/'+friendId).on('value', snapshot => {
            const newContentData = snapshot.val();
            const ParsedData = ParseContent(newContentData)
            setMessageList(ParsedData)
        })
    }, [])

    const goPhoto = () => {
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
    const renderItem = ({item}) => <MessageCard messages={item} currentUser={currentUser} />

    return(
        <KeyboardAvoidingView style={styles.container} >
            <View style={styles.header_container} >
            
            <View style={styles.header_inner_container} >
            <IonIcons name="arrow-back" color={'white'} size={24} onPress={() => props.navigation.goBack()} />
            <Image 
            style={styles.user_image}
            source={{uri:'https://www.linkpicture.com/q/WhatsApp-Image-2022-05-22-at-18.49.19.jpeg'}} />
            <Text style={styles.header_text} >{friendId}</Text>
            </View>
            
            <View style={styles.header_inner_container2} >
                <IonIcons name="call" size={24} color='white' />
                <Entypo name="dots-three-vertical" size={24} color='white' />
            </View>

            </View>
            { messageList ? 
            
            <FlatList
            inverted
            data={messageList}
            renderItem={renderItem}
            /> : null

            }

            <View style={styles.footer_container} >
                <View style={styles.input_container} >
                <TextInput 
                onPressIn={() => messageList.scro}
                value={message}
                onChangeText={text => setMessage(text)}
                placeholder="mesaj..." style={styles.input} />
                <TouchableOpacity>
                <FontAwesome name="photo" size={20} color='black' onPress={goPhoto} />
                </TouchableOpacity>
                </View>
                <TouchableOpacity 
                onPress={sendMessage}
                style={styles.send_button} >
                <Feather name="send" color={'white'} size={24} />
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}

export default Messages