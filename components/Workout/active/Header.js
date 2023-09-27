import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';
import PrimaryButton from '../../../UI/PrimaryButton';
import Timer from './Timer';

const Header = ({ exerciseName, nextExercise }) => {
  // Function to split the exercise name into lines
  const splitExerciseName = (name) => {
    if (name.length > 11 && name.includes(' ')) {
      const words = name.split(' ');
      let line1 = '';
      let line2 = '';
      for (const word of words) {
        if (line1.length + word.length + 1 <= 11) {
          line1 += word + ' ';
        } else {
          line2 += word + ' ';
        }
      }
      return [line1.trim(), line2.trim()];
    } else {
      return [name];
    }
  };

  // Split the exercise name into lines
  const [line1, line2] = splitExerciseName(exerciseName);
  console.log('line1', line1);
  console.log('line2', line2);

  return (
    <View style={styles.header}>
      <View style={styles.headerTextBox}>
        <Text style={styles.workoutName}>{line1}</Text>
        {line2 && <Text style={styles.workoutName}>{line2}</Text>}
      </View>
      <Timer exerciseName={exerciseName} />
      {/* <PrimaryButton title={'Next'} onPress={nextExercise} small /> */}
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
  headerTextBox: {
    maxWidth: '60%',
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
