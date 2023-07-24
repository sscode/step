import React, { useContext } from 'react';
import { FlatList, StyleSheet } from 'react-native'; // Import FlatList from 'react-native'
import { ExerciseContext } from '../../../store/exerciseContext';
import SummaryCard from './SummaryCard';

const SummaryList = () => {
  const exerciseCtx = useContext(ExerciseContext);

  // Access the Sets array from exerciseData
  const setsArray = exerciseCtx.exerciseData.Sets || [];

  // Create uniqueDates from the Sets array
  const uniqueDates = [
    ...new Set(setsArray.map((set) => new Date(set.date).setHours(0, 0, 0, 0))),
  ].sort((a, b) => b - a);

  console.log('Running SummaryList');

  // Define the renderItem function for FlatList
  const renderItem = ({ item }) => <SummaryCard key={item} date={item} />;

  return (
    <FlatList
      style={styles.container}
      data={uniqueDates}
      renderItem={renderItem}
      keyExtractor={(item) => item.toString()} // Key extractor for the uniqueDates array
    />
  );
};

export default SummaryList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    width: '100%',
    padding: 16,
  }
});
