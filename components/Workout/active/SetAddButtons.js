import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';
import { ExerciseContext } from '../../../store/exerciseContext';
import { addSetToFirebase } from '../../../util/firebase/http';

const SetAddButtons = ({ repeatSet, showModal }) => {

    const exerciseCtx = useContext(ExerciseContext);
    const userId = exerciseCtx.exerciseData.User.id

    const repeatHandler = async () => {
        console.log('repeatHandler', repeatSet.exerciseName);
        const newSet = {
            exerciseName: repeatSet.exerciseName,
            lbs: repeatSet.lbs,
            reps: repeatSet.reps,
            date: new Date().toISOString(),
        };
        //add to firebase
        const newSetFirebaseId = await addSetToFirebase(userId, newSet)
        
        const newSetWithId = { ...newSet, id: newSetFirebaseId.name };
        //add to context
        exerciseCtx.addSet(newSetWithId);
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
    borderColor: GlobalStyles.colors.primary500,
    borderWidth: 2,
    backgroundColor: GlobalStyles.colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  repeatAddButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500,
  },
});

export default SetAddButtons;
