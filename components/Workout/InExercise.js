import React, { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import { dummyData } from '../../screens/main/data';
import { ExerciseContext } from '../../store/exerciseContext';
import { addSetToFirebase } from '../../util/firebase/http';
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
    // const [setsForCurrentExercise, setSetsForCurrentExercise] = useState([]);
    //modal props
    const [modalVisible, setModalVisible] = useState(false);

    const exerciseCtx = useContext(ExerciseContext);
    const setsForCurrentExercise = exerciseCtx.exerciseData.Sets;

    const sortedSetsForCurrentExercise = setsForCurrentExercise.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });

    const repeatSet = sortedSetsForCurrentExercise[0];

    useEffect(() => {
        //clearSet context
        exerciseCtx.clearSets();
        // Get the sets for the current exercise from dummy data and set to context
        const setsForCurrentExercise = dummyData[0].Sets.filter(
            (set) => set.exerciseName === exerciseName  
        );
          
        // console.log("setsForCurrentExercise ", setsForCurrentExercise)
        setsForCurrentExercise.forEach(set => {
            exerciseCtx.addSet(set);
        })
        // setSetsForCurrentExercise(setsForCurrentExercise);
    }, [exerciseName]);

    const handleAddSet = async (newSet) => {
        console.log("added ", newSet)
        exerciseCtx.addSet(
            {id: Math.random().toString(36).substring(8), 
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
        setsForCurrentExercise={sortedSetsForCurrentExercise}
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

