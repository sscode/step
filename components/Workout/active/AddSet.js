import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Keyboard } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';
import { ExerciseContext } from '../../../store/exerciseContext';
import { addSetToFirebase } from '../../../util/firebase/http';

const AddSet = ({exerciseName}) => {
  const exerciseCtx = useContext(ExerciseContext);
  const user = exerciseCtx.exerciseData.User;

  console.log('AddSet.js: ', user);

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
    
    // Add to context
    exerciseCtx.addSet(newSetWithId);

    // close keyboards
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
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
            <Text style={styles.inputHeader}>Weight (lbs)</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 16,
  },
  innerContainer: {
    paddingVertical: 16,
    width: 230,
    borderColor: GlobalStyles.colors.primary500,
  },
  inputForm: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderColor: GlobalStyles.colors.primary500,
  },
  inputHeader: {
    color: GlobalStyles.colors.white,
    fontSize: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    // borderWidth: 2,
    // borderColor: GlobalStyles.colors.primary500,
    // borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
    // width: '100%',
  },
  input: {
    paddingVertical: 8,
    textAlign: 'center',
    color: GlobalStyles.colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  repeatAddButton: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 5,
    borderColor: GlobalStyles.colors.primary500,
    borderWidth: 2,
    backgroundColor: GlobalStyles.colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    fontSize: 18,
    color: GlobalStyles.colors.primary500,
  },
});

export default AddSet;
