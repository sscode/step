import React from 'react';
import { View, FlatList } from 'react-native';
import WorkoutSummary from './WorkoutSummary';

const CurrentExercise = ({ currentWorkoutData }) => {
  return (
    <View>
      {currentWorkoutData ? (
        <FlatList
          data={currentWorkoutData}
          renderItem={({ item }) => <WorkoutSummary workout={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <WorkoutSummary workout={null} />
      )}
    </View>
  );
};

export default CurrentExercise;
