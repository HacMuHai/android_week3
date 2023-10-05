import React from "react";
import Login1_e from './src/login/Login1_e' ;
import { StyleSheet,View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Login1_e/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
