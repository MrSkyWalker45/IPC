import { View, Text, TouchableOpacity, Image, ScrollView,StyleSheet,Dimensions,ImageBackground ,SafeAreaView} from 'react-native'
import React,{useEffect} from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-elements';
import { auth } from '../firebase';
import {Icon} from 'react-native-elements';
const NavOptions = () => {  
  const navigation = useNavigation();
  let choice = 0;
  let chosen = false;
  console.log(choice);

  const signOut = () =>{ 
    auth.signOut().then(() => navigation.replace('Login'))
  }; 

  return (
<>
    <SafeAreaView style={tw.style('flex-1 items-center justify-center')}>
    <ImageBackground source={require('../assets/bg-red.jpg')} resizeMode="cover" style={{flex: 1,width:Dimensions.get('screen').width,height:Dimensions.get('screen').height}}/>

    <ScrollView  style={tw`pt-10 z-50`} horizontal contentContainerStyle={{justifyContent:'center',alignItems:'center'}}> 
        <View style={{ bottom: 24 }}> 
  
          <TouchableOpacity onPress={() => navigation.navigate('CSc',{choice:0})}>
            <Card containerStyle={styles.Card}>
              <Card.Title style={tw.style('font-bold text-xl text-black text-center',{fontSize:33})}>UNSC</Card.Title>
              <Card.FeaturedSubtitle style={tw.style('text-black  text-xs pr-20 text-center px-2',{fontSize:18})}>United Nations Security Council </Card.FeaturedSubtitle>
              <Image source={require('../assets/UNSC.jpg')} style={tw.style('h-40 w-64 rounded mx-5')} />
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('CSc',{choice:1})} style={tw.style('pt-4',{opacity:chosen   ? 0.7 :1})} disabled={chosen}>

            <Card containerStyle={styles.Card}>

              <Card.Title style={tw.style('font-bold text-lg text-black text-center',{fontSize:33})}>Lok Sabha</Card.Title>
              <Card.FeaturedSubtitle style={tw.style('text-black text-xs pr-20 text-center px-2',{fontSize:18})}>Legislative Assembly Of India </Card.FeaturedSubtitle>
              <Image source={require('../assets/LS.jpg')} style={tw.style('h-40 w-64 rounded mx-5')} />
            </Card>
          </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CSc',{choice:2})} style={tw.style('pt-4',{opacity:chosen   ? 0.7 :1})} disabled={chosen}>
            <Card containerStyle={styles.Card}>
              <Card.Title style={tw.style('font-bold text-lg text-black text-center',{fontSize:33})}>UNHRC</Card.Title>
              <Card.FeaturedSubtitle style={tw.style('text-black text-xs pr-20 text-center px-2',{fontSize:18})}>United Nations Human Rights Council </Card.FeaturedSubtitle>
              <Image source={require('../assets/UNHRC.jpg')} style={tw.style('h-40 w-64 rounded mx-5')} />
            </Card>
          </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CSc',{choice:3})} style={tw.style('pt-4',{opacity:chosen   ? 0.7 :1})} disabled={chosen}>
            <Card containerStyle={styles.Card}>
              <Card.Title style={tw.style('font-bold text-lg text-black text-center',{fontSize:33})}>DISEC</Card.Title>
              <Card.FeaturedSubtitle style={tw.style('text-black text-xs pr-20 text-center px-2',{fontSize:18})}>Disarmament and International Security </Card.FeaturedSubtitle>
              <Image source={require('../assets/DISEC.jpg')} style={tw.style('h-40 w-64 rounded mx-5 items-center')} />
            </Card>
          </TouchableOpacity>

        </View>
      </ScrollView>
      </SafeAreaView>
      </>
  );
};
export default NavOptions;


const styles = StyleSheet.create({
    Card:{ 
      marginTop: 4,
      alignItems: 'center',
      borderRadius: 20,
      elevation: 40,
      borderColor: "#BDBDBD",
      justifyContent:'center',
      width:Dimensions.get('window').width/2.2,
      backgroundColor:'#FFFF',
      borderWidth:3,
      opacity:0.9

    }

})