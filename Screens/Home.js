import { View,SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Dimensions,ImageBackground} from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions'
import tw from 'twrnc'
import { useNavigation,useRoute} from '@react-navigation/native'
import {Icon} from 'react-native-elements'

const Home  = () => {
 const navigation = useNavigation();

 const {
    params: {
      email
    }
  } = useRoute();
 let perms = email.slice(email.indexOf('@')+1);
 console.log(perms)
 if(perms === "unsc.com"){
   console.log("only unsc")
 }
 else if(perms === "ls.com"){
   console.log("only ls")
 }
 else if(perms === "unhrc.com"){
   console.log("only unhrc")
 }
 else if(perms === "disec.com"){
   console.log("only disc")
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
