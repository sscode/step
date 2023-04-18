import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import MoveButtons from './MoveButtons';

const OrderExercises = ({ navigation, route }) => {
    const [orderedExercises, setOrderedExercises] = useState([]);

    const { selectedExercises } = route.params;
  
    useEffect(() => {
      setOrderedExercises(selectedExercises);
    }, [selectedExercises]);
  
    const moveUp = (index) => {
      if (index > 0) {
        const newOrderedExercises = [...orderedExercises];
        const temp = newOrderedExercises[index - 1];
        newOrderedExercises[index - 1] = newOrderedExercises[index];
        newOrderedExercises[index] = temp;
        setOrderedExercises(newOrderedExercises);
      }
    };
  
    const moveDown = (index) => {
      if (index < orderedExercises.length - 1) {
        const newOrderedExercises = [...orderedExercises];
        const temp = newOrderedExercises[index + 1];
        newOrderedExercises[index + 1] = newOrderedExercises[index];
        newOrderedExercises[index] = temp;
        setOrderedExercises(newOrderedExercises);
      }
    };
  
    const startWorkout = (orderedExercises) => {
      navigation.navigate('InExercise', {
        orderedExercises,
        workoutData: Array(orderedExercises.length).fill({}),
      });
    };

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.exerciseItem}>
        <Text style={styles.exerciseName}>{item.name}</Text>
        <MoveButtons index={index} moveUp={moveUp} moveDown={moveDown} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={orderedExercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        onPress={() => {
          startWorkout(orderedExercises);
        }}
        style={styles.startButton}
      >
        <Text style={styles.startButtonText}>Start Workout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderExercises;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  exerciseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 8,
    justifyContent: 'space-between',
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#424242',
  },
  startButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 24,
    alignSelf: 'center',
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
