import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';


export default CategoryItem = ({item}) => {
    return (
        <View style={styles.container}>
            
            <View style={styles.subContainer}>

                <Image 
                    source={item.icon}
                    style={styles.iconStyle}
                    resizeMode="contain"
                />

                <Text style={styles.titleStyle}>{item.title}</Text>

            </View>

            <ImageBackground 
                style={styles.doctorContainer}
                source={require('../assets/icons/button_bg.png')}
            >
                <Text style={styles.numOfDoctorText}>{item.numOfDoctors}</Text>
            </ImageBackground>
            

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 90,
        height: 110,
        shadowColor: 'rgba(0, 0, 0, 0.09)',
        shadowOffset: { width: 15, height: 0 },
        shadowRadius: 15,
        borderRadius: 5,
        backgroundColor: '#107163',
    },
    subContainer:{
        alignItems: 'center'
    },
    iconStyle:{
        width: 22,
        height: 28,
        marginTop: 15
    },
    titleStyle:{
        color: '#ffffff',
        //fontFamily: 'Roboto',
        fontSize: 13,
        fontWeight: '500',
        fontStyle: 'normal',
        textAlign: 'left',
        letterSpacing: 0.2,
        lineHeight: 27,
        marginTop: 5,
        marginBottom: 4
    },
    doctorContainer:{
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    numOfDoctorText:{
        color: '#ffffff',
        fontSize: 8,
        fontWeight: '400',
        fontStyle: 'normal',
        letterSpacing: 0.12,
        lineHeight: 19,
        textAlign: 'center'
    }
})
