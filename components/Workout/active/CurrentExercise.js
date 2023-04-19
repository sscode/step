import React, { useContext } from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';
import { getShortDateAndTime, groupSetsByDate } from '../../../util/date';
import SmallSummary from './SmallSummary';

const CurrentExercise = ({ setsForCurrentExercise }) => {
  const groupedSets = groupSetsByDate(setsForCurrentExercise);

  const renderSet = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.rowText}>{getShortDateAndTime(item.date).time}</Text>
      <Text style={styles.rowText}>{item.reps}</Text>
      <Text style={styles.rowText}>{item.lbs}</Text>
    </View>
  );

  const SectionHeader = ({ section }) => (
    <View style={styles.sectionHeader}>
      {section && section.date && (
        <>
          <Text style={styles.sectionHeaderText}>{section.date}</Text>
          <SmallSummary sets={section.data} />
        </>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={groupedSets}
        keyExtractor={(item) => item.id}
        renderItem={renderSet}
        renderSectionHeader={({ section }) => <SectionHeader section={section} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 20,
    backgroundColor: GlobalStyles.colors.white,
    borderRadius: 5,
  },
  sectionHeader: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,

  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.black,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.white,
    paddingVertical: 8,
    marginHorizontal: 15,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  rowText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
  },
});

export default CurrentExercise;
