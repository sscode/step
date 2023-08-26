import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const DeleteExercise = ({deleteHandler}) => {

    const deleteExercise = () => {
        deleteHandler()
    }

  return (
    <View>
        <AntDesign 
        onPress={deleteExercise}
        name="delete" size={24} color="black" />
    </View>
  )
}

export default DeleteExercise