import React, { useCallback, useContext, useState } from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';
import { getShortDateAndTime, groupSetsByDate } from '../../../util/date';
import ExerciseDetailItem from './ExerciseDetailItem';
import SmallSummary from './SmallSummary';

const CurrentExercise = ({ setsForCurrentExercise }) => {

  //order and group by date
  const groupedSets = groupSetsByDate(setsForCurrentExercise).reverse();

  //order the sets by time
  groupedSets.forEach((set) => {
    set.data.sort((a, b) => new Date(b.date) - new Date(a.date));
  });

  const renderSet = ({ item }) => (
    <ExerciseDetailItem key={item.id} item={item}/>
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
        keyExtractor={(item, index) => item.id || String(index)}
        renderItem={renderSet}
        renderSectionHeader={({ section }) => <SectionHeader section={section} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.white,
    // borderRadius: 5,
  },
  sectionHeader: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: GlobalStyles.colors.white,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.black,
    // borderRadius: 5,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
  },
});

export default CurrentExercise;
