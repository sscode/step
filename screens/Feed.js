import { useNavigation } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WorkoutSummary from '../components/Workouts/WorkoutSummary';
import { GlobalStyles } from '../constants/styles';
import { workoutContext } from '../store/workoutContext';
import { fetchWorkout, storeWorkout } from '../util/firebase/http';

function Feed(){

    const workoutCtx = useContext(workoutContext)

    useEffect(() => {
        async function getWorkouts(){
        //   setFetchingState(true);
          try {
            const workouts = await fetchWorkout();
            workoutCtx.setWorkout(workouts)
          } catch (error) {
            setError('Could not fetch expenses')
          }
        //   setFetchingState(false);
        }
        getWorkouts();
      }, [])

    return( 
        <View style={styles.container}>
            <WorkoutSummary workouts={workoutCtx.workouts}/>
        </View>
    )
}

export default Feed;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: GlobalStyles.colors.black,
    },
  });