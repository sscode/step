import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import { GlobalStyles } from '../../../constants/styles';
import MainBG from '../../../UI/MainBG';
import PrimaryButton from '../../../UI/PrimaryButton';
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
    <MainBG>
      <View style={styles.container}>
        <View style={styles.list}>
          <FlatList
            data={orderedExercises}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton title='Start Workout' onPress={() => startWorkout(orderedExercises)} />
        </View>
      </View>
    </MainBG>
  );
};

export default OrderExercises;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  exerciseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 8,
    justifyContent: 'space-between',
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: GlobalStyles.colors.black,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  }
});
