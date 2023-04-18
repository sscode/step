import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SmallSummary = ({ sets }) => {
  const totalSets = sets.length;
  const totalReps = sets.reduce((acc, set) => acc + set.reps, 0);
  const totalLbs = sets.reduce((acc, set) => acc + set.weight, 0);

  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.summaryText}>Sets: {totalSets}</Text>
      <Text style={styles.summaryText}>Total Reps: {totalReps}</Text>
      <Text style={styles.summaryText}>Total Lbs: {totalLbs}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  summaryText: {
    fontSize: 14,
    color: '#333',
  },
});

export default SmallSummary;
