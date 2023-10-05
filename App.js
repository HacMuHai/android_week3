import React from "react";
import Login1_b from './src/login/Login1_c' ;
import { StyleSheet,View,Text } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Login1_b/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
