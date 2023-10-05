import React from "react";
import { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Image, SafeAreaView } from 'react-native';
import { TextInput } from "react-native-web";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

export default function App() {
    const [current, setCurrent] = useState("test");
    return (
        <View style={styles.container} >
            <View style={styles.containerTitle}>
                <Text style={styles.txtTitle}>REGISTER</Text>
            </View>

            <SafeAreaView style={styles.containerInputForm}>
                <TextInput placeholder='Name' style={styles.inputForm} />
                <TextInput placeholder='Phone' style={styles.inputForm} />
                <TextInput placeholder='Email' style={styles.inputForm} />
                <View style={[styles.inputForm, styles.inputFormPW]}>
                    <TextInput placeholder='Password' style={styles.textInputPW} />
                    <Image
                        style={styles.iconeye}
                        source={require('../../assets/eye.png')}
                    />
                </View>
                <TextInput placeholder='Birthday' style={styles.inputForm} />
                <View style={styles.containerRadio}>
                    <RadioButtonGroup
                        containerStyle={styles.RadiobtnGroup}
                        selected={current}
                        onSelected={(value) => setCurrent(value)}
                        radioBackground="black"
                    >
                        <RadioButtonItem 
                            value="Male" 
                            style={styles.radioBtn}
                            label={
                                <Text style={{ fontWeight: "500" }}>Male</Text>
                            }
                        />
                        <RadioButtonItem
                            value="Female"
                            style={styles.radioBtn}
                            label={
                                <Text style={{ fontWeight: "500" }}>Female</Text>
                            }
                        />
                    </RadioButtonGroup>
                </View>
            </SafeAreaView>
            <View  style={styles.containerBtnRegister}>
            <Pressable  style={styles.btnRegister}>
                <Text  style={styles.textRegister}>REGISTER</Text>
            </Pressable>
            </View>
            <View style={styles.containerFooter}>
                <Text style={styles.textFooter}>When you agree to terms and conditions</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#31AA5230',
    },
    containerTitle: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtTitle: {
        fontSize: 25,
        fontWeight: 700,
        textAlign: "center"
    },

    //input
    containerInputForm: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputForm: {
        flex:1,
        width: '90%',
        fontSize: 18,
        fontWeight: 400,
        borderWidth: 1,
        margin: 10,
        padding:10,
        backgroundColor: '#C9E0D0'
    },
    inputFormPW: {
        flexDirection: "row",
    },
    textInputPW: {
        width: '80%',
        fontSize: 18,
        fontWeight: 400,
    },
    iconeye: {
        width: 32,
        height: 30,
        margin: 'auto'
    },
    containerRadio:{
        flex:1,
        width:'90%',
    },
    RadiobtnGroup:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        marginTop:5
    },
    radioBtn:{
        marginHorizontal: "20px", 
        color: "#000",
        borderColor: "#000",
        marginLeft:30,
        marginRight:10,
    },

    //Register
containerBtnRegister:{
    flex:2,
    justifyContent:"center",
    alignItems:"center",
},
btnRegister:{
    width:'90%',
    height:45,
    backgroundColor:'#E53935',
    justifyContent:"center",
    alignItems:"center",
},
textRegister:{
    fontSize: 20,
    fontWeight: 700,
    color: '#FFFFFF',
},

//Footer
containerFooter:{
    flex:2,
    justifyContent:"flex-start",
    alignItems:"center",
},
textFooter:{
    fontSize: 14,
    fontWeight: 400,
}
})

