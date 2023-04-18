import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { GlobalStyles } from '../../constants/styles';


const Feed = ({ navigation }) => {

  const startNewWorkout = () => {
    navigation.navigate('NewWorkout');
  };

  return (
        <View style={styles.container}>
        <TouchableOpacity onPress={startNewWorkout} style={styles.newWorkoutButton}>
            <Text style={styles.newWorkoutText}>New Workout</Text>
        </TouchableOpacity>
        </View>
  );
};

export default Feed;

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: GlobalStyles.colors.lightGray,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    newWorkoutButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        padding: 10,
        marginVertical: 20,
        borderWidth: 2,
        borderColor: GlobalStyles.colors.black,
        borderRadius: 10,
        backgroundColor: GlobalStyles.colors.white,
      },
      newWorkoutText: {
        fontSize: 18,
        color: GlobalStyles.colors.black,
      },
      newWorkoutButtonHover: {
        backgroundColor: GlobalStyles.colors.primary,
        borderColor: GlobalStyles.colors.white,
      }
});
