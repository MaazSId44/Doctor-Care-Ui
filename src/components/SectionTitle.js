import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default SectionTitle = ({sectionName}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.section}>{sectionName}</Text>
            <Text style={styles.seeall}>See all</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    section:{
        color: '#363636',
        //fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: '700',
        fontStyle: 'normal',
        textAlign: 'left',
        letterSpacing: 0.3,
        lineHeight: 27,
    },
    seeall:{
        color: '#5e5d5d',
        //fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: '400',
        fontStyle: 'normal',
        textAlign: 'left',
        letterSpacing: 0.27,
        lineHeight: 27,
    }
})
