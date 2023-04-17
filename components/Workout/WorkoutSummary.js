import React from 'react';
import { View, Text } from 'react-native';

const WorkoutSummary = ({ workout }) => {

    console.log(workout);

  return (
    <View>
        <Text>Workout Summary</Text>
      {/* <Text>{workout.date}</Text>
      <Text>Total Reps: {workout.totalReps}</Text>
      <Text>Total lbs: {workout.totalLbs}</Text> */}
      {/* {sets.map((set, index) => (
        <View key={index}>
          <Text>{`Set ${index + 1}: Reps - ${set.reps}, Lbs - ${set.lbs}`}</Text>
        </View>
      ))} */}
    </View>
  );
};

export default WorkoutSummary;
