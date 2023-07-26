import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';

const SummaryHeader = ({ date, reps, lbs }) => {
  const dateString = new Date(date).toLocaleDateString();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Summary for {dateString}</Text>
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
    alignItems: 'center',
    marginBottom: 16,
    borderBottomColor: GlobalStyles.colors.primary500,
    borderBottomWidth: 1,
  },
  header: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  subHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: GlobalStyles.colors.gray400,
  },
});

export default SummaryHeader;
