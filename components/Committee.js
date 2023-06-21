import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React,{useState,useEffect} from 'react'
import tw from 'twrnc';
import { useRoute,useNavigation } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';
import { TouchableOpacity } from 'react-native-web';

const Committee = () => {
  const navigation = useNavigation(); 
  const {
    params:{
      choice,
      imgUrl, 
    }
  } = useRoute();
    const chooseFunction = () =>{ 
        const[selectedFile,setSelectedFile] = useState();
        const[isFilePicked,setFilePicked] = useState(); 
    }
	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};
const navigationOptions = ({ navigation }) => {
        const edit = navigation.getParam(choice, false);
        if(edit){
          return {
            headerTitle: {choice},
          };
        }else{
          return {
            headerTitle: 'Comittee',
          };
        }
     };
  return (
    <SafeAreaView style={tw`flex-1 items-center flex-row`}> 
        <Text style={tw`font-xs text-black font-bold`}>{choice}</Text>
      <TouchableOpacity onPress={() => console.log("chosen")}>  
        <Text>Choose File</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Committee

const styles = StyleSheet.create({})
