import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ExerciseContext } from '../../../store/exerciseContext';
import MainBG from '../../../UI/MainBG';
import AddSet from './AddSet';
import CurrentExercise from './CurrentExercise';
import Header from './Header';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const InExercise = ({ navigation, route }) => {
  const exerciseCtx = useContext(ExerciseContext);
  const exerciseName = route.params.exerciseName;
  const exerciseId = route.params.exerciseId;
  const exerciseColor = route.params.exerciseColor;

  console.log("Going to this exercice")

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

  const handleSwipeLeft = () => {
    navigateToExerciseDetails();
  };

  const navigateToExerciseDetails = () => {
    navigation.navigate('MoreExerciseInfo', { exerciseName, exerciseId, exerciseColor });
  };

  const translateX = useSharedValue(0);

  const panGesture = useAnimatedGestureHandler({
    onActive: (event, ctx) => {
      if (event.translationX < 0) {
        translateX.value = event.translationX;
      }
    },
    onEnd: (event, ctx) => {
      if (event.translationX < -100) {
        console.log('swipe left');
        translateX.value = withSpring(0);
        runOnJS(handleSwipeLeft)();
      } else if (event.translationX > 100) {
        console.log('swipe right');
        translateX.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <MainBG>
      <View style={styles.container}>
        <Header exerciseName={exerciseName} />
        <PanGestureHandler onGestureEvent={panGesture}>
          <Animated.View style={[styles.exerciseContainer, animatedStyle]}>
            <AddSet exerciseName={exerciseName} />
            <View style={styles.exerciseHistoryContainer}>
              <CurrentExercise
                exerciseName={exerciseName}
                setsForCurrentExercise={setsForCurrentExercise}
              />
            </View>
          </Animated.View>
        </PanGestureHandler>
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
  exerciseContainer: {
    flex: 1,
  },
  exerciseHistoryContainer: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 20,
  },
});
