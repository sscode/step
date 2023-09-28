import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ExerciseContext } from '../../../../../store/exerciseContext';
import moment from 'moment';
import { GlobalStyles } from '../../../../../constants/styles';

const Stats = ({ exerciseName }) => {
  const exerciseCtx = useContext(ExerciseContext);
  const exerciseData = exerciseCtx.exerciseData.Sets;

  const exerciseHistory = exerciseData.filter((set) => set.exerciseName === exerciseName);

  const maxAllTimeLbs = Math.max(...exerciseHistory.map((set) => set.lbs), 0);
  const totalReps = exerciseHistory.reduce((total, set) => total + set.reps, 0);

  const today = moment();
  const thirtyDaysAgo = today.clone().subtract(30, 'days');
  const ninetyDaysAgo = today.clone().subtract(90, 'days');
  const threeHundredSixtyFiveDaysAgo = today.clone().subtract(365, 'days');

  const setsLast30Days = exerciseHistory.filter((set) => moment(set.date) >= thirtyDaysAgo);
  const sets30to90DaysAgo = exerciseHistory.filter(
    (set) => moment(set.date) >= ninetyDaysAgo && moment(set.date) < thirtyDaysAgo
  );
  const sets90to365DaysAgo = exerciseHistory.filter(
    (set) => moment(set.date) >= threeHundredSixtyFiveDaysAgo && moment(set.date) < ninetyDaysAgo
  );

  // Filter sets more than 365 days ago
  const setsMoreThan365DaysAgo = exerciseHistory.filter(
    (set) => moment(set.date) < threeHundredSixtyFiveDaysAgo
  );

  const maxLbsLast30Days = Math.max(...setsLast30Days.map((set) => set.lbs), 0);
  const maxLbs30to90DaysAgo = Math.max(...sets30to90DaysAgo.map((set) => set.lbs), 0);
  const maxLbs90to365DaysAgo = Math.max(...sets90to365DaysAgo.map((set) => set.lbs), 0);
  const maxLbsMoreThan365DaysAgo = Math.max(
    ...setsMoreThan365DaysAgo.map((set) => set.lbs),
    0
  );

  // Calculate "lbs x reps" totals
  const calculateLbsRepsTotal = (sets) => {
    return sets.reduce((total, set) => total + set.lbs * set.reps, 0);
  };

  const lbsRepsTotalAllTime = calculateLbsRepsTotal(exerciseHistory);
  const lbsRepsTotalLast30Days = calculateLbsRepsTotal(setsLast30Days);
  const lbsRepsTotal30to90DaysAgo = calculateLbsRepsTotal(sets30to90DaysAgo);
  const lbsRepsTotal90to365DaysAgo = calculateLbsRepsTotal(sets90to365DaysAgo);
  const lbsRepsTotalMoreThan365DaysAgo = calculateLbsRepsTotal(
    setsMoreThan365DaysAgo
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your {exerciseName} Stats</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Max All-Time Lbs:</Text>
        <Text style={styles.value}>{maxAllTimeLbs}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Total Reps:</Text>
        <Text style={styles.value}>{totalReps}</Text>
      </View>
      <View style={[styles.row, styles.lastRow]}>
        <Text style={styles.label}>Total Lifted:</Text>
        <Text style={styles.value}>{lbsRepsTotalAllTime}</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={[styles.label, styles.tableLeft]}>Period</Text>
          <Text style={styles.label}>Lbs x Reps</Text>
          <Text style={styles.label}>Max Lbs</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.text, styles.tableLeft]}>Last 30 Days:</Text>
          <Text style={styles.text}>{lbsRepsTotalLast30Days}</Text>
          <Text style={styles.text}>{maxLbsLast30Days}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.text, styles.tableLeft]}>30-90 Days Ago:</Text>
          <Text style={styles.text}>{lbsRepsTotal30to90DaysAgo}</Text>
          <Text style={styles.text}>{maxLbs30to90DaysAgo}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.text, styles.tableLeft]}>90-365 Days Ago:</Text>
          <Text style={styles.text}>{lbsRepsTotal90to365DaysAgo}</Text>
          <Text style={styles.text}>{maxLbs90to365DaysAgo}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.text, styles.tableLeft]}>&gt;365 Days Ago:</Text>
          <Text style={styles.text}>{lbsRepsTotalMoreThan365DaysAgo}</Text>
          <Text style={styles.text}>{maxLbsMoreThan365DaysAgo}</Text>
        </View>
      </View>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
    container: {
    width: '80%',
    padding: 16,
    backgroundColor: GlobalStyles.colors.grey,
    borderRadius: 8,
    },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 48,
    color: GlobalStyles.colors.primary,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
    marginRight: 8,
    color: GlobalStyles.colors.black,
  },
  value: {
    flex: 1,
    color: GlobalStyles.colors.black,
  },
  table: {
    marginTop: 16,
    width: '100%',
    // padding: 8,
  },
    text: {
    flex: 1,
    color: GlobalStyles.colors.black,
    },
    tableLeft: {
        marginRight: 24,
    },
    lastRow: {
        marginBottom: 48,
    },

});
