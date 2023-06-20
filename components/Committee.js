import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React,{useState,useEffect} from 'react'
import tw from 'twrnc';
import { useRoute,useNavigation } from '@react-navigation/native';

const Committee = () => {
  const navigation = useNavigation(); 
  const {
    params:{
      choice,
    }
  } = useRoute();
  console.log(choice);
  let committee = "";
  if(choice === 0){
    committee="UNSC";
  }
  else if(choice === 1){
    committee="Lok Sabha";
  }
  else if(choice === 2){
    committee="UNHRC";
  }
  else if(choice===3){
    committee="DISEC";
  }
  
  return (
    <SafeAreaView style={tw`flex-1 items-center flex-row`}> 
        <Text style={tw`font-xs text-black font-bold`}>{committee}</Text>
    </SafeAreaView>
  )
}

export default Committee

const styles = StyleSheet.create({})