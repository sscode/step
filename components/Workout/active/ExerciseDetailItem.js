import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { GlobalStyles } from '../../../constants/styles';
import { getShortDateAndTime } from '../../../util/date';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { ExerciseContext } from '../../../store/exerciseContext';
import { deleteSetFromFirebase } from '../../../util/firebase/http';
import { runOnJS } from 'react-native-reanimated';


const ExerciseDetailItem = ({item}) => {

    const exerciseCtx = useContext(ExerciseContext);
    const userId = exerciseCtx.exerciseData.User.id

    const translateX = useSharedValue(0)

    const panGesture = useAnimatedGestureHandler({
        onActive: (event, ctx) => {
            translateX.value = event.translationX
        },
        onEnd: (event, ctx) => {
            if(event.translationX < -100){
                console.log('swipe left ', userId)
                translateX.value = withSpring(0)
                // runOnJS(deleteSetFromFirebase(userId, item.id))
            } else if(event.translationX > 100){
                console.log('swipe right')
                translateX.value = withSpring(0)
            }
        },
    });

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{translateX: translateX.value}]
    }));

  return (
    <PanGestureHandler
    onGestureEvent={panGesture}
    >
        <Animated.View style={[styles.row, animatedStyle]}>
            <Text style={styles.rowText}>{getShortDateAndTime(item.date).time}</Text>
            <Text style={styles.rowText}>{item.reps}</Text>
            <Text style={styles.rowText}>{item.id}</Text>
        </Animated.View>
    </PanGestureHandler>
  )
}

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