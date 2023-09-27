import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';
import { ExerciseContext } from '../../../store/exerciseContext';

const Timer = ({ exerciseName }) => {
    // State to store the elapsed time in seconds
    const [elapsedTime, setElapsedTime] = useState(0);
  
    const exerciseCtx = useContext(ExerciseContext);
    const exercises = exerciseCtx.exerciseData.Exercises;
  
    // Find the exercise with the matching exerciseName
    const exercise = exercises.find((exercise) => exercise.name === exerciseName);
  
    // Extract the lastSet date from the exercise
    const lastSet = exercise ? new Date(exercise.lastSet) : null;
  
    // Function to format seconds as "mm:ss"
    const formatTime = (seconds) => {
        if (isNaN(seconds)) {
          return '0:00'; // Handle NaN case
        }
      
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
      
        if (minutes > 90) {
          return '0:00'; // If elapsed time is greater than 90 minutes, show "0:00"
        }
      
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
      };
      
  
    useEffect(() => {
      let timer;
  
      if (lastSet) {
        // Calculate the initial elapsed time based on the difference between lastSet and now
        const now = new Date();
        const timeDifference = now.getTime() - lastSet.getTime();
        const initialElapsedTime = Math.floor(timeDifference / 1000);
  
        // Start the timer
        setElapsedTime(initialElapsedTime);
  
        timer = setInterval(() => {
          setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
        }, 1000);
      }
  
      // Clear the timer when the component unmounts or when lastSet changes
      return () => clearInterval(timer);
    }, [lastSet]);
  
    return (
      <View>
        <Text style={styles.counter}>{formatTime(elapsedTime)}</Text>
      </View>
    );
  };
  
  export default Timer;


const styles = StyleSheet.create({
    counter: {
        fontSize: 36,
        color: GlobalStyles.colors.grey,
        opacity: 0.5,
        },
})