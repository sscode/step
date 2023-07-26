import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';
import { ExerciseContext } from '../../../store/exerciseContext';
import SubHeader from './SubHeader';
import SummaryHeader from './SummaryHeader';
import SummaryItem from './SummaryItem';

const SummaryCard = ({ date }) => {
  const exerciseCtx = useContext(ExerciseContext);

  const setsForDate = exerciseCtx.exerciseData.Sets.filter(
    (set) => new Date(set.date).setHours(0, 0, 0, 0) === date
  );

  const exerciseSets = setsForDate.map((set) => ({
    exerciseName: set.exerciseName,
    reps: set.reps,
    lbs: set.lbs,
  }));

  const totalReps = exerciseSets.reduce((total, set) => total + set.reps, 0);
  const totalLbsLifted = exerciseSets.reduce((total, set) => total + set.reps * set.lbs, 0);

  const uniqueExerciseNames = [
    ...new Set(setsForDate.map((set) => set.exerciseName)),
  ];

  return (
    <View style={styles.container}>
      <SummaryHeader date={date} reps={totalReps} lbs={totalLbsLifted}/>
      <SubHeader />
      {uniqueExerciseNames.map((exerciseName) => (
        <SummaryItem key={`${exerciseName}-${date}`} exerciseName={exerciseName} sets={setsForDate} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.white,
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default SummaryCard;
