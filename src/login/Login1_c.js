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
                <Text  style={styles.logoText}>CODE</Text>
            </View>
            <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>VERIFICATION</Text>
            </View>
            <View style={styles.containerContent}>
                <Text style={styles.textContent}>Enter ontime password sent on ++849092605798</Text>
            </View>
            <View style={styles.containerInputForm}>
                <SafeAreaView style={styles.inputForm}>
                    <TextInput
                        style={styles.inputcode}
                    />
                    <TextInput
                        style={styles.inputcode}
                    />
                     <TextInput
                        style={styles.inputcode}
                    />
                    <TextInput
                        style={styles.inputcode}
                    />
                     <TextInput
                        style={styles.inputcode}
                    />
                    <TextInput
                        style={styles.inputcode}
                    />
                </SafeAreaView>
            </View>
           <View style={styles.containerBtn}>
           <Pressable style={styles.btn}>
                <Text style={styles.textBtn}>VERIFY CODE</Text>
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
    logoText: {
        height: 70,
        fontSize:60,
        fontWeight:700,
        textAlign:"center"

    },
    containerTitle: {
        flex: 2,
        marginTop:20,
        justifyContent: "center",
        alignItems: "center",
    },
    textTitle: {
        width: 300,
        fontSize: 20,
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
        flexDirection:"row",
        width:'80%',
        height: 45,
        marginTop:10,
        flexDirection: "row",
        justifyContent:"flex-start"
    },
    inputcode:{
        width:'100%',
        fontSize:15,
        fontWeight:400,
        borderWidth:1,

    },
    containerBtn: {
        flex: 3,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    btn: {
        width: '90%',
        height: 48,
        marginTop: 30,
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