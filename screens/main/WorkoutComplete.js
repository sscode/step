import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TodayStats from '../../components/Workout/post/TodayStats';
import { GlobalStyles } from '../../constants/styles';
import MainBG from '../../UI/MainBG';
import PrimaryButton from '../../UI/PrimaryButton';

const WorkoutComplete = ({ navigation }) => {

    // Hide the back button in the header
    useEffect(() => {
        navigation.setOptions({
            headerLeft: null,
            headerShown: false,
        });
        }, []);

  return (
    <MainBG>
        <View style={styles.container}>
        <Text style={styles.title}>Workout Complete!</Text>
        <TodayStats />
        <PrimaryButton title="Go to Feed" onPress={() => navigation.navigate('Feed')} />
        </View>
    </MainBG>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
    color: GlobalStyles.colors.primary500,
  }
});

export default WorkoutComplete;
