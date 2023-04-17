import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import { addSetToFirebase } from '../../util/firebase/http';
import AddSetModal from './AddSetModal';
import CurrentExercise from './CurrentExercise';
import Header from './Header';
import SetAddButtons from './SetAddButtons';
import WorkoutSummary from './WorkoutSummary';


const InExercise = ({
    workoutName,
    repeatSet,
    addSet,
    workoutData,
    pastExerciseHistory,
    navigation,
    route,
  }) => {

    // Get the ordered exercises from navigation parameters
    const { orderedExercises } = route.params;
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
    const currentExercise = orderedExercises[currentExerciseIndex];
    const exerciseName = currentExercise ? currentExercise.name : '';


    const [currentWorkoutData, setCurrentWorkoutData] = useState(workoutData);
    //modal props
    const [modalVisible, setModalVisible] = useState(false);
  

    const handleAddSet = async (newSet) => {
        // Add the set to Firebase and local context here
        // Include current time for submission
      
        const userId = 'stu'; // Replace this with the current user's ID
        const exerciseId = 'exc1'; // Replace this with the current exercise's ID
        const workoutId = 'wrkout1'; // Replace this with the current workout's ID
      
        const addedSet = await addSetToFirebase(userId, exerciseId, workoutId, newSet);
        if (addedSet) {
          console.log('Set added successfully:', addedSet);
      
          // Update the workoutData state with the new set
          const updatedWorkoutData = {
            ...currentWorkoutData,
            sets: [...currentWorkoutData.sets, newSet],
          };
      
          setCurrentWorkoutData(updatedWorkoutData);
        } else {
          console.error('Error adding set');
        }
      };

      const nextExercise = () => {
        if (currentExerciseIndex < orderedExercises.length - 1) {
          setCurrentExerciseIndex(currentExerciseIndex + 1);
        }
      };
  
      
    return (
      <View style={styles.container}>
        <Header exerciseName={exerciseName} nextExercise={nextExercise} />
        <SetAddButtons repeatSet={repeatSet} showModal={() => setModalVisible(true)} />
        <CurrentExercise
        currentWorkoutData={currentWorkoutData && currentWorkoutData[currentExerciseIndex]}
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

