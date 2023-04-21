import React, { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { ExerciseContext } from '../../../store/exerciseContext';
import MainBG from '../../../UI/MainBG';
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

    // Hide the back button in the header
    useEffect(() => {
      navigation.setOptions({
        headerLeft: null,
        headerShown: false,
      });
    }, []);
    
    const exerciseCtx = useContext(ExerciseContext);
    
    //modal props
    const [modalVisible, setModalVisible] = useState(false);
    const userId = exerciseCtx.exerciseData.User.id
  

    //filter to get sets for current exercise
    const setsForCurrentExercise = exerciseCtx.exerciseData.Sets.filter(
      (set) => set.exerciseName === exerciseName
    );
    
    //get the last set for the current exercise in order to repeat it
    const repeatSet = setsForCurrentExercise[0];

    const handleAddSet = async (newSet) => {
        console.log("added ", newSet)
        // add to firebase
        const newSetFirebaseId = await addSetToFirebase(userId, newSet);
        // console.log("newSetFirebaseId ", newSetFirebaseId.name)
        //to context
        exerciseCtx.addSet(
            {id: newSetFirebaseId.name, 
            exerciseName: exerciseName, 
            lbs: newSet.lbs, 
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

      // Inside the InExercise component
      console.log('setsForCurrentExercise ids:', setsForCurrentExercise.map(set => set.id));

      
      
    return (
      <MainBG>
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
      </MainBG>
    );
  };

export default InExercise;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 48,
    }
  });

