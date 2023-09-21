import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import { GlobalStyles } from '../constants/styles';

const MainBG = ({ children }) => {
  return (
    <View style={styles.bg}>
      {children}
    </View>
    // <ImageBackground
    //   source={require('../assets/bg1-splash.png')}
    //   style={styles.backgroundImage}
    //   resizeMode="cover"
    // >
    //   {children}
    // </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: GlobalStyles.colors.black,
  },
});

export default MainBG;
