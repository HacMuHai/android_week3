import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';


export default function App() {
  return (
    <LinearGradient
    colors={['#C7F4F6','#D1F4F6','#E5F4F5','#00CCF9']}
    style={styles.container}>

      <View style={styles.viewLogo}>
        <Image
          style={styles.logo_img}
          source={require('../../assets/logo.png')}
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>GROW {'\n'} YOUR BUSINESS</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.content}>We will help you to grow your business using online server</Text>
      </View>

      <View style={styles.viewButtonContainer}>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>LOGIN</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>SIGN UP</Text>
        </Pressable>
      </View>
      <Pressable style={styles.btnHow}>
        <Text style={styles.textBtnHow}>HOW WE WORK?</Text>
      </Pressable>

      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CCF9',
    // backgroundColor: linear-gradient('#00CCF9','#00CCF9'),
    alignItems: 'center',
    flexDirection: 'column'
  },

  //Logo
  viewLogo: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',

  },
  logo_img: {
    width: 150,
    height: 150,
    marginTop:50,
    resizeMode: 'stretch'
  },

  //Title
  titleContainer: {
    flex: 1,
    margin:20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    lineHeight: 29,
    fontWeight: 700,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  //Content
  contentContainer: {
    margin: 30,
    width: 322,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 17,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  //Button
  viewButtonContainer: {
    flex: 1,
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    alignSelf: 'center',

  },
  btn: {
    width: 119,
    height: 48,
    backgroundColor: '#E3C000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    fontSize: 20,
    fontWeight: 700,
  },

  //how we work
  btnHow: {
    flex:2,
    width:302,
    height: 53,
  },
  textBtnHow:{
    fontSize:18,
    fontWeight: 700,
    color:'#000000',
    textAlign:'center',
  }



});
