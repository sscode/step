import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { GlobalStyles } from '../../../constants/styles';
import { getShortDateAndTime } from '../../../util/date';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, runOnUI, runOnJS } from 'react-native-reanimated';
import { ExerciseContext } from '../../../store/exerciseContext';
import { deleteSetFromFirebase } from '../../../util/firebase/http';

const ExerciseDetailItem = ({ item }) => {
  const exerciseCtx = useContext(ExerciseContext);
  const userId = exerciseCtx.exerciseData.User.id;
  const { deleteSet }  = exerciseCtx;


  const translateX = useSharedValue(0);

  const panGesture = useAnimatedGestureHandler({
    onActive: (event, ctx) => {
      translateX.value = event.translationX;
    },
    onEnd: (event, ctx) => {
      if (event.translationX < -100) {
        translateX.value = withSpring(0);
        // deleteHandler();
        runOnJS(deleteSetFromFirebase)(userId, item.id)
        runOnJS(deleteSet)(item.id);
        console.log('delete set ', item.id);
      } else if (event.translationX > 100) {
        console.log('swipe right');
        translateX.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  // Handle asynchronous deletion
  useEffect(() => {
    const unsubscribe = () => {
      if (translateX.value < -100) {
        console.log('delete set ', item.id);
        deleteSetFromFirebase(userId, item.id).then((success) => {
          if (success) {
            // Set the translation back to 0 if the deletion is successful
            translateX.value = withSpring(0);
          }
        });
      }
    };
    return unsubscribe;
  }, [userId, item.id, translateX]);

  return (
    <PanGestureHandler onGestureEvent={panGesture}>
      <Animated.View style={[styles.row, animatedStyle]}>
        <Text style={styles.rowText}>{getShortDateAndTime(item.date).time}</Text>
        <Text style={styles.rowText}>{item.reps}</Text>
        <Text style={styles.rowText}>{item.id}</Text>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default ExerciseDetailItem;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.white,
        paddingVertical: 8,
        marginHorizontal: 15,
        // borderRadius: 5,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
      },
      rowText: {
        fontSize: 14,
        color: '#333',
        flex: 1,
        textAlign: 'center',
      },
})