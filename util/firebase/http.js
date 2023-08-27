import axios from 'axios';
import { useContext } from 'react';
import { userContext } from '../../store/userContext';

const baseURL = `${process.env.REACT_APP_FIREBASE_databaseURL}`;


export const addSetToFirebase = async (userId, set) => {
    try {
      const response = await axios.post(
        `${baseURL}/users/${userId}/sets.json`,
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
  
  export const addExercise = async (userId, exerciseName, activeColor) => {
    console.log('addExercise :', userId, exerciseName, activeColor);
    try {
      const response = await axios.post(
        `${baseURL}/users/${userId}/exercises.json`,
        { name: exerciseName, color: activeColor }
      );
      const data = response.data;
        console.log('Exercise added successfully:', data);
      return data
    } catch (error) {
      console.error('Error adding exercise:', error);
    }
  };

  export const editExercise = async (userId, exerciseId, exerciseName, activeColor) => {
    try {
      const response = await axios.patch(
        `${baseURL}/users/${userId}/exercises/${exerciseId}.json`,
        { name: exerciseName, color: activeColor }
      );
      const data = response.data;
      console.log('Exercise edited successfully in Firebase:', data);
      return data;
    } catch (error) {
      console.error('Error editing exercise:', error);
    }
  };

  export const deleteExerciseFromFirebase = async (userId, exerciseId) => {
    try {
      const response = await axios.delete(
        `${baseURL}/users/${userId}/exercises/${exerciseId}.json`
      );
  
      if (response.status === 200) {
        console.log('Exercise deleted successfully:', exerciseId);
        return true;
      } else {
        console.error('Error deleting exercise:', response);
        return false;
      }
    } catch (error) {
      console.error('Error deleting exercise:', error);
      return false;
    }
  };
  

  export const getUserData = async (userId) => {
    try {
      const response = await axios.get(
        `${baseURL}/users/${userId}.json`
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.error('Error fetching exercises:', error);
      return null;
    }
  };

  export const deleteSetFromFirebase = async (userId, setId) => {
    try {
      const response = await axios.delete(
        `${baseURL}/users/${userId}/sets/${setId}.json`
      );
  
      if (response.status === 200) {
        console.log('Set deleted successfully:', setId);
        return true;
      } else {
        console.error('Error deleting set:', response);
        return false;
      }
    } catch (error) {
      console.error('Error deleting set:', error);
      return false;
    }
  };
  
  