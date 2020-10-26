import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Top() {
    return (
        <View style={styles.container}>
            <Text style={styles.nameText}>Hi, Olivia </Text>
            <Text style={styles.welcomeText}>Welcome Back</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 28,
        marginBottom: 30
        //backgroundColor: 'green',
    },
    nameText:{
        fontSize: 25,
        fontWeight: '400'
    },
    welcomeText:{
        fontSize: 30,
        fontWeight: '700',
        letterSpacing: 0.45,
        lineHeight: 40
    }
})
