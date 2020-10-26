import React, { Component } from 'react'
import { Text, View , StyleSheet,StatusBar} from 'react-native'
import {SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';
import Header from '../../components/Header';
import Hero from '../../components/Hero';


const Home = () =>  {

    const insets = useSafeAreaInsets();
    
    return (
        <View style={styles.container}>

            <StatusBar 
                translucent
                hidden={true}
            />

            <LinearGradient 
                colors={['#053f5e', '#053f5e']} 
                style={styles.linearGradient}
                {...deg(280)}    
            >


                <Header top={insets.top} />

                <Hero />


            </LinearGradient>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    linearGradient:{
        width: '100%',
        height: '100%'
    }
})

export default Home;

