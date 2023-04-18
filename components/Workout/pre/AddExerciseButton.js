import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';

const AddExerciseButton = ({ onPress }) => (
  <TouchableOpacity style={styles.addButton} onPress={onPress}>
    <Text style={styles.addButtonText}>Add</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: GlobalStyles.colors.black,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: GlobalStyles.colors.white,
    fontSize: 16,
  },
});

export default AddExerciseButton;
