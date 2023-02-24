import { useNavigation } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WorkoutSummary from '../components/Workouts/WorkoutSummary';
import Summary from '../components/Workouts/WorkoutSummary';
import { workoutContext } from '../store/workoutContext';
import Button from '../UI/Button';
import { fetchWorkout, storeWorkout } from '../util/firebase/http';
import { makeid } from '../util/random';


function Feed(){

    const workoutCtx = useContext(workoutContext)

    useEffect(() => {
        async function getWorkouts(){
        //   setFetchingState(true);
          try {
            const workouts = await fetchWorkout();
            console.log(workouts)
            workoutCtx.setWorkout(workouts)
          } catch (error) {
            setError('Could not fetch expenses')
          }
        //   setFetchingState(false);
        }
        getWorkouts();
      }, [])


    const newWorkoutMaker = async () => {
        const data = {
            name: makeid(6),
            date: new Date (),
            userID: '55832'
        }
        const wId = await storeWorkout(data)

        //add to context
        workoutCtx.addWorkout({...data, id: wId})
        console.log(wId)
    }

    return( 
        <View>
            <Button
            onPress={newWorkoutMaker}
            >New Random Workout</Button>
            <WorkoutSummary workouts={workoutCtx.workouts}/>
        </View>
    )
}

export default Feed;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });