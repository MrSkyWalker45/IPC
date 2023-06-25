import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, TouchableOpacity, Image, Linking } from 'react-native'
import React, { useState } from 'react';
import { Card, Icon } from 'react-native-elements';
import tw from 'twrnc'
import { getStorage, ref, uploadBytesResumable, getDownloadURL, listAll } from "firebase/storage";

const FileCard = ({ file_name, choice, url, file_type }) => {
  const [Url, setUrl] = useState('');
  const storage = getStorage();
  const FileRef = ref(storage, `${choice}/` + `${file_name}`);


  
  

  return (
    <View style={tw`flex-1 pt-5`}>
      <TouchableOpacity onPress={() => Linking.openURL(Url)} style={tw.style('pt-4')}>
        <Card containerStyle={styles.Card}>
          <Card.Title style={tw.style('font-bold  text-black text-center px-2')}>{file_name}</Card.Title>
          <Card.FeaturedSubtitle style={tw.style('text-black text-xs pr-20 text-center px-2')}>{file_type} </Card.FeaturedSubtitle>
          <Image source={{ uri: Url }} style={tw.style('h-40 w-64 rounded mx-5')} />
          <Icon name="addfile" type="antdesign" size={35} color="#FF8F00" style={tw`pt-5`}/>
        </Card>
      </TouchableOpacity>
    </View>
  )
}


export default FileCard

const styles = StyleSheet.create({
  Card: {
    marginTop: 4,
    alignItems: 'center',
    borderRadius: 20,
    elevation: 40,
    borderColor: "#BDBDBD",
    justifyContent: 'center',
    width: Dimensions.get('window').width / 2,
    backgroundColor: '#FFFF',
  }
})
