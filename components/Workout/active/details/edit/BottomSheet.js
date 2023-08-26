import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useContext, useState } from 'react'
import EditName from './EditName'
import SetColor from './SetColor'
import DeleteExercise from './DeleteExercise'
import SaveExercise from './SaveExercise'
import { deleteExerciseFromFirebase, editExercise } from '../../../../../util/firebase/http'
import { ExerciseContext } from '../../../../../store/exerciseContext'
import { useNavigation } from '@react-navigation/native'

const {height} = Dimensions.get('window')

const BottomSheet = ({exerciseName, exerciseId, exerciseColor}) => {

    const exerciseCtx = useContext(ExerciseContext);
    const userId = exerciseCtx.exerciseData.User.id
    const exercises = exerciseCtx.exerciseData.Exercises;

    const navigation = useNavigation();


    const [activeColor, setActiveColor] = useState(exerciseColor);
    // const [editedName, setEditedName] = useState(exerciseName);

    const navigateToList = () => {
        navigation.navigate('NewWorkout', {screen: 'NewWorkout'})
    }


    const saveHandler = async () => {
        try {
            //update firebase
            await editExercise(userId, exerciseId, activeColor) 
            
            //call context
            exerciseCtx.editExercise({exerciseId, activeColor})
            navigateToList()
        
        } catch (error) {
            console.log(error)
        }
    }

    const deleteHandler = async () => {
        try {
            //update firebase
            await deleteExerciseFromFirebase(userId, exerciseId)
            //call context
            exerciseCtx.deleteExercise({exerciseId})
            navigateToList()

        } catch (error) {
            console.log(error)
        }
    }


  return (
    <View style={styles.container}>
        {/* <View style={styles.line}></View> */}
        <View style={styles.options}>
            <SetColor 
            activeColor={activeColor}
            handleColorPress={setActiveColor}
            />
            {/* <EditName 
            exerciseName={exerciseName}
            editedName={editedName}
            setEditedName={setEditedName}
            /> */}
            <View style={styles.buttons}>
                <DeleteExercise 
                deleteHandler={deleteHandler}
                /> 
                <SaveExercise 
                saveHandler={saveHandler}
                />
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