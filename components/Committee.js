import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import tw from 'twrnc';
import { useRoute, useNavigation } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';
import { Dimensions, TouchableOpacity } from 'react-native-web';
import { Icon, Card } from 'react-native-elements'
import { getStorage, ref, uploadBytes } from "firebase/storage";
const Committee = () => {

  const {
    params: {
      choice,
    }
  } = useRoute();

  async function pickDocument() {
    let result = await DocumentPicker.getDocumentAsync({});
    const storage = getStorage();
    const storageRef = ref(storage,result.name);
    const metadata = {
      contentType: result.mimeType 
    }
    uploadBytes(storageRef,result.file, metadata).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
  }

  const navigationOptions = ({ navigation }) => {
    const edit = navigation.getParam(choice, false);
    if (edit) {
      return {
        headerTitle: { choice },
      };
    } else {
      return {
        headerTitle: 'Comittee',
      };
    }
  };

  return (
    <>
      <SafeAreaView style={tw`flex-1 items-center flex-row`}>
      </SafeAreaView>

      <View style={tw.style('flex-row', { alignItems: 'center', justifyContent: 'center', paddingBottom: 20, paddingLeft: Dimensions.get('window').width / 1.1 })}>
        <TouchableOpacity onPress={pickDocument}>
          <Icon size={55} name="pluscircle" style={tw`px-5`} type="antdesign" />
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Committee

const styles = StyleSheet.create({})
