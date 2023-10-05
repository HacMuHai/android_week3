import React from "react";
import LoginXMEye from './src/login2/LoginXMEye' ;
import { StyleSheet,View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <LoginXMEye/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
