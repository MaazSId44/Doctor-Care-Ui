import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default TopRatedItem = ({item}) => {
    
    return (

        <View style={styles.container}>
            
            <View style={styles.leftContainer}>

                <View style={styles.avatarContainer}>
                    <Image 
                        source={item.image}
                        style={styles.avatar}
                    />
                </View>

                <View style={styles.titleContainer}>

                    <Text style={styles.nameStyle}>{item.name}</Text>
                    <Text style={styles.jobStyle}>{item.job}</Text>

                </View>

            </View>

            <View style={styles.ratingContainer}>

                <View style={styles.ratingSubContainer}>
                    <Image 
                        source={require('../assets/icons/star.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.icontext}>{item.rating}</Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.ratingSubContainer}>
                    <Image 
                        source={require('../assets/icons/locationpin.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.icontext}>{item.location}km</Text>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 84,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.09)',
        shadowOffset: { width: 10, height: 0 },
        shadowRadius: 15,
        shadowOpacity: 0.8,
        elevation: 5,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        padding: 12,
        marginBottom: 20
    },
    leftContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    avatarContainer:{
        width: 54,
        height: 60,
        borderRadius: 5,
        backgroundColor: '#F7F7F7',
        marginRight: 12,
        alignItems: 'center',
        //justifyContent: 'center',
    },
    avatar:{
        width: '100%',
        height: '100%'
    },
    nameStyle:{
        color: '#363636',
        //fontFamily: 'Roboto',
        fontSize: 17,
        fontWeight: '700',
        fontStyle: 'normal',
        textAlign: 'left',
        letterSpacing: 0.26,
        lineHeight: 27,
    },
    jobStyle:{
        color: '#ababab',
        //fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: '300',
        fontStyle: 'normal',
        textAlign: 'left',
        letterSpacing: 0.21,
        lineHeight: 27,
    },
    titleContainer:{
        marginLeft: 15
    },
    ratingContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginBottom: 8
    },
    ratingSubContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon:{
        width: 11,
        height: 11,
        resizeMode: 'contain',
        marginRight: 4
    },
    icontext:{
        color: '#000000',
        fontSize: 11,
        fontWeight: '400',
        fontStyle: 'normal',
        textAlign: 'left',
        letterSpacing: 0.12,
        lineHeight: 19,
    },
    divider:{
        width: 1,
        height: 11,
        borderColor: '#e1e1e1',
        borderStyle: 'solid',
        borderWidth: 1,
        marginHorizontal: 8
    }
})
