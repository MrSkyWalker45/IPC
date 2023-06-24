import { View, Text, Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Dimensions,ImageBackground} from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions'
import tw from 'twrnc'
import { useNavigation,useRoute} from '@react-navigation/native'
import {auth} from '../firebase';

const Home  = () => {
 const navigation = useNavigation();

 const {
    params: {
      email
    }
  } = useRoute();
 let perms = email.slice(email.indexOf('@') + 1);
 console.log(perms)
 const handleSignOut = () => {
  auth
    .signOut()
    .then(() => {
      navigation.replace("Login")
    })
    .catch(error => alert(error.message))
}

   return (
     <>
    <SafeAreaView style={tw.style('flex-1 bg-white')}>
      <View style={{paddingLeft: 10,flex:1}}>
        <NavOptions perms={perms}/>
      </View>
    </SafeAreaView>
    </>
   
  )
}

export default Home

const styles = StyleSheet.create({

});
