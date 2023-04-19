import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { ExerciseContext } from '../../../store/exerciseContext';
import SubHeader from './SubHeader';
import SummaryHeader from './SummaryHeader';
import SummaryItem from './SummaryItem';

const SummaryCard = ({ date }) => {
  const exerciseCtx = useContext(ExerciseContext);

  const setsForDate = exerciseCtx.exerciseData.Sets.filter(
    (set) => new Date(set.date).setHours(0, 0, 0, 0) === date
  );

  const uniqueExerciseNames = [
    ...new Set(setsForDate.map((set) => set.exerciseName)),
  ];

  return (
    <View style={styles.container}>
      <SummaryHeader date={date} />
      <SubHeader />
      {uniqueExerciseNames.map((exerciseName) => (
        <SummaryItem key={exerciseName} exerciseName={exerciseName} sets={setsForDate} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: '#FFF',
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
