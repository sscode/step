import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Keyboard } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';
import { ExerciseContext } from '../../../store/exerciseContext';
import { addSetToFirebase, updateExerciseLastSet } from '../../../util/firebase/http';
import { Vibration } from 'react-native';
import * as Haptics from 'expo-haptics';
import { userContext } from '../../../store/userContext';
import InputRow from './InputRow';


const AddSet = ({exerciseName, exerciseId}) => {
  const exerciseCtx = useContext(ExerciseContext);
  const user = exerciseCtx.exerciseData.User;

  const userCtx = useContext(userContext);

  // console.log('AddSet.js: ', user, exerciseId);

  //filter to get sets for current exercise
  const setsForCurrentExercise = exerciseCtx.exerciseData.Sets.filter(
    (set) => set.exerciseName === exerciseName
  );

  setsForCurrentExercise.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  //get the last set for the current exercise in order to repeat it
  const repeatSet = setsForCurrentExercise[0];

  // Set initial state of reps and weight to 0 if repeatSet is undefined or setsForCurrentExercise is empty
  const initialReps = repeatSet ? repeatSet.reps.toString() : '0';
  const initialWeight = repeatSet ? repeatSet.lbs.toString() : '0';
  const [reps, setReps] = useState(initialReps);
  const [weight, setWeight] = useState(initialWeight);


  const addSetHandler = async () => {

    if (reps <= 0 || weight < 0) {
      // Display an error message or take appropriate action
      console.log('Reps and weight must be non-negative values.');
      return;
    }

    const newSet = {
      exerciseName: exerciseName,
      lbs: parseFloat(weight),
      reps: parseInt(reps, 10),
      date: new Date().toISOString(),
    };
    
    // Add to firebase
    const newSetFirebaseId = await addSetToFirebase(user, newSet);
    const newSetWithId = { ...newSet, id: newSetFirebaseId.name };
    //Add to firebase Exercise lastSet
    updateExerciseLastSet(user, exerciseId, newSet.date)
    
    // Add to context
    exerciseCtx.addSet(newSetWithId);
    exerciseCtx.updateLastSet(exerciseId, newSet.date);

    //vibrate
    if(userCtx.haptic){
      console.log('vibrate');
      // Vibration.vibrate([0, 30]);
      Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Success
      )
    }

    // close keyboards
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
        <View style={styles.inputForm}>
          <InputRow
            label="Reps"
            value={reps}
            placeholder={reps}
            onChangeText={setReps}
            amount={1}
          />
          <InputRow
          label="Weight"
          value={weight}
          placeholder={weight}
          onChangeText={setWeight}
          amount={5}
          />
        </View>
        <TouchableOpacity style={styles.repeatAddButton} onPress={addSetHandler}>
          <Text style={styles.buttonText}>Add Set</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 16,
    // backgroundColor: GlobalStyles.colors.primary,
  },
  inputForm: {
    // width: '100%',
    // flexDirection: 'column',
    // backgroundColor: GlobalStyles.colors.primary100,
    marginBottom: 16,
  },
  repeatAddButton: {
    width: '60%',
    paddingVertical: 16,
    borderRadius: 5,
    borderColor: GlobalStyles.colors.primary,
    borderWidth: 3,
    backgroundColor: GlobalStyles.colors.primary50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: GlobalStyles.colors.white,
  },
});

export default AddSet;
