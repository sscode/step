import { View, StyleSheet } from 'react-native'
import React from 'react'
import ColorSwatch from '../../../../../UI/ColorSwatch'

const SetColor = ({activeColor, handleColorPress}) => {

  return (
    <View style={styles.container}>
        <ColorSwatch 
        activeColor={activeColor}
        handleColorPress={handleColorPress}
        />
    </View>
  )
}

export default SetColor;

const styles = StyleSheet.create({
    container: {
        width: '80%',
    },
});