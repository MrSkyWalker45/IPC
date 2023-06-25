import { View, Text, TouchableOpacity, Image, ScrollView,StyleSheet,Dimensions ,SafeAreaView} from 'react-native'
import React,{useEffect} from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-elements';
import { ImageBackground } from 'react-native-web';
const NavOptions = ({perms}) => {  
  const navigation = useNavigation();
  console.log(perms);
  return (
    <>
   <ImageBackground source={require('../assets/header2.png')} style={{width:'100%',height:'100%'}}>
    <View style={tw`items-center justify-center flex-1 bg-white `}>
    <ScrollView  style={tw.style('pt-10 z-50 flex-1',{bottom:50})} horizontal contentContainerStyle={{justifyContent:'center',alignItems:'center'}}> 
         <TouchableOpacity onPress={() => navigation.navigate('CSc',{choice:"UNSC"})} style={tw``} >
            <Card containerStyle={styles.Card}>
              <Card.Title style={tw.style('font-bold text-xl text-black text-center',{fontSize:33})}>UNSC</Card.Title>
              <Card.FeaturedSubtitle style={tw.style('text-black  text-xs pr-20 text-center px-2',{fontSize:18})}>United Nations Security Council </Card.FeaturedSubtitle>
              <Image source={require('../assets/UNSC.jpg')} style={tw.style('h-40 w-64 rounded mx-5')} />
            </Card>
          </TouchableOpacity>

          <TouchableOpacity style={tw``}onPress={() => navigation.navigate('CSc',{choice:"Lok Sabha"})}>
            <Card containerStyle={styles.Card}>
              <Card.Title style={tw.style('font-bold text-lg text-black text-center',{fontSize:33})}>Lok Sabha</Card.Title>
              <Card.FeaturedSubtitle style={tw.style('text-black text-xs pr-20 text-center px-2',{fontSize:18})}>Legislative Assembly Of India </Card.FeaturedSubtitle>
              <Image source={require('../assets/LS.jpg')} style={tw.style('h-40 w-64 rounded mx-5')} />
            </Card>
          </TouchableOpacity>
      </ScrollView>
      </View>
      <View style={tw`flex-1 items-center justify-center bg-white`}>
      <ScrollView style={tw.style('z-50 flex-1 pb-20',{bottom:50})} horizontal>
          <TouchableOpacity style={tw`pt-10 items-center`} onPress={() => navigation.navigate('CSc',{choice:"UNHRC"})}>
            <Card containerStyle={styles.Card}>
              <Card.Title style={tw.style('font-bold text-lg text-black text-center',{fontSize:33})}>UNHRC</Card.Title>
              <Card.FeaturedSubtitle style={tw.style('text-black text-xs pr-10 text-center px-2',{fontSize:18})}>United Nations Human Rights Council </Card.FeaturedSubtitle>
              <Image source={require('../assets/UNHRC.jpg')} style={tw.style('h-40 w-64 rounded mx-5 items-center')} />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity style={tw`pt-10 items-center`}onPress={() => navigation.navigate('CSc',{choice:"DISEC"})}>
            <Card containerStyle={styles.Card}>
              <Card.Title style={tw.style('font-bold text-lg text-black text-center px-2',{fontSize:33})}>DISEC</Card.Title>
              <Card.FeaturedSubtitle style={tw.style('text-black text-xs pr-10 text-center px-2',{fontSize:18})}>Disarmament and International Security </Card.FeaturedSubtitle>
              <Image source={require('../assets/DISEC.jpg')} style={tw.style('h-40 w-64 rounded mx-20 items-center justify-center')} />
            </Card>
      </TouchableOpacity>
      </ScrollView>
      </View>
        </ImageBackground> 
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
      borderColor: "#00000",
      justifyContent:'center',
      width:Dimensions.get('window').width/2.5,
      backgroundColor:'white',
      height:280,
    }

})
