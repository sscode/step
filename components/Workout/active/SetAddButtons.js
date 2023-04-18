import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ExerciseContext } from '../../../store/exerciseContext';
import { addSetToFirebase } from '../../../util/firebase/http';

const SetAddButtons = ({ repeatSet, showModal }) => {

    const exerciseCtx = useContext(ExerciseContext);

    const repeatHandler = () => {
        console.log('repeatHandler', repeatSet.exerciseName);
        const newSet = {
            exerciseName: repeatSet.exerciseName,
            lbs: repeatSet.lbs,
            reps: repeatSet.reps,
            date: new Date().toISOString(),
        };
        //add to firebase
        addSetToFirebase('stu', newSet)
        //add to context
        exerciseCtx.addSet(newSet);
    }

  return (
    <View style={styles.repeatAddContainer}>
      <TouchableOpacity style={styles.repeatAddButton} onPress={repeatHandler}>
        <Text style={styles.repeatAddButtonText}>Repeat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.repeatAddButton} onPress={showModal}>
        <Text style={styles.repeatAddButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  repeatAddContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 16,
  },
  repeatAddButton: {
    width: 130,
    height: 130,
    borderRadius: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  repeatAddButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#424242',
  },
});

export default SetAddButtons;
