import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function MoveButtons({ index, moveUp, moveDown }) {

  return (
    <View style={styles.arrowButtons}>
        <TouchableOpacity onPress={() => moveUp(index)}>
        <Text style={styles.arrowButton}>▲</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => moveDown(index)}>
        <Text style={styles.arrowButton}>▼</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    arrowButtons: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      arrowButton: {
        fontSize: 50,
        color: '#424242',
        marginBottom: 4,
        paddingLeft: 16,
      },
})
