import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text, ImageBackground } from 'react-native';
import Logout from '../../components/User/Logout';
import SummaryList from '../../components/Workout/feed/SummaryList';
import { GlobalStyles } from '../../constants/styles';
import { ExerciseContext } from '../../store/exerciseContext';
import MainBG from '../../UI/MainBG';
import PrimaryButton from '../../UI/PrimaryButton';
import { getUserData } from '../../util/firebase/http';
import { AntDesign } from '@expo/vector-icons';

const Feed = ({ navigation }) => {

    const exerciseCtx = useContext(ExerciseContext);
    const user = exerciseCtx.exerciseData.User

    console.log('Feed.js: ', user);
    
    useEffect(() => {
        //header
        navigation.setOptions({
            headerShown: false,
        });

        const getData = async () => {
          console.log('Getting data.');
          const data = await getUserData(user);
          const exercisesArray = [];
          const setsArray = [];
    
          // Exercises
          if (data.exercises) {
            for (const key in data.exercises) {
              const name = data.exercises[key].name;
              exercisesArray.push({ id: key, name: name, color: data.exercises[key].color });
            }
          }
    
          // Sets
          if (data.sets) {
            for (const key in data.sets) {
              setsArray.push({
                id: key,
                exerciseName: data.sets[key].exerciseName,
                lbs: data.sets[key].lbs,
                reps: data.sets[key].reps,
                date: data.sets[key].date,
              });
            }
          }

          // Sort the setsArray by date in ascending order
          setsArray.sort((a, b) => new Date(a.date) - new Date(b.date));

          exerciseCtx.updateData({ exercises: exercisesArray, sets: setsArray });
          return data;
        };
        // Fetch exercises from firebase here
        getData();
      }, []);

  const startNewWorkout = () => {
    navigation.navigate('NewWorkout');
  };

  const openUser = () => {
    navigation.navigate('User', { screen: 'User' })
  };
  
  return (
    <MainBG>
      <View style={styles.container}>
        {/* <Logout /> */}
        <View style={styles.headerContainer}>
          <AntDesign 
          onPress={openUser}
          name="user" size={24} color="white" />
          <View style={styles.buttonContainer}>
            <PrimaryButton 
            style={'green'}
            title="New Workout" onPress={startNewWorkout} />
          </View>
        </View>
        <SummaryList />
      </View>
    </MainBG>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: GlobalStyles.colors.lightGray,
    paddingTop: 48,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 24,
    // marginBottom: 24,
  },
  buttonContainer: {
    width: '60%',
  },
});
