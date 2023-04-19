import React, { useContext } from 'react';
import { View } from 'react-native';
import { ExerciseContext } from '../../../store/exerciseContext';
import SummaryCard from './SummaryCard';

const SummaryList = () => {
  const exerciseCtx = useContext(ExerciseContext);

  const uniqueDates = [
    ...new Set(exerciseCtx.exerciseData.Sets.map((set) => new Date(set.date).setHours(0, 0, 0, 0))),
  ].sort((a, b) => b - a);

  

  return (
    <View>
      {uniqueDates.map((date) => (
        <SummaryCard key={date} date={date} />
      ))}
    </View>
  );
};

export default SummaryList;
