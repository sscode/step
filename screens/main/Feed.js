import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text, ImageBackground } from 'react-native';
import SummaryList from '../../components/Workout/feed/SummaryList';
import { GlobalStyles } from '../../constants/styles';
import MainBG from '../../UI/MainBG';
import PrimaryButton from '../../UI/PrimaryButton';

const Feed = ({ navigation }) => {
  const startNewWorkout = () => {
    navigation.navigate('NewWorkout');
  };


  return (
    <MainBG>
      <View style={styles.container}>
        <PrimaryButton title="New Workout" onPress={startNewWorkout} />
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
    paddingTop: 20,
  },
});
