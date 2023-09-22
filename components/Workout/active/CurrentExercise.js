import React, { useCallback, useContext, useState } from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';
import { getShortDateAndTime, groupSetsByDate } from '../../../util/date';
import ExerciseDetailItem from './ExerciseDetailItem';
import SmallSummary from './SmallSummary';
import moment from 'moment-timezone';

const CurrentExercise = ({ setsForCurrentExercise }) => {

  //order and group by date
  const groupedSets = groupSetsByDate(setsForCurrentExercise).reverse();

  //order the sets by time
  groupedSets.forEach((set) => {
    set.data.sort((a, b) => new Date(b.date) - new Date(a.date));
  });


  const renderSet = ({ item, section }) => {
    const isLastSetInSection = section.data.indexOf(item) === section.data.length - 1;

    return (
      <>
        <ExerciseDetailItem key={item.id} item={item} />
        {isLastSetInSection && <View style={styles.lastSection} />}
      </>
    );
  };

  const SectionHeader = ({ section }) => {
    
    // Specify the desired time zone
    // const timeZone = 'America/New_York';
    const dateMoment = moment(section.date);
    const dayOfWeek = dateMoment.format('dddd');
    const formattedDate = dateMoment.format('MM/DD/YYYY');

    return(
      <View style={styles.sectionHeader}>
        {section && section.date && (
          <>
            <View style={styles.sectionHeaderContainer}>
              <Text style={styles.sectionHeaderText}>{dayOfWeek}</Text>
              <Text style={styles.sectionHeaderText}>{formattedDate}</Text>
            </View>
            <SmallSummary sets={section.data} />
          </>
        )}
      </View>
    )
  };

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
  },
  sectionHeader: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: GlobalStyles.colors.grey,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionHeaderText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: GlobalStyles.colors.black,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: GlobalStyles.colors.white,
  },
  lastSection: {
    paddingBottom: 10,
    marginBottom: 15,
    backgroundColor: GlobalStyles.colors.grey,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
});

export default CurrentExercise;
