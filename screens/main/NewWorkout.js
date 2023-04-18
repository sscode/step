import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AddExerciseButton from '../../components/Workout/pre/AddExerciseButton';
import AddExerciseModal from '../../components/Workout/pre/AddExerciseModal';
import SetOrderButton from '../../components/Workout/pre/SetOrderButton';
import { GlobalStyles } from '../../constants/styles';
import { ExerciseContext } from '../../store/exerciseContext';
import { addExercise } from '../../util/firebase/http';
import { dummyData } from './data';
import ExerciseList from '../../components/Workout/pre/ExerciseList';

const NewWorkout = ({ navigation }) => {

    const exerciseCtx = useContext(ExerciseContext);
    
    useEffect(() => {
        //clear context
        exerciseCtx.clearExercises();
        // Fetch exercises from dummy data here
        const data = dummyData
        data[1].Exercises.forEach(exercise => {
            exerciseCtx.addExercise(exercise);
        })

    }, []);


    // console.log("NewWorkout ", exerciseCtx.exerciseData.Exercises)

    const exercises = exerciseCtx.exerciseData.Exercises;

  const [selectedExercisesIds, setSelectedExercisesIds] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newExerciseName, setNewExerciseName] = useState('');

  const handleAddExercise = async () => {
    // console.log("newExerciseName ", newExerciseName)
    // const userId = 'stu';
    const newExerciseFirebaseId = Math.random().toString(36).substring(7);
    // const newExerciseFirebaseId = await addExercise(userId, newExerciseName);
    // console.log('newExercise', newExerciseFirebaseId);
    exerciseCtx.addExercise({id: newExerciseFirebaseId, name: newExerciseName});
    setModalVisible(false);
    setNewExerciseName('');
  };
  

  const toggleExercise = (exerciseId) => {
    if (selectedExercisesIds.includes(exerciseId)) {
      setSelectedExercisesIds(
        selectedExercisesIds.filter((id) => id !== exerciseId)
      );
    } else {
      setSelectedExercisesIds([...selectedExercisesIds, exerciseId]);
    }
  };

  const setOrder = () => {
    const selectedExercises = exercises.filter((exercise) =>
      selectedExercisesIds.includes(exercise.id)
    );
    if(selectedExercises.length === 0) {
        alert("Please select at least one exercise")
        return;
    } else {
        navigation.navigate('OrderExercises', {
          selectedExercises,
        });
    }
  };

  return (
    <View style={styles.container}>
        <AddExerciseButton onPress={() => setModalVisible(true)} />
        <ExerciseList exercises={exercises} toggleExercise={toggleExercise} selectedExercisesIds={selectedExercisesIds}/>
        <SetOrderButton 
            onPress={setOrder} />
        <AddExerciseModal
            visible={modalVisible}
            onAdd={handleAddExercise}
            onCancel={() => setModalVisible(false)}
            onChangeText={setNewExerciseName}
            value={newExerciseName}
        />
    </View>
  );
};

export default NewWorkout;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: GlobalStyles.colors.gray200,
    }
  });
