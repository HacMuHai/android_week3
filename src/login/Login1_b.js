import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Text, Pressable, Image, SafeAreaView } from 'react-native';
import { TextInput } from "react-native-web";

export default function App() {
    return (
        <LinearGradient
            colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']}
            style={styles.container}
        >
            <View style={styles.containerLogo}>
                <Image
                    source={require('../../assets/lock.png')}
                    style={styles.logoLock}
                />
            </View>
            <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>FORGET PASSWORD</Text>
            </View>
            <View style={styles.containerContent}>
                <Text style={styles.textContent}>Provide your account’s email for which you want to reset your password</Text>
            </View>
            <View style={styles.containerInputForm}>
                <SafeAreaView style={styles.inputForm}>
                    <Image
                        source={require('../../assets/email.png')}
                        style={styles.iconEmail}
                    />
                    <TextInput
                        placeholder="Email"
                        style={styles.inputEmail}
                    />
                </SafeAreaView>
            </View>
           <View style={styles.containerBtn}>
           <Pressable style={styles.btn}>
                <Text style={styles.textBtn}>Next</Text>
            </Pressable>
           </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerLogo: {
        flex: 3,
        alignItems: 'center',
        justifyContent: "flex-end",
    },
    logoLock: {
        width: 105,
        height: 116,
    },
    containerTitle: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    textTitle: {
        width: 150,
        fontSize: 25,
        fontWeight: 700,
        textAlign: 'center',
    },
    containerContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textContent: {
        width: '80%',
        fontSize: 15,
        fontWeight: 700,
        textAlign: 'center',
    },
    containerInputForm: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputForm:{
        width:'80%',
        height: 45,
        backgroundColor:'#C4C4C4',
        flexDirection: "row",
        justifyContent:"flex-start"
    },
    iconEmail: {
        width: 48,
        height: 45,
    },
    inputEmail:{
        width:'100%',
        fontSize:15,
        fontWeight:400,
    },
    containerBtn: {
        flex: 3,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    btn: {
        width: '80%',
        height: 48,
        marginTop: 20,
        backgroundColor: '#E3C000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtn:{
        fontSize: 18,
        fontWeight: 700,
        textAlign:"center"
    }

});