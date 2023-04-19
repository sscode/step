import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { GlobalStyles } from '../../../constants/styles';


const ExerciseItem = ({ exercise, onSelect }) => {
  const [active, setActive] = useState(false);

  const handleSelect = () => {
    setActive(!active);
    onSelect(exercise.id);
  };

  return (
    <TouchableOpacity onPress={handleSelect} style={styles.container}>
      <Text style={styles.exerciseName}>{exercise.name}</Text>
      <MaterialIcons
        name={active ? 'radio-button-checked' : 'radio-button-unchecked'}
        size={24}
        color={active ? GlobalStyles.colors.black : GlobalStyles.colors.gray500}
      />
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
