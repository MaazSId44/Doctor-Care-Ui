import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import CategoryItem from './CategoryItem'

const itemSeparator = () => {
    return(
        <View style={{width: 20}} />
    )
}

export default  Categories = ({data}) => {
    return (
        <View style={styles.container}>
            
            <FlatList 
                data={data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={itemSeparator}
                renderItem={({item}) => <CategoryItem item= {item} />}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    }
})
