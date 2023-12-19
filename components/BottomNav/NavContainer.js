import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavButton from './NavButton'

const NavContainer = ({addGroup}) => {
  return (
    <View style={styles.container}>
      <NavButton text={"+"} pressAction={addGroup}/>
      <NavButton text={"User"} />
    </View>
  )
}

export default NavContainer

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        width: '100%',
        height: 80,
    },
})