import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import AddExerciseButton from '../../components/Workout/AddExerciseButton';
import AddExerciseModal from '../../components/Workout/AddExerciseModal';
import ExerciseItem from '../../components/Workout/ExerciseItem';
import OrderExercises from '../../components/Workout/OrderExercise';
import SetOrderButton from '../../components/Workout/SetOrderButton';
import { GlobalStyles } from '../../constants/styles';
import { ExerciseContext } from '../../store/exerciseContext';

const NewWorkout = ({ navigation }) => {
  const { exercises, addExercise } = useContext(ExerciseContext);
  const [selectedExercisesIds, setSelectedExercisesIds] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newExerciseName, setNewExerciseName] = useState('');

  const handleAddExercise = () => {
    // Replace 'userId' with the actual user ID when adding a new exercise
    const userId = 'stu';
    addExercise(userId, newExerciseName);
    setModalVisible(false);
    setNewExerciseName('');
  };

  const toggleExercise = (exerciseId) => {
    if (selectedExercisesIds.includes(exerciseId)) {
      setSelectedExercisesIds(
        selectedExercisesIds.filter((id) => id !== exerciseId)
      );
    } else {
      setSelectedExercisesIds([...selectedExercisesIds, exerciseId]);
    }
  };

  const setOrder = () => {
    const selectedExercises = exercises.filter((exercise) =>
      selectedExercisesIds.includes(exercise.id)
    );
    navigation.navigate('OrderExercises', {
      selectedExercises,
    });
  };
  

  const renderItem = ({ item }) => (
    <ExerciseItem
      exercise={item}
      onSelect={() => toggleExercise(item.id)}
      selected={selectedExercisesIds.includes(item.id)}
    />
  );

  const renderEmptyList = () => (
    <View>
      <Text>No exercises found. Start adding exercises:</Text>
    </View>
  );

  return (
    <View>
      <AddExerciseButton onPress={() => setModalVisible(true)} />
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={renderEmptyList}
      />
      <SetOrderButton onPress={setOrder} />
      <AddExerciseModal
        visible={modalVisible}
        onAdd={handleAddExercise}
        onCancel={() => setModalVisible(false)}
        onChangeText={setNewExerciseName}
        value={newExerciseName}
      />
    </View>
  );
};

export default NewWorkout;

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      width: '80%',
    },
    modalTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    modalInput: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginBottom: 20,
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    addButton: {
        backgroundColor: GlobalStyles.colors.black,
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
      },
      addButtonText: {
        color: GlobalStyles.colors.black,
        fontSize: 16,
      },
      setOrderButton: {
        backgroundColor: GlobalStyles.colors.black,
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
      },
      setOrderButtonText: {
        color: GlobalStyles.colors.white,
        fontSize: 16,

      },
  });
