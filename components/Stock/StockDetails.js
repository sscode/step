import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StockDetails = ({stockName}) => {
  return (
    <View>
      <Text>{stockName}</Text>
    </View>
  )
}

export default StockDetails

const styles = StyleSheet.create({})