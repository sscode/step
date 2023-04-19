import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';
import PrimaryButton from '../../../UI/PrimaryButton';

const Header = ({ exerciseName, nextExercise }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.workoutName}>{exerciseName}</Text>
      <PrimaryButton title={'Next'} onPress={nextExercise} small/>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: GlobalStyles.colors.white
  },
  nextButtonText: {
    fontSize: 18,
    color: '#007AFF',
  },
});

export default Header;
