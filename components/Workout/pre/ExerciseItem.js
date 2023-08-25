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
  const exerciseColor = exercise.color;

  const startWorkout = () => {
    navigation.navigate('InExercise', {
      exerciseId,
      exerciseName,
      exerciseColor,
    });
  };

  return (
    <View style={styles.outerContainer}>
      <View
        style={[
          styles.colorIndicator,
          { backgroundColor: exerciseColor || GlobalStyles.colors.primary500 }
        ]}
      ></View>
      <TouchableOpacity onPress={startWorkout} style={styles.container}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 8,
    marginBottom: 8,
  },
  colorIndicator: {
    width: 8,
    height: '100%',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%', 
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: GlobalStyles.colors.white,
  },
  exerciseName: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: GlobalStyles.colors.gray700,
  },
});

export default ExerciseItem;