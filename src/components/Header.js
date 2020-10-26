import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native'


export default Header = (props) => {

    return (
        <View style={{...styles.hader,marginTop: props.top ? props.top : 0 }}>
            <Image 
                source={require('../assets/icons/menu.png')}
                style={styles.menu}
            />
            <View style={styles.rightContainer}>
                <Image 
                    source={require('../assets/icons/bell.png')}
                    style={styles.bell}
                />
                <Image 
                    source={require('../assets/icons/rect_avatar.png')}
                    style={styles.avatar}
                />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    hader:{
        height: 60,
        width: '100%',
        backgroundColor: '#053f5e',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25
    },
    menu:{
        height: 18,
        width: 20,
        resizeMode: 'contain',
        tintColor: 'white'
    },
    rightContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        //backgroundColor: 'black'
    },
    bell:{
        height: 25,
        width: 25,
        resizeMode: 'contain'
    },
    avatar:{
        height: 35,
        width: 35,
        resizeMode: 'cover',
        marginLeft: 18
    }

})
