import React from "react";
import Login1_a from './src/login/Login1_a' ;
import { StyleSheet,View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Login1_a/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
