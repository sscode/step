import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const SaveExercise = ({saveHandler}) => {

  return (
    <View>
        <AntDesign 
        onPress={saveHandler}
        name="save" size={24} color="black" />
    </View>
  )
}

export default SaveExercise