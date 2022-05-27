import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './SignScreen.style'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
const SignScreen = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const usermail = email.split('@', 1).toString()
    const handleSign = async () => {
        try {
            await auth().createUserWithEmailAndPassword(email, password)
            database().ref('users/' + usermail).set(usermail);

            props.navigation.navigate('HomeScreen')
        } catch (error) {
            console.log(error)
        }


    }
    const goLogin = () => {
        props.navigation.navigate('LoginScreen')
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
                onPress={handleSign}
                style={styles.loginbutton} >
                <Text style={styles.login_button_text} >Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.gologinbutton}
            onPress={goLogin} >
                <Text style={styles.gologinbuttontext} >Already have an account?</Text>
            </TouchableOpacity>
        </View>
    )
}
export default SignScreen