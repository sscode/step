import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';

const SummaryHeader = ({ date, reps, lbs }) => {
  const dateString = new Date(date).toLocaleDateString();
  const day = new Date(date).toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextContainer} >
          <Text style={styles.headerText}>{day}</Text>
          <Text style={styles.headerText}>{dateString}</Text>
        </View>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>Reps: {reps}</Text>
          <Text style={styles.subHeaderText}>lbs: {lbs}</Text>
        </View>
      </View>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    borderBottomColor: GlobalStyles.colors.primary,
    borderBottomWidth: 1,
  },
  header: {
    // borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  headerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    // textAlign: 'center',
    color: GlobalStyles.colors.black,
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  subHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: GlobalStyles.colors.grey100,
  },
});

export default SummaryHeader;
