import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TodayStats from '../../components/Workout/post/TodayStats';
import { GlobalStyles } from '../../constants/styles';
import MainBG from '../../UI/MainBG';
import PrimaryButton from '../../UI/PrimaryButton';
import ConfettiCannon from 'react-native-confetti-cannon';


const WorkoutComplete = ({ navigation }) => {

    const [showConfetti, setShowConfetti] = useState(false);


    // Hide the back button in the header
    useEffect(() => {
        navigation.setOptions({
            headerLeft: null,
            headerShown: false,
        });
        setShowConfetti(true);
        }, []);

      const today = new Date().toLocaleDateString();

      const handleAnimationEnd = () => {
        setShowConfetti(false);
      };
      

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
        {showConfetti && (
          <ConfettiCannon
            count={200}
            origin={{ x: -10, y: -10 }}
            onAnimationEnd={handleAnimationEnd}
            fallSpeed={2500}
            autoStart={true}
            autoStartDelay={0}
            fadeOut={true}
            colors={[GlobalStyles.colors.primary, GlobalStyles.colors.primary50]}
          />
        )}

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
    color: GlobalStyles.colors.primary,
  },
  subTitle: {
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary,
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
