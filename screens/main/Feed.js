import { useNavigation } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import WorkoutSummary from '../../components/Workouts/WorkoutSummary';
import { GlobalStyles } from '../../constants/styles';
import { userContext } from '../../store/userContext';
import { workoutContext } from '../../store/workoutContext';
import { fetchWorkout, storeWorkout } from '../../util/firebase/http';

function FeedScreen() {
  const [error, setError] = useState('')

  //remove head

  const workoutCtx = useContext(workoutContext)

  // const userCtx = useContext(userContext)
  // const userId = userCtx.user[0].uid;
  // console.log(userCtx)

  useEffect(() => {
    async function getWorkouts() {
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

  return (
    <ImageBackground
    source={require('../../assets/bg1-splash.png')} 
    style={styles.image}>
      <View style={styles.container}>
        <WorkoutSummary workouts={workoutCtx.workouts} />
      </View>
    </ImageBackground>
  )
}

export default FeedScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
