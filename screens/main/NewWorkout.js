import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AddExerciseModal from '../../components/Workout/pre/AddExerciseModal';
import { GlobalStyles } from '../../constants/styles';
import { ExerciseContext } from '../../store/exerciseContext';
import { addExercise, getUserData } from '../../util/firebase/http';
import ExerciseList from '../../components/Workout/pre/ExerciseList';
import PrimaryButton from '../../UI/PrimaryButton';
import MainBG from '../../UI/MainBG';
import WorkoutStyle from '../../components/Workout/active/WorkoutStyle';

const NewWorkout = ({ navigation }) => {

    const exerciseCtx = useContext(ExerciseContext);
    const userId = exerciseCtx.exerciseData.User.id
    const [toggleState, setToggleState] = useState(false);
    
  const exercises = exerciseCtx.exerciseData.Exercises;

  const [selectedExercisesIds, setSelectedExercisesIds] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newExerciseName, setNewExerciseName] = useState('');

  useEffect(() => {
    //header
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });
  }, []);

  const handleAddExercise = async () => {
    const newExerciseFirebaseId = await addExercise(userId, newExerciseName);
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

  const endWorkout = () => {
    //navigate to the workoutComplete screen
    navigation.navigate('WorkoutComplete');
  }

  return (
    <MainBG>
        <View style={styles.container}>
        <View style={styles.buttonsContainer}>
            <PrimaryButton title={'Add Exercise'} onPress={() => setModalVisible(true)} />
        </View>
        <View style={styles.toggleContainer}>
          {/* <WorkoutStyle toggleState={toggleState} setToggleState={setToggleState}/> */}
        </View>
        <ExerciseList exercises={exercises} toggleExercise={toggleExercise} selectedExercisesIds={selectedExercisesIds} />
        <View style={styles.buttonsContainer}>
            {/* <PrimaryButton title={'Set Order'} onPress={setOrder} style={styles.setOrderButton} /> */}
            <PrimaryButton title={'End Workout'} onPress={endWorkout} style={styles.setOrderButton} />
        </View>
        <AddExerciseModal visible={modalVisible} onAdd={handleAddExercise} onCancel={() => setModalVisible(false)} onChangeText={setNewExerciseName} value={newExerciseName} />
        </View>
    </MainBG>
  );
};

export default NewWorkout;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 96,
    },
    mainBg: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    toggleContainer: {
      flexDirection: 'row',
      justifyContent: 'center', 
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 20,
    },
    button: {
      marginHorizontal: 10,
    },
  });
  
