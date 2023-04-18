import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TodayStats from '../../components/Workout/post/TodayStats';

const WorkoutComplete = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Complete!</Text>
      <TodayStats />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Feed')}>
        <Text style={styles.buttonText}>Go to Feed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
    color: '#333333',
  },
  button: {
    backgroundColor: '#2F80ED',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WorkoutComplete;
