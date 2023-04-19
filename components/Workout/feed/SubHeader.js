import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SubHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.headerTextLeft}>Exercise</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.statItem}>
          <Text style={styles.headerText}>Reps</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.headerText}>Lifted</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  leftContainer: {
    width: '30%',
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '70%',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'right',
  },
    headerTextLeft: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
    },
  statItem: {
    alignItems: 'flex-end',
    marginLeft: 20,
    width: '40%',
  },
});

export default SubHeader;
