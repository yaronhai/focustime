import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { TextInput } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Yaron Hai</Text>
      <Text style={styles.text}>mobile App try</Text>
      <TextInput  style={styles.textInput} label="Full Name" />
      <TextInput style={styles.textInput} label="Adress" />
      <Focus />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
  
  text: {
    color: colors.white,
    padding: 20
    ,
  },
  
  textInput: {
    flex:0.5,
    margin:10, 
  }
});
