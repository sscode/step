import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { GlobalStyles } from '../../../constants/styles';
import { useNavigation } from '@react-navigation/native';


const ExerciseItem = ({ exercise, onSelect }) => {
  const navigation = useNavigation();

  const [active, setActive] = useState(false);


  const exerciseName = exercise.name;
  const exerciseId = exercise.id;

  const startWorkout = () => {
    navigation.navigate('InExercise', {
      exerciseId,
      exerciseName,
    });
  };

  return (
    <TouchableOpacity onPress={startWorkout} style={styles.container}>
      <Text style={styles.exerciseName}>{exercise.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 8,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: GlobalStyles.colors.gray700,
  },
});

export default ExerciseItem;
