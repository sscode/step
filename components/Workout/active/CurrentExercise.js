import React, { useContext } from 'react';
import { View, SectionList, Text, StyleSheet } from 'react-native';
import { getShortDateAndTime, groupSetsByDate } from '../../../util/date';
import SmallSummary from './SmallSummary';

const CurrentExercise = ({ setsForCurrentExercise }) => {
  const groupedSets = groupSetsByDate(setsForCurrentExercise);

  const renderSet = ({ item }) => (

    <View style={styles.row}>
      <Text style={styles.rowText}>{getShortDateAndTime(item.date).time}</Text>
      <Text style={styles.rowText}>{item.reps}</Text>
      <Text style={styles.rowText}>{item.weight}</Text>
    </View>
  );

  const SectionHeader = ({ date, sets }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{date}</Text>
      <SmallSummary sets={sets} />
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={groupedSets}
        keyExtractor={(item) => item.id}
        renderItem={renderSet}
        renderSectionHeader={({ section: { date, data } }) => <SectionHeader date={date} sets={data}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  sectionHeader: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    backgroundColor: '#f5f5f5',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  rowText: {
    fontSize: 14,
    color: '#333',
  },
});

export default CurrentExercise;
