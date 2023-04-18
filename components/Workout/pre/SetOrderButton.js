import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';

const SetOrderButton = ({ onPress }) => (
  <TouchableOpacity style={styles.setOrderButton} onPress={onPress}>
    <Text style={styles.setOrderButtonText}>Set Order</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  setOrderButton: {
    marginTop: 20,
    alignSelf: 'center',
    width: 200,
    padding: 10,
    borderRadius: 10,
    backgroundColor: GlobalStyles.colors.black,
  },
  setOrderButtonText: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: GlobalStyles.colors.white,
    fontSize: 16,
  },
});

export default SetOrderButton;
