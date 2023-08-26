import React, { useEffect, useRef, useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Pressable, Animated } from 'react-native';
import { GlobalStyles } from '../constants/styles';

const PrimaryButton = ({ title, onPress, disabled, small, style }) => {
  const [isPressed, setIsPressed] = useState(false);
  const animatedScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animatedScale.setValue(1);
  }, []);

  const pressAnimation = () => {
    animatedScale.setValue(0.8);
    Animated.spring(animatedScale, {
      toValue: 1.1,
      bounciness: 15,
      speed: 1,
      useNativeDriver: true,
    }).start();
    setIsPressed(true);
  };

  const handlePressOut = () => {
    animatedScale.setValue(1);
    setIsPressed(false);
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        small && styles.smallButton,
        isPressed && styles.longPressStyle,
        style === 'red' && styles.redButton,
        style === 'green' && styles.greenButton,
      ]}
      onPressIn={pressAnimation}
      onPress={onPress}
      disabled={disabled}
      onPressOut={handlePressOut}
    >
      {({ pressed }) => {
        return (
          <Animated.Text style={[{ transform: [{ scale: animatedScale }] }]}>
            <Text style={styles.buttonText}>{title}</Text>
          </Animated.Text>
        );
      }}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 10,
    marginVertical: 20,
    borderWidth: 2,
    borderRadius: 10,
  },
  redButton: {
    backgroundColor: GlobalStyles.colors.error500,
    borderColor: GlobalStyles.colors.red500,
  },
  greenButton: {
    backgroundColor: GlobalStyles.colors.primary700,
    borderColor: GlobalStyles.colors.primary500,
  },
  smallButton: {
    width: '20%',
  },
  buttonText: {
    fontSize: 18,
    color: GlobalStyles.colors.white,
    fontWeight: 'bold',
  },
  disabledButton: {
    opacity: 0.5,
  },
  longPressStyle: {
    backgroundColor: GlobalStyles.colors.black,
  },
});

export default PrimaryButton;
