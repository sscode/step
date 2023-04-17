import axios from 'axios';
import { useContext } from 'react';
import { userContext } from '../../store/userContext';

const baseURL = `${process.env.REACT_APP_FIREBASE_databaseURL}`;

export const addSetToFirebase = async (userId, exerciseId, workoutId, set) => {
    try {
      const response = await axios.post(
        `${baseURL}/users/${userId}/exercises/${exerciseId}/workouts/${workoutId}/sets.json`,
        set
      );
  
      if (response.status === 200) {
        console.log('Set added successfully:', response.data);
        return response.data;
      } else {
        console.error('Error adding set:', response);
        return null;
      }
    } catch (error) {
      console.error('Error adding set:', error);
      return null;
    }
  };

  export const fetchExercises = async (userId) => {
    try {
      const response = await axios.get(
        `${baseURL}/exercises/${userId}.json`
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.error('Error fetching exercises:', error);
      return null;
    }
  };
  
  export const fetchWorkoutHistory = async (userId) => {
    try {
      const response = await axios.get(
        `${baseURL}/workoutHistory/${userId}.json`
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.error('Error fetching workout history:', error);
      return null;
    }
  };
  
  export const addExercise = async (userId, exerciseName) => {
    try {
      await axios.post(
        `${baseURL}/exercises/${userId}.json`,
        { name: exerciseName }
      );
    } catch (error) {
      console.error('Error adding exercise:', error);
    }
  };
  
  export const addWorkoutHistory = async (userId, workout) => {
    try {
      await axios.post(
        `${baseURL}/workoutHistory/${userId}.json`,
        workout
      );
    } catch (error) {
      console.error('Error adding workout history:', error);
    }
  };