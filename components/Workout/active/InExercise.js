import React, { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { ExerciseContext } from '../../../store/exerciseContext';
import MainBG from '../../../UI/MainBG';
import AddSet from './AddSet';
import CurrentExercise from './CurrentExercise';
import Header from './Header';


const InExercise = ({ navigation, route }) => {

    const exerciseCtx = useContext(ExerciseContext);
    const exerciseName = route.params.exerciseName;

    //header
    useEffect(() => {
        navigation.setOptions({
            title: null,
        });
    }, []);

    //filter to get sets for current exercise
    const setsForCurrentExercise = exerciseCtx.exerciseData.Sets.filter(
      (set) => set.exerciseName === exerciseName
    );
    
      
    return (
      <MainBG>
        <View style={styles.container}>
          <Header exerciseName={exerciseName} />
          <AddSet exerciseName={exerciseName}/>
          <View style={styles.exerciseHistoryContainer}>
            <CurrentExercise
              exerciseName={exerciseName}
              setsForCurrentExercise={setsForCurrentExercise}
            />
          </View>
        </View>
      </MainBG>
    );
  };

export default InExercise;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 98,
    },
    exerciseHistoryContainer: {
      flex: 1,
      marginHorizontal: 15,
      marginTop: 20,
    },
  });

