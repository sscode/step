import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Header = ({ exerciseName, nextExercise }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.workoutName}>{exerciseName}</Text>
      <TouchableOpacity onPress={nextExercise}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  workoutName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  nextButtonText: {
    fontSize: 18,
    color: '#007AFF',
  },
});

export default Header;
