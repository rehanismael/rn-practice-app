import React, {useState} from 'react';
import {View, Text, TextInput,Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
const App = () => {

  const setStoredData = async ()=> {
   await AsyncStorage.setItem("name","rehan");
  }
  const getStoredData =async ()=> {
   const name = await AsyncStorage.getItem("name");
    console.warn(name);
  }
 


  return (

 <View>
    <Button title='Set Data' onPress={setStoredData}/>
    <Button title='Get Data' onPress={getStoredData}/>


  </View>
  );
};
export default App;
