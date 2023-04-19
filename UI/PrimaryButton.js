import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constants/styles';

const PrimaryButton = ({ title, onPress, disabled, small }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        small ? styles.smallButton : null,
        disabled ? styles.disabledButton : null,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    padding: 10,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: GlobalStyles.colors.primary500,
    borderRadius: 10,
    backgroundColor: GlobalStyles.colors.primary700,
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
});

export default PrimaryButton;
