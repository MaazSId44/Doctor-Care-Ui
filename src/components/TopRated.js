import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { toprated } from '../services/api'
import TopRateItem from './TopRateItem'

const itemSeparator = () => {
    return(
        <View style={{height: 20}} />
    )
}

export default TopRated = () => {
    return (
        <View>
            {
              toprated.map((item, index) => {
                  return(
                      <View key={index}>
                          <TopRateItem  item={item} />
                      </View>
                  )
              })
            }
        </View>
    )
}

const styles = StyleSheet.create({})
