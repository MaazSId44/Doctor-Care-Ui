import React from 'react'
import { View, Text, TextInput, StyleSheet, Image } from 'react-native'

export default function Searchbar() {
    return (
        <View style={styles.container}>

            <TextInput 
                style={styles.searchText}
                placeholder="Search..." 
            />

            <View style={styles.iconContainer}>
                <Image 
                    source={require('../assets/icons/search.png')}
                    style={styles.icon}
                    resizeMode= 'contain'
                />
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        shadowOffset: { width: 10, height: 0 },
        shadowRadius: 15,
        shadowOpacity: 0.8,
        elevation: 5,
        borderRadius: 5,
        backgroundColor: '#ffffff'
    },
    iconContainer:{
        width: 50,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#107163',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        width: 20,
        height: 20,
        tintColor: '#ffffff'
    },
    searchText:{
        flex: 1,
        color: '#ababab',
        //fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: '400',
        fontStyle: 'normal',
        textAlign: 'left',
        letterSpacing: 1.05,
        lineHeight: 27,
        marginLeft: 15
    }
})