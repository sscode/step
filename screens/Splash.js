import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import Button from '../UI/Button';
import LoginScreen from './LoginScreen';

const SplashScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <ImageBackground 
      source={require('../assets/ergbg.png')} 
      style={styles.image}>
        <View style={styles.containerInner}>
          <Text style={styles.header}>Welcome to Workout</Text>
          <LoginScreen navigation={navigation} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    fontStyle: 'italic',
    color: GlobalStyles.colors.white,
  },
  containerInner: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default SplashScreen;
