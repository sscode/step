import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SummaryItem = ({ exerciseName, sets }) => {
  const setsForExercise = sets.filter((set) => set.exerciseName === exerciseName);

  const totals = setsForExercise.reduce((acc, set) => {
    acc.totalReps += set.reps;
    acc.totalLbs += set.reps * set.lbs;
    return acc;
  }, {totalReps: 0, totalLbs: 0});

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.exerciseName}>{exerciseName}</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{totals.totalReps}</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{totals.totalLbs} lbs</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
  },
  leftContainer: {
    width: '30%',
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '70%',
  },
  exerciseName: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
  },
  statItem: {
    alignItems: 'flex-end',
    marginLeft: 20,
    width: '40%',
  },
  statNumber: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: '#333',
    textAlign: 'right',
  },
});

export default SummaryItem;
