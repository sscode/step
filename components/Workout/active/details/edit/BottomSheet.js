import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import EditName from './EditName'
import SetColor from './SetColor'
import DeleteExercise from './DeleteExercise'
import SaveExercise from './SaveExercise'


const {height} = Dimensions.get('window')

const BottomSheet = ({exerciseName}) => {
  return (
    <View style={styles.container}>
        {/* <View style={styles.line}></View> */}
        <View style={styles.options}>
            <SetColor />
            <EditName exerciseName={exerciseName}/>
            <View style={styles.buttons}>
                <DeleteExercise /> 
                <SaveExercise />
            </View>
        </View>
    </View>
  )
}

export default BottomSheet

const styles = StyleSheet.create({
    container: {
        height: 250,
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderRadius: 20,
    },
    line: {
        height: 5,
        width: 75,
        backgroundColor: 'black',
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 15,
    },
    options: {
        height: '70%',
        // backgroundColor: 'red',
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    buttons: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})