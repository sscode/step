import React, { useContext, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import { ExerciseContext } from '../../store/exerciseContext';
import { addSetToFirebase } from '../../util/firebase/http';
import AddSetModal from './AddSetModal';
import CurrentExercise from './CurrentExercise';
import Header from './Header';
import SetAddButtons from './SetAddButtons';


const InExercise = ({ navigation, route, repeatSet }) => {
    // Get the ordered exercises from navigation parameters
    const { orderedExercises } = route.params;
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
    const currentExercise = orderedExercises[currentExerciseIndex];
    const exerciseName = currentExercise ? currentExercise.name : '';

    const exerciseCtx = useContext(ExerciseContext);

    // Filter the sets for the current exercise
    const setsForCurrentExercise = exerciseCtx.exerciseData.Sets[0].filter(
        (set) => set.exerciseName === exerciseName
    );
    console.log("setsForCurrentExercise ", setsForCurrentExercise)

    //modal props
    const [modalVisible, setModalVisible] = useState(false);
  

    const handleAddSet = async () => {
        console.log("added ")
        exerciseCtx.addNewSet(
            {id: Math.random().toString(36).substring(8), 
            exerciseName: exerciseName, 
            weight: 100, 
            reps: 10, 
            date: "2020-10-10"})
    }
        // Add the set to Firebase and local context here
        // Include current time for submission
        // {id: "0.123456789", exerciseName: "dark", weight: 100, reps: 10, date: "2020-10-10"},
      
        // const addedSet = await addSetToFirebase(userId, exerciseId, workoutId, newSet);


      const nextExercise = () => {
        if (currentExerciseIndex < orderedExercises.length - 1) {
          setCurrentExerciseIndex(currentExerciseIndex + 1);
        } else {
          // Navigate to the WorkoutComplete screen when the last exercise is reached
          navigation.navigate('WorkoutComplete');
        }
      };
      
      
    return (
      <View style={styles.container}>
        <Header exerciseName={exerciseName} nextExercise={nextExercise} />
        <SetAddButtons repeatSet={repeatSet} showModal={() => setModalVisible(true)} />
        <CurrentExercise
        exerciseName={exerciseName}
        setsForCurrentExercise={setsForCurrentExercise}
        />
      <AddSetModal 
        exerciseName={exerciseName}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        onConfirm={handleAddSet}
      />
      </View>
    );
  };

export default InExercise;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });

