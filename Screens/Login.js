import { View, TextInput, SafeAreaView, TouchableOpacity, ImageBackground, Dimensions, StyleSheet,Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Card, Icon } from 'react-native-elements'
import tw from 'twrnc'
import { auth } from '../firebase';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Committee,setCommittee] = useState('');

  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("home");
      }
    })
    return unsubscribe;
  }, [])

  const signIn = () => {
    auth.signInWithEmailAndPassword(email, password).then(userCredentials => {
      const user = userCredentials.user;
    }).catch(error => alert(error.message));
  }

  return (
    <SafeAreaView style={tw.style('flex-1 items-center justify-center',{backgroundColor:'#87CEFA'})}>
      <Animatable.View style={tw`items-center justify-center flex-1`}>
        <Animatable.Image 
        style={tw.style('items-center justify-center h-60 w-60',{top:10})} 
        source={require('../assets/IPC.jpg')} 
        iterationCount={1} animation="slideInUp"/>
        <Animatable.Text
          animation="slideInUp"
          iterationCount={1}
          style={tw.style('text-xl text-black font-bold text-center pt-10 ', { fontSize: 40 })}>
          Login
        </Animatable.Text>

      </Animatable.View>
      <Animatable.View animation="slideInUp" iterationCount={1} delay={500} style={tw`items-center pt-20`}>
        <Card
          containerStyle={styles.Login}>
    
          <View style={tw`items-center`}>
            <View style={tw`flex-row p-10`}>
              <MaterialIcons name="mail" size={25} color="black" style={tw`pt-2 pr-2`} />

              <TextInput 
              style={tw.style('p-3 pt-1',{borderBottomWidth: 0.3, width: 300,borderBottomColor:"gray",fontSize:20,outline:'none'})}
    
               placeholder="Email"
               autoCapitalize="none"
               autoCorrect={false}
               type="email" value={email} onChangeText={(text) => setEmail(text)}
               />
            </View>

            <View style={tw`flex-row`}>
              <Ionicons name="ios-lock-closed" size={25} color="black" style={tw`pt-2 pr-2`} />
              <TextInput style={tw.style('p-3  pt-1',{ borderBottomWidth: 0.3, width: 300,borderBottomColor:"gray",fontSize:20,outline:'none'})} 
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              type="pasword" value={password} onChangeText={(text) => setPassword(text)}

              />
            </View>
            <View style={tw`flex-row`}>
              <Ionicons name="user" size={25} color="black" style={tw`pt-2 pr-2`}/>
              <TextInput style={tw.style('p-3 pt-2',{borderBottomWidth:0.3,width:300,borderBottomColor:'gray',fontSize:20,outline:'none'})}
                placeholder='Committee'
                autoCapitalize='none'
                autoCorrect="none"
                type="text" value={Committee} onChangeText={(text) => setCommittee(text)}/> 

            </View>
            <Animatable.View animation="fadeInUp" iterationCount={1} delay={650}>
            <TouchableOpacity style={tw.style('p-3 my-10 items-center bg-black rounded',{width:250,backgroundColor:"black"})} onPress={signIn}> 
              <Text style={tw.style('font-bold text-xl text-white')}>
                Login
              </Text>
              </TouchableOpacity>
            </Animatable.View>

          </View>

         
        </Card>
      </Animatable.View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  Login: {
    height: 480,
    width: 520,
    borderRadius: 30,
    shadowOffset: { width: 0, height: 40 },
    elevation: 40,
    shadowOpacity: 0.4,
    shadowRadius: 10,
    justifyContent:'center', 
    alignItems:'center',
    borderColor:"#BDBDBD",
    borderWidth:0.8
  }
})