import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const WorkoutComplete = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Complete!</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4A4A4A',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default WorkoutComplete;
