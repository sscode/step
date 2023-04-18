import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ExerciseContext } from '../../../store/exerciseContext';

const TodayStats = () => {
  const exerciseCtx = useContext(ExerciseContext);

  const uniqueExerciseNames = [
    ...new Set(exerciseCtx.exerciseData.Sets.map((set) => set.exerciseName)),
  ];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Stats</Text>
      {uniqueExerciseNames.map((exerciseName) => {
        const setsForToday = exerciseCtx.exerciseData.Sets.filter(
          (set) =>
            set.exerciseName === exerciseName &&
            new Date(set.date).setHours(0, 0, 0, 0) === today.getTime()
        );

        const totalReps = setsForToday.reduce((sum, set) => sum + set.reps, 0);
        const totalLbs = setsForToday.reduce((sum, set) => sum + set.weight, 0);

        return (
          <View key={exerciseName} style={styles.exerciseStats}>
            <Text style={styles.exerciseName}>{exerciseName}</Text>
            <Text style={styles.statText}>
              Total Reps: {totalReps} | Total Weight: {totalLbs} lbs
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  exerciseStats: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  exerciseName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 6,
  },
  statText: {
    fontSize: 12,
    color: '#828282',
  },
});

export default TodayStats;
