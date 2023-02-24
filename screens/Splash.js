import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import Button from '../UI/Button';

const SplashScreen = ({navigation}) => {


  const enterHandler = () => {
    navigation.navigate('Feed')
    console.log('enter')
  }

  return (
    <View style={styles.container}>
      <ImageBackground 
      source={require('../assets/ergbg.png')} 
      style={styles.image}>
        <Text style={styles.header}>Welcome to Ergbase</Text>
        <Button 
        onPress={enterHandler}
        >Enter</Button>
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
  }
});

export default SplashScreen;
