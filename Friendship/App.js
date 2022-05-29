import React from 'react';
import {View,Text,StyleSheet} from 'react-native'

import LoginScreen from './src/pages/LoginScreen/LoginScreen';
import Home from './src/pages/Home/Home';
import FriendshipRequest from './src/pages/FriendshipRequest/FriendshipRequest';
import Friends from './src/pages/Friends/Friends';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Messages from './src/pages/messages/Messages';
import SignScreen from './src/pages/SignScreen/SignScreen';
import Profile from './src/pages/Profile/Profile';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name='SignScreen' component={SignScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='HomeScreen' component={Home} />
        <Stack.Screen name='FriendshipRequestScreen' component={FriendshipRequest} />
        <Stack.Screen name='FriendsScreen' component={Friends} />
        <Stack.Screen name='MessagesScreen' component={Messages} />
        <Stack.Screen name='ProfileScreen' component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
export default App