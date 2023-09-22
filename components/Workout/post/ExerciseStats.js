import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';

const ExerciseStats = ({ exerciseName, totalReps, totalLbs }) => (
  <View style={styles.exerciseStats}>
    <Text style={styles.exerciseName}>{exerciseName}</Text>
    <Text style={styles.statText}>
      Total Reps: {totalReps} | Total Weight: {totalLbs} lbs
    </Text>
  </View>
);

const styles = StyleSheet.create({
  exerciseStats: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  exerciseName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: GlobalStyles.colors.black,
    marginBottom: 6,
  },
  statText: {
    fontSize: 12,
    color: GlobalStyles.colors.grey100,
  },
});

export default ExerciseStats;
