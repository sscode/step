import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';
import PrimaryButton from '../../../UI/PrimaryButton';

const Header = ({ exerciseName, nextExercise }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.workoutName}>{exerciseName}</Text>
      {/* <Text style={styles.counter}>1:32</Text> */}
      {/* <PrimaryButton title={'Next'} onPress={nextExercise} small/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  workoutName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: GlobalStyles.colors.white
  },
  counter: {
    fontSize: 36,
    color: GlobalStyles.colors.grey,
    opacity: 0.5,
  },
  nextButtonText: {
    fontSize: 18,
    color: '#007AFF',
  },
});

export default Header;
