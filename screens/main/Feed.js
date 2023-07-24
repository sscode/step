import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text, ImageBackground } from 'react-native';
import SummaryList from '../../components/Workout/feed/SummaryList';
import { GlobalStyles } from '../../constants/styles';
import { ExerciseContext } from '../../store/exerciseContext';
import MainBG from '../../UI/MainBG';
import PrimaryButton from '../../UI/PrimaryButton';
import { getUserData } from '../../util/firebase/http';

const Feed = ({ navigation }) => {

    const exerciseCtx = useContext(ExerciseContext);
    const userId = exerciseCtx.exerciseData.User.id
    
    useEffect(() => {

        //header
        navigation.setOptions({
            headerShown: false,
        });


        const getData = async () => {
          console.log('Getting data.');
          const data = await getUserData(userId);
          const exercisesArray = [];
          const setsArray = [];
    
          // Exercises
          if (data.exercises) {
            for (const key in data.exercises) {
              const name = data.exercises[key].name;
              exercisesArray.push({ id: key, name: name });
            }
          }
    
          // Sets
          if (data.sets) {
            for (const key in data.sets) {
              setsArray.push({
                id: key,
                exerciseName: data.sets[key].exerciseName,
                lbs: data.sets[key].lbs,
                reps: data.sets[key].reps,
                date: data.sets[key].date,
              });
            }
          }

          exerciseCtx.updateData({ exercises: exercisesArray, sets: setsArray });
          return data;
        };
        // Fetch exercises from firebase here
        getData();
      }, []);

  const startNewWorkout = () => {
    navigation.navigate('NewWorkout');
  };
  
  return (
    <MainBG>
      <View style={styles.container}>
        <PrimaryButton title="New Workout" onPress={startNewWorkout} />
        <SummaryList />
      </View>
    </MainBG>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: GlobalStyles.colors.lightGray,
    paddingTop: 48,
  },
});
