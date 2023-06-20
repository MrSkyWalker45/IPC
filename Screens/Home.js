import { View, Text, Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Dimensions} from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions'
import tw from 'twrnc'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation,useRoute} from '@react-navigation/native'
import { ImageBackground } from 'react-native-web';


const Home  = () => {
 const navigation = useNavigation();
   return (
    <SafeAreaView style={tw.style('flex-1')}>
      <View style={{paddingLeft: 10,flex:1,justifyContent:'center'}}>
        <NavOptions/>
      </View>
    </SafeAreaView>
   
  )
}

export default Home

const styles = StyleSheet.create({

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 2,
    marginRight:2,
    paddingLeft:10,
    bottom:25,
    paddingTop:2
  },
  locationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 2,
    marginRight: 2,
    paddingLeft: 10,
  },
  Login: {
    borderRadius: 30,
    borderColor:"#BDBDBD",
    borderWidth:0.8,
    width:400,
    alignItems:'center',
    justifyContent:'center',
    top:150
  }
});
