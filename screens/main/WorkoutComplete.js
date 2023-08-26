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

      const today = new Date().toLocaleDateString();

  return (
    <MainBG>
        <View style={styles.container}>
        <Text style={styles.title}>Workout Complete!</Text>
        <Text style={styles.subTitle}>{today}</Text>
        <TodayStats />
        <View style={styles.buttonContainer}>
          <PrimaryButton 
          style={'green'}
          title="Go to Feed" onPress={() => navigation.navigate('Feed')} />
        </View>
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
    textAlign: 'center',
    color: GlobalStyles.colors.primary500,
  },
  subTitle: {
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500,
    fontSize: 14,
    marginTop: 8,
    marginBottom: 32,
  },
  buttonContainer: {
    width: '80%',
    marginTop: 32,
  },
});

export default WorkoutComplete;
