import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';

const SummaryHeader = ({ date }) => {
  const dateString = new Date(date).toLocaleDateString();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Summary for {dateString}</Text>
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
});

export default SummaryHeader;