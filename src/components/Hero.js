import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { categories } from '../services/api'
import Categories from './Categories'
import CategoryItem from './CategoryItem'
import Searchbar from './Searchbar'
import SectionTitle from './SectionTitle'
import Top from './Top'
import TopRated from './TopRated'


 
export default function Hero() {
    return (

        <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            
            <Top />

            <View style={styles.searchbarContainer} >

                <Searchbar />

            </View>

            <View style={styles.sectionTitleContainer}>

                <SectionTitle sectionName="Category" />

            </View>

            <View style={styles.categoryContainer}>

                <Categories data={categories} />

            </View>

            <View style={styles.sectionTitleContainer}>

                <SectionTitle sectionName="Top rate" />

            </View>

            <View style={styles.topratedContainer}>

                <TopRated />

            </View>

        </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f6f6f6',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: 10,
        paddingLeft: 25
    },
    searchbarContainer:{
        paddingRight: 25
    },
    sectionTitleContainer:{
        paddingRight: 25,
        marginVertical: 31
    },
    topratedContainer:{
        marginRight: 25
    }
})
