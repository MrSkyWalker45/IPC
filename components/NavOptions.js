import { View, Text, TouchableOpacity, Image, ScrollView,StyleSheet } from 'react-native'
import React from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-elements';

const NavOptions = () => {
  let window_id="000";
  
  const navigation = useNavigation();
  let chosen = false;
 
 
  return (
    <>
    <View style={{ flex: 1 ,bottom:15}}>
      <ScrollView  style={tw`pt-5 z-50`} horizontal={true}  >
        <View style={{ bottom: 24 }}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen', { choice: choice,window_id:"000" })}>
            <Card containerStyle={styles.Card}>
              <Card.Title style={tw`font-bold text-lg text-center`}>UNSC</Card.Title>
              <Card.FeaturedSubtitle style={tw.style('text-gray-400  text-xs pr-20 text-center px-2')}>United Nations Security Council </Card.FeaturedSubtitle>
              <Image source={require('../assets/IPC.jpg')} style={tw.style('h-40 w-64 rounded mx-5')} />
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen', { choice: choice,window_id:"111" })} style={tw.style('pt-4',{opacity:chosen   ? 0.7 :1})} disabled={chosen}>

            <Card containerStyle={styles.Card}>

              <Card.Title style={tw`font-bold text-lg text-center`}>UNHRC</Card.Title>
              <Card.FeaturedSubtitle style={tw.style('text-gray-400 text-xs pr-20 text-center px-2')}>United Nations Human Rights Council </Card.FeaturedSubtitle>
              <Image source={require('../assets/IPC.jpg')} style={tw.style('h-40 w-64 rounded mx-5')} />
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen', { choice: choice ,window_id:"222"})} style={tw.style('pt-4',{opacity:chosen  ? 0.7 : 1})} disabled={chosen}>
            <Card containerStyle={styles.Card}>
              <Card.Title style={tw`font-bold text-lg text-center`}>DISEC</Card.Title>
              <Card.FeaturedSubtitle style={tw.style('text-gray-400 text-xs pr-20 text-center px-2')}>Disarmament and International Security </Card.FeaturedSubtitle>
              <Image source={require('../assets/IPC.jpg')} style={tw.style('h-40 w-64 rounded mx-5')} />
            </Card>
          </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen', { choice: choice ,window_id:"222"})} style={tw.style('pt-4',{opacity:chosen  ? 0.7 : 1})} disabled={chosen}>
            <Card containerStyle={styles.Card}>
              <Card.Title style={tw`font-bold text-lg text-center`}>Lok Sabha</Card.Title>
              <Card.FeaturedSubtitle style={tw.style('text-gray-400 text-xs pr-20 text-center px-2')}>Legislative Assembly Of India </Card.FeaturedSubtitle>
              <Image source={require('../assets/IPC.jpg')} style={tw.style('h-40 w-64 rounded mx-5')} />
            </Card>
          </TouchableOpacity>
          
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen', { choice: choice ,window_id:"222"})} style={tw.style('pt-4',{opacity:chosen  ? 0.7 : 1})} disabled={chosen}>
            <Card containerStyle={styles.Card}>
              <Card.Title style={tw`font-bold text-lg text-center`}>IPC</Card.Title>
              <Card.FeaturedSubtitle style={tw.style('text-gray-400 text-xs pr-20 text-center px-2')}>International Press Corps </Card.FeaturedSubtitle>
              <Image source={require('../assets/IPC.jpg')} style={tw.style('h-40 w-64 rounded mx-5')} />
            </Card>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
</>

  );
};
export default NavOptions;


const styles = StyleSheet.create({

    Card:{ 
      marginTop: 4,
    
      alignItems: 'center',
      borderRadius: 20,
      shadowColor: "#318CE7",
      shadowOpacity: 0.5,
      elevation: 40,
      borderColor: "#BDBDBD",
      justifyContent:'center',
      width:300
    }

})