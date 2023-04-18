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
    marginTop: 20,
    alignSelf: 'center',
    width: 200,
    padding: 10,
    borderRadius: 10,
    backgroundColor: GlobalStyles.colors.black,
  },
  addButtonText: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: GlobalStyles.colors.white,
    fontSize: 16,
  },
});

export default AddExerciseButton;
