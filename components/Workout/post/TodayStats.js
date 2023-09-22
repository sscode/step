import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';
import { ExerciseContext } from '../../../store/exerciseContext';
import ExerciseStats from './ExerciseStats';

const TodayStats = () => {
  const exerciseCtx = useContext(ExerciseContext);

  const uniqueExerciseNames = [
    ...new Set(exerciseCtx.exerciseData.Sets.map((set) => set.exerciseName)),
  ];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const grandTotalLbs = uniqueExerciseNames.reduce((total, exerciseName) => {
    const setsForToday = exerciseCtx.exerciseData.Sets.filter(
      (set) =>
        set.exerciseName === exerciseName &&
        new Date(set.date).setHours(0, 0, 0, 0) === today.getTime()
    );

    const totalLbsForExercise = setsForToday.reduce((acc, set) => {
      return acc + set.reps * set.lbs;
    }, 0);

    return total + totalLbsForExercise;
  }, 0);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Today's Stats</Text> */}
      {uniqueExerciseNames.map((exerciseName) => {
        const setsForToday = exerciseCtx.exerciseData.Sets.filter(
          (set) =>
            set.exerciseName === exerciseName &&
            new Date(set.date).setHours(0, 0, 0, 0) === today.getTime()
        );

        const totals = setsForToday.reduce((acc, set) => {
            acc.totalReps += set.reps;
            acc.totalLbs += set.reps * set.lbs;
            return acc;
          }, {totalReps: 0, totalLbs: 0});

        // Skip rendering the ExerciseStats if totalReps is 0
        if (totals.totalReps === 0) {
          return null;
        }

        return (
          <ExerciseStats
            key={exerciseName}
            exerciseName={exerciseName}
            totalReps={totals.totalReps}
            totalLbs={totals.totalLbs}
          />
        );
      })}
        <Text style={styles.titleBottom}>Total Lbs: {grandTotalLbs}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.grey,
    paddingVertical: 24,
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
  titleBottom: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TodayStats;
