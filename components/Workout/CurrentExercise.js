import React, { useContext } from 'react';
import { View, FlatList, Text } from 'react-native';
import { ExerciseContext } from '../../store/exerciseContext';

const CurrentExercise = ({ exerciseName, setsForCurrentExercise }) => {


  const renderItem = ({ item }) => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
        <Text>Time: {item.date}</Text>
        <Text>Reps: {item.reps}</Text>
        <Text>Lbs: {item.weight}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={setsForCurrentExercise}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CurrentExercise;
