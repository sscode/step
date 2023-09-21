import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';

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
    paddingHorizontal: 8,
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
    textAlign: 'right',
    color: GlobalStyles.colors.black,
  },
  headerTextLeft: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    color: GlobalStyles.colors.black,
    },

  statItem: {
    alignItems: 'flex-end',
    marginLeft: 20,
    width: '40%',
  },
});

export default SubHeader;
