import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './LoginScreen.style'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
const LoginScreen = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const usermail = email.split('@', 1).toString()
    const handleLogin = async () => {
        try {
            await auth().createUserWithEmailAndPassword(email, password)
            database().ref('users/' + usermail).set(usermail);

            props.navigation.navigate('HomeScreen')
        } catch (error) {
            console.log(error)
        }


    }
    return (
        <View style={styles.container} >
            <TextInput
                onChangeText={text => setEmail(text)}
                style={styles.input}
                placeholder='email...'
                placeholderTextColor={'white'} />
            <TextInput
                onChangeText={text => setPassword(text)}
                style={styles.input} placeholder='password' placeholderTextColor={'white'} />
            <TouchableOpacity
                onPress={handleLogin}
                style={styles.loginbutton} >
                <Text style={styles.login_button_text} >Login</Text>
            </TouchableOpacity>
        </View>
    )
}
export default LoginScreen