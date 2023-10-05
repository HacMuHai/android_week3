import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View, Text, Pressable, Image, SafeAreaView } from 'react-native';
import { TextInput } from "react-native-web";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Image
                    style={styles.logoTitle}
                    source={require('../../assets/logoXMEye.png')}
                />
            </View>
            <SafeAreaView style={styles.containerInputForm}>
                <View style={styles.inputForm}>
                    <Image style={styles.iconForm} source={require('../../assets/userXMEye.png')} />
                    <TextInput placeholder='Please input user name' style={styles.input} />
                </View>
                <View style={styles.inputForm}>
                    <Image style={styles.iconForm} source={require('../../assets/lockXMEye.png')} />
                    <TextInput placeholder='Please input password' style={styles.input} />
                </View>
            </SafeAreaView>

            <View style={styles.containerBtnLogin}>
                <Pressable style={styles.btnLogin}>
                    <Text style={styles.textBtnLogin}>LOGIN</Text>
                </Pressable>
                <View style={styles.formForgot}>
                    <Text style={styles.forgot}>Register</Text>
                    <Text style={styles.forgot}>Forgot password?</Text>
                </View>
            </View>

            <View style={styles.containerNote}>
                <View style={styles.line}></View>
                <Text style={styles.note}>Other Login Methods</Text>
            </View>

            <View style={styles.containerFooter}>
                <Image style={{ width: 60, height: 60 }} source={require('../../assets/group8.svg')} />
                <View style={styles.btnWF}>
                    <Image style={styles.iconFooter} source={require('../../assets/Wifi.png')} />
                </View>
                <View style={styles.btnFB}>
                    <Image style={styles.iconFooter} source={require('../../assets/icofacebook.png')} />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    containerTitle: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logoTitle: {
        width: 120,
        height: 120
    },

    //input
    containerInputForm: {
        flex: 3,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    inputForm: {
        flexDirection: "row",
        width: '85%',
        height: 54,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4',
        marginTop: 20,
        // backgroundColor: "rgba(196, 196, 196, 0.30)"
    },
    iconForm: {
        flex: 1.1,
        // width:32,
        // height:32
    },
    input: {
        flex: 9,
        fontSize: 18,
        fontWeight: 400,
        marginLeft: 15,
        color: '#C4C4C4'
    },

    //Login
    containerBtnLogin: {
        flex: 2,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    btnLogin: {
        width: '85%',
        height: 45,
        backgroundColor: "#386FFC",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    textBtnLogin: {
        fontSize: 20,
        fontWeight: 700,
        color: "#FFF"
    },

    formForgot: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        width: '85%'
    },
    forgot: {
        fontSize: 18,
        fontWeight: 400,
    },

    //note
    containerNote: {
        flex:1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 30,
    },
    line: {
        position:'relative',
        top: 12,
        width: '90%',
        height: 1,
        backgroundColor: '#0E18F5',
    },
    note: {
        position:'absolute',
        fontSize: 18,
        fontWeight: 400,
        backgroundColor: '#fff',
        paddingLeft:5,
        paddingRight:5
    },


    //Footer
    containerFooter: {
        flex: 2,
        flexDirection:"row",
        // width:'90%',
        justifyContent: "space-evenly",
        alignItems: "flex-start",
    },
    btnWF:{
        backgroundColor:'#F4AA47',
        width:60, 
        height:60, 
        justifyContent:"center",
        alignItems:"center"
    }
    ,btnFB:{
        backgroundColor:'#3A579C',
        width:60,
        height:60, 
        justifyContent:"center",
        alignItems:"center"
    },
    iconFooter:{
        width: 50,
        height: 50
    }
})

