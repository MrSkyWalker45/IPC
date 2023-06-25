import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import tw from 'twrnc';
import {Icon} from 'react-native-elements';
import {auth} from '../firebase';
import {useNavigation} from '@react-navigation/native'
const SignOut = () => {
 const navigation = useNavigation();
 const handleSignOut = () => {
  auth
    .signOut()
    .then(() => {
      navigation.replace("Login")
    })
    .catch(error => alert(error.message))
}
  return (
       <View style={tw`flex-row bg-white`}>
       <TouchableOpacity style={{alignSelf:'flex-start'}} onPress={handleSignOut}>
       <Icon name="user" type="antdesign" color="black" size={35}/>
       </TouchableOpacity>
       </View>
  )
}

export default SignOut

const styles = StyleSheet.create({})