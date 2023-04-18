import React, { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { dummyData } from '../../../screens/main/data';
import { ExerciseContext } from '../../../store/exerciseContext';
import { addSetToFirebase } from '../../../util/firebase/http';
import AddSetModal from './AddSetModal';
import CurrentExercise from './CurrentExercise';
import Header from './Header';
import SetAddButtons from './SetAddButtons';


const InExercise = ({ navigation, route }) => {
    // Get the ordered exercises from navigation parameters
    const { orderedExercises } = route.params;
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
    const currentExercise = orderedExercises[currentExerciseIndex];
    const exerciseName = currentExercise ? currentExercise.name : '';
    
    const exerciseCtx = useContext(ExerciseContext);
    
    //modal props
    const [modalVisible, setModalVisible] = useState(false);
    const userId = 'stu'

    // useEffect(() => {
    //   // get all sets from firebase
      

    //   // Filter the dummyData to only show data which matches the exerciseName
    //   // const filteredSets = dummyData[0].Sets.filter(
    //   const filteredSets = exerciseCtx.Sets.filter(
    //     (set) => set.exerciseName === exerciseName
    //   );
    //   // Use forEach to add those to the global context using addSet
    //   filteredSets.forEach((set) => {
    //     exerciseCtx.addSet(set);
    //   });
    // }, [exerciseName]);
  
    const setsForCurrentExercise = exerciseCtx.exerciseData.Sets.filter(
      (set) => set.exerciseName === exerciseName
    );
    
    const repeatSet = setsForCurrentExercise[0];

    const handleAddSet = async (newSet) => {
        console.log("added ", newSet)
        // add to firebase
        const newSetFirebaseId = await addSetToFirebase(userId, newSet);
        // console.log("newSetFirebaseId ", newSetFirebaseId)
        //to context
        exerciseCtx.addSet(
            {id: newSetFirebaseId.name, 
            exerciseName: exerciseName, 
            weight: newSet.lbs, 
            reps: newSet.reps, 
            date: newSet.date});
    }

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

