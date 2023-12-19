import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const NavButton = ({text, pressAction}) => {

    const pressHandler = () => {
        pressAction()
        console.log('pressed')
    }

  return (
    <TouchableOpacity
    onPress={pressHandler}
    style={styles.container}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

export default NavButton

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        backgroundColor: '#6dff37',
        borderRadius: 8,
    },
})