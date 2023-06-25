import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-elements';
import * as Animated from 'react-native-animatable';

const NavOptions = ({ perms }) => {
  const navigation = useNavigation();
  console.log(perms);
  return (
      <View style={tw.style('flex-1 items-center justify-center',{alignSelf:'center'})}>
        <Animated.View iterationCount={1} delay={180} animation="slideInLeft"
        style={tw`flex-row items-center justify-center pt-10`}>
          <TouchableOpacity onPress={() => navigation.navigate('CSc', { choice: "UNSC",perms:perms })} style={tw`items-center justify-center`} >
            <Card containerStyle={styles.Card}>
              <Card.Title style={tw.style('font-bold text-xl text-black text-center', { fontSize: 33 })}>UNSC</Card.Title>
              <Card.FeaturedSubtitle style={tw.style('text-black  text-xs pr-20 text-center px-2', { fontSize: 18 })}>United Nations Security Council </Card.FeaturedSubtitle>
              <Image source={require('../assets/UNSC.jpg')} style={tw.style('h-40 w-64 rounded mx-5', { alignSelf: 'center' })} />
            </Card>
          </TouchableOpacity>

          <TouchableOpacity style={tw``} onPress={() => navigation.navigate('CSc', { choice: "Lok Sabha",perms:perms })}>
            <Card containerStyle={styles.Card}>
              <Card.Title style={tw.style('font-bold text-lg text-black text-center', { fontSize: 33 })}>Lok Sabha</Card.Title>
              <Card.FeaturedSubtitle style={tw.style('text-black text-xs pr-20 text-center px-2', { fontSize: 18 })}>Legislative Assembly Of India </Card.FeaturedSubtitle>
              <Image source={require('../assets/LS.jpg')} style={tw.style('h-40 w-64 rounded mx-5', { alignSelf: 'center' })} />
            </Card>
          </TouchableOpacity>

        </Animated.View>
        <Animated.View iterationCount={1} delay={250} animation="slideInRight"
        style={tw`flex-row items-center justify-center pt-5`}>
          <TouchableOpacity style={tw`pt-5 items-center`} onPress={() => navigation.navigate('CSc', { choice: "UNHRC",perms:perms })}>
            <Card containerStyle={styles.Card}>
              <Card.Title style={tw.style('font-bold text-lg text-black text-center', { fontSize: 33 })}>UNHRC</Card.Title>
              <Card.FeaturedSubtitle style={tw.style('text-black text-xs pr-10 text-center px-2', { fontSize: 18 })}>United Nations Human Rights Council </Card.FeaturedSubtitle>
              <Image source={require('../assets/UNHRC.jpg')} style={tw.style('h-40 w-64 rounded mx-5 items-center', { alignSelf: 'center' })} />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity style={tw`pt-5 items-center`} onPress={() => navigation.navigate('CSc', { choice: "DISEC" ,perms:perms})}>
            <Card containerStyle={styles.Card}>
              <Card.Title style={tw.style('font-bold text-lg text-black text-center px-2', { fontSize: 33 })}>DISEC</Card.Title>
              <Card.FeaturedSubtitle style={tw.style('text-black text-xs pr-10 text-center px-2', { fontSize: 18 })}>Disarmament and International Security </Card.FeaturedSubtitle>
              <Image source={require('../assets/DISEC.jpg')} style={tw.style('h-40 w-64 rounded mx-20 items-center justify-center')} />
            </Card>
          </TouchableOpacity>
        </Animated.View>
      </View>
  );
};
export default NavOptions;


const styles = StyleSheet.create({
  Card: {
    marginTop: 4,
    alignItems: 'center',
    borderRadius: 20,
    elevation: 40,
    borderColor: "#00000",
    justifyContent: 'center',
    width: Dimensions.get('window').width / 2.5,
    backgroundColor: 'white',
    height: 300,
    opacity: 1
  }

})
