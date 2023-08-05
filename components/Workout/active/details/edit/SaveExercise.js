import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const SaveExercise = () => {

    const saveExercise = () => {
        console.log('save exercise')
    }

  return (
    <View>
        <AntDesign 
        onPress={saveExercise}
        name="save" size={24} color="black" />
    </View>
  )
}

export default SaveExercise