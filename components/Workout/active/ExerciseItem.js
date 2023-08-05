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
    <View style={styles.outerContainer}>
      <View style={styles.colorIndicator}></View>
      <TouchableOpacity onPress={startWorkout} style={styles.container}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    // backgroundColor: 'red',
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
    backgroundColor: GlobalStyles.colors.primary500,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    backgroundColor: GlobalStyles.colors.white,
    // backgroundColor: 'blue',
    width: '100%', 
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  exerciseName: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: GlobalStyles.colors.gray700,
  },
});

export default ExerciseItem;
