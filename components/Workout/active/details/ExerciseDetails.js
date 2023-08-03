import { View, Text } from 'react-native';
import React from 'react';
import MainBG from '../../../../UI/MainBG';

const ExerciseDetails = ({ route }) => {
  const { exerciseName } = route.params;

  return (
    <MainBG>
      <View>
        <Text>{exerciseName}</Text>
      </View>
    </MainBG>
  );
};

export default ExerciseDetails;
