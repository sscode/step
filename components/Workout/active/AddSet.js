import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Keyboard } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';
import { ExerciseContext } from '../../../store/exerciseContext';
import { addSetToFirebase, updateExerciseLastSet } from '../../../util/firebase/http';
import { Vibration } from 'react-native';


const AddSet = ({exerciseName, exerciseId}) => {
  const exerciseCtx = useContext(ExerciseContext);
  const user = exerciseCtx.exerciseData.User;


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

    if(reps === '0'){
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
    Vibration.vibrate([0, 30]);

    // close keyboards
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
        <View style={styles.inputForm}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputHeader}>Reps</Text>
            <TextInput
              style={styles.input}
              placeholder={reps}
              placeholderTextColor={GlobalStyles.colors.white}
              value={reps}
              onChangeText={setReps}
              keyboardType="numeric"
              maxLength={3}
              onFocus={() => setReps('')}
              />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputHeader}>Weight</Text>
            <TextInput
              style={styles.input}
              placeholder={weight}
              placeholderTextColor={GlobalStyles.colors.white}
              value={weight}
              onChangeText={setWeight}
              keyboardType="numeric"
              maxLength={3}
              onFocus={() => setWeight('')}
              />
          </View>
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
    left: -5,
    width: '50%',
    flexDirection: 'row',
    // backgroundColor: GlobalStyles.colors.primary100,
  },
  inputContainer: {
    marginVertical: 16,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  inputHeader: {
    color: GlobalStyles.colors.white,
    fontSize: 12,
    // fontWeight: 'small',
  },
  input: {
    paddingVertical: 8,
    textAlign: 'center',
    color: GlobalStyles.colors.white,
    fontSize: 36,
    fontWeight: 'bold',
  },
  repeatAddButton: {
    width: '70%',
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
